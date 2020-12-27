from pieces import PIECES, Piece
from board import Board
import copy

def getAvailablePlace(board):
  for x, row in enumerate(board.grid):
    for y, column in enumerate(row):
      if column[0] == 0:
        return (x, y)
  return -1


POSSIBLE_BOARDS = []
EXPLORED_BOARDS = set()


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
  if len(availablePieces) == 0:
    # print(f'Filled the Board!\n{board}')
    POSSIBLE_BOARDS.append(board)
    return True
  for piece, position in getAllPossibleMoves(board, availablePieces):
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
  # grid=(((1, 'blue'), (2, 'blue'), (2, 'blue'), (4, 'orange'), (3, 'orange'), (0, '')),
  #    ((0, ''), (0, ''), (1, 'blue'), (2, 'orange'), (0, ''), (0, '')), 
  #    ((0, ''), (1, 'purple'), (3, 'purple'), (0, ''), (0, ''), (0, ''))),
  constraints=CONSTRAINTS)

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