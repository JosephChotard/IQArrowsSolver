from multiprocessing import Array
from pieces import PIECES, Piece
from board import Board
import copy
import numpy
import json
import multiprocessing
from multiprocessing import Process, Array, Manager
import time

def getNeighbors(board, pos):
  sides = (
    (-1,0),
    (1,0),
    (0,1),
    (0,-1)
  )
  positions = []
  grid = board.grid
  HEIGHT = len(grid)
  WIDTH = len(grid[0])
  for side in sides:
    x = pos[0] + side[0]
    y = pos[1] + side[1]
    if not (x < 0 or x >= HEIGHT or y < 0 or y >= WIDTH):
      positions.append(grid[x][y])
  return positions

def getAllPossibleMoves(board, availablePieces):
  possibleMoves = set()
  for x, row in enumerate(board.grid):
    for y, cell in enumerate(row):
      if cell['state'] == 0:
        if all([neighbour['state']!= 0 for neighbour in getNeighbors(board, (x,y))]):
          return False
      for piece in availablePieces:
        for i in range(2):
          rotations = 3
          if i == 1 and piece.symmetric:
            break
          elif i == 1:
            piece.flip()
          for rotation in range(rotations):
            if rotation != 0:
              piece.rotate_right()
            if board.canPlace(piece, (x,y)):
              possibleMoves.add((piece.copy(), (x,y)))
              # print(f'\n{piece} at pos {(x,y)}')
            # print(board.placePiece(piece, (x,y)))
  return possibleMoves


def explore(board, availablePieces, POSSIBLE_BOARDS, EXPLORED_BOARDS, level=0):
  if str(board.grid) in EXPLORED_BOARDS:
    return False
  EXPLORED_BOARDS[str(board.grid)] = 1
  # print(f'LEVEL {level}\n',tuple(map(lambda x:x.colour, availablePieces)),f'\n{board}')
  if len(availablePieces) == 0:
    POSSIBLE_BOARDS.append(board.grid.tolist())
    return True
  if len(POSSIBLE_BOARDS) > 10:
    if multiprocessing.current_process().name == '0':
      save(EXPLORED_BOARDS, POSSIBLE_BOARDS)
  possibleMoves = getAllPossibleMoves(board, availablePieces)
  if not possibleMoves:
    return False
  for piece, position in possibleMoves:
    b = board.placePiece(piece, position)
    # print(f'[LEVEL {level}] Placed: {piece.colour}, {len(availablePieces)} pieces left\n{str(b)}')
    # print(f'\n{piece} at pos {position}')
    # print(board.placePiece(piece, position))
    explore(b, tuple(p for p in availablePieces if p.colour != piece.colour), POSSIBLE_BOARDS, EXPLORED_BOARDS, level+1)

pieces = [Piece(colour) for colour in PIECES.keys() if colour not in []]

CONSTRAINTS = {
  # (0,1): (2, ''),
  # (1,0): (2, ''),
  # (1,3): (2, ''),
  # (2,4): (2, ''),
}

# CONSTRAINTS = {
#   (0,0): (2, ''),
#   (0,1): (3, ''),
# }


def save(EXPLORED_BOARDS, POSSIBLE_BOARDS):
  # print(f'Saving {len(POSSIBLE_BOARDS)} boards')
  with open('grids.json', 'r+') as json_file:
    try:
      data = json.load(json_file)
    except:
      data = []
    # print(data)
  # print(POSSIBLE_BOARDS)
  with open('grids.json', 'w') as json_file:
    print(f'Saving {len(POSSIBLE_BOARDS)} boards')
    new = data + [board for board in POSSIBLE_BOARDS]
    print(len(new))
    json.dump(new, json_file)
  POSSIBLE_BOARDS *= 0
  time.sleep(1)


# 3360 possible boards!!

if __name__ == '__main__':
  board = Board(
    # grid=(((0, ''), (0, ''), (0, ''), (0, ''), (0, ''), (0, '')),
    #    ((0, ''), (0, ''), (0, ''), (0, ''), (0, ''), (0, '')), 
    #    ((0, ''), (0, ''), (0, ''), (0, ''), (0, ''), (0, ''))),
    constraints=CONSTRAINTS
  )
  print(board)


  with Manager() as manager:
    # POSSIBLE_BOARDS = Array(c_char_p, 10000)
    POSSIBLE_BOARDS = manager.list()
    EXPLORED_BOARDS = manager.dict()

    possibleMoves = getAllPossibleMoves(board, pieces)
    jobs = []
    max = 8
    for index, (piece, position) in enumerate(tuple(possibleMoves)):
      b = board.placePiece(piece, position)
      print(f'Started process\n{b}')
      p = Process(name=str(index%max),target=explore, args=(b, tuple(p for p in pieces if p.colour != piece.colour), POSSIBLE_BOARDS, EXPLORED_BOARDS, 1))
      # explore(b, tuple(p for p in pieces if p.colour != piece.colour), 1)
      jobs.append(p)
      p.start()
      if len(jobs) >= max:
        for job in jobs:
          job.join()
        jobs = []
        # for board in POSSIBLE_BOARDS:
        #   print(board)
        #   print('')
        print(f'{len(POSSIBLE_BOARDS)} possible boards (not done)')
        save(EXPLORED_BOARDS, POSSIBLE_BOARDS)
        

    for job in jobs:
      job.join()
    print('All have finished')

    print(f'{len(POSSIBLE_BOARDS)} possible boards')

    save(EXPLORED_BOARDS, POSSIBLE_BOARDS)


