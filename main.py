from pieces import PIECES, Piece
from board import Board

def getAvailablePlace(board):
  for x, row in enumerate(board.grid):
    for y, column in enumerate(row):
      if column[0] == 0:
        return [x, y]
  return -1


POSSIBLE_BOARDS = []

def explore(board, availablePieces, level=0):
  if len(availablePieces) == 0:
    # print(f'Filled the Board!\n{board}')
    POSSIBLE_BOARDS.append(board)
    return
  for i, availablePiece in enumerate(availablePieces):
    availablePlace = getAvailablePlace(board)
    rotations = 4
    if availablePiece.colour == 'purple':
      rotations = 2
    for rotation in range(rotations):
      piece = availablePiece.copy()
      # All rotations of piece
      for _ in range(rotation):
        piece.rotate_right()
      if availablePlace != -1 and board.canPlace(piece, availablePlace):
        b = board.placePiece(piece, availablePlace)
        # print(f'[LEVEL {level}] Placed: {piece.colour} with rotation: {rotation}, {len(availablePieces)} pieces left\n{str(b)}')
        explore(b, availablePieces[:i] + availablePieces[i+1:], level+1)
    # if level == 0:
    #   return

pieces = [Piece(colour) for colour in PIECES.keys()]
board = Board()
explore(board, pieces)
from pprint import pprint
for board in POSSIBLE_BOARDS[:100]:
  print('')
  print(board)
  print('')
print(f'{len(POSSIBLE_BOARDS)} possible boards')