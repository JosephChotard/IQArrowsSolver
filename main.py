from pieces import PIECES, Piece
from board import Board
import copy

def getAvailablePlace(board):
  for x, row in enumerate(board.grid):
    for y, column in enumerate(row):
      if column[0] == 0:
        return (x, y)
  return -1

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


POSSIBLE_BOARDS = []
EXPLORED_BOARDS = set()

def isPossible(board):
  # Check if any empty single cell
  for x, row in enumerate(board.grid):
    for y, cell in enumerate(row):
      if cell[0] == 0:
        if all([neighbour[0] != 0 for neighbour in getNeighbors(board, (x,y))]):
          return False
  return True

def getAllPossibleMoves(board, availablePieces):
  possibleMoves = set()
  for x, row in enumerate(board.grid):
    for y, column in enumerate(row):
      for piece in availablePieces:
        rotations = 4
        if piece.colour == 'purple':
          rotations = 2
        for rotation in range(rotations):
          piece.rotate_right()
          if board.canPlace(piece, (x,y)):
            possibleMoves.add((piece.copy(), (x,y)))
            # print(f'\n{piece} at pos {(x,y)}')
            # print(board.placePiece(piece, (x,y)))
  return possibleMoves


def explore(board, availablePieces, level=0):
  if board.grid in EXPLORED_BOARDS:
    return False
  EXPLORED_BOARDS.add(board.grid)
  if not isPossible(board):
    return False
  # print(f'LEVEL {level}\n',tuple(map(lambda x:x.colour, availablePieces)),f'\n{board}')
  if len(availablePieces) == 0:
    # print(f'Filled the Board!\n{board}')
    POSSIBLE_BOARDS.append(board)
    return True
  possibleMoves = getAllPossibleMoves(board, availablePieces)
  for piece, position in possibleMoves:
    b = board.placePiece(piece, position)
    # print(f'[LEVEL {level}] Placed: {piece.colour} with rotation: {rotation}, {len(availablePieces)} pieces left\n{str(b)}')
    # print(f'\n{piece} at pos {position}')
    # print(board.placePiece(piece, position))
    explore(b, tuple(p for p in availablePieces if p.colour != piece.colour), level+1)

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

board = Board(
  grid=(((0, ''), (0, ''), (0, ''), (0, ''), (0, ''), (0, '')),
     ((0, ''), (0, ''), (0, ''), (0, ''), (0, ''), (0, '')), 
     ((0, ''), (0, ''), (0, ''), (0, ''), (0, ''), (0, ''))),
  constraints=CONSTRAINTS)

# 3360 possible boards!!

print(board)
explore(board, pieces)
from pprint import pprint
for board in POSSIBLE_BOARDS:
  for constraint in CONSTRAINTS.keys():
    if board.grid[constraint[0]][constraint[1]][0] != CONSTRAINTS[constraint]:
      continue
  print('')
  print(board)
  print('')
print(f'{len(POSSIBLE_BOARDS)} possible boards')