from pieces import STATES, COLOURS
import copy
import numpy


def parsePair(pair):
  return f'\033[{COLOURS.get(pair["colour"])}m{STATES.get(pair["state"])}\033[0m'

class Board(object):
  def __init__(self, grid = numpy.array([]), placedPieces = set(), constraints = dict()):
    self.width = 8
    self.height = 4
    if len(grid) == 0:
      self.grid = numpy.array([[{'colour': '', 'state': 0}for i in range(self.width)] for j in range(self.height)])
    else:
      self.grid = grid

    self.constraints = constraints
    
    self.placedPieces = placedPieces

  def __str__(self):
    string = ""
    for r, row in enumerate(self.grid):
      for c, pair in enumerate(row):
          string += f' {parsePair(pair)}'
      string += "\n"
    return string[:-1]

  def canPlace(self, piece, position):
    if piece.colour in self.placedPieces:
      return False

    r = position[0]
    c = position[1]
    for x, row in enumerate(piece.piece):
      for y, p in enumerate(row):
        currentX = r+x
        currentY = c+y
        if not (len(self.grid) > currentX and len(self.grid[currentX]) > currentY):
          return False
        if p > 0 and self.grid[currentX][currentY]['state'] != 0:
          return False
        # pos = (r+x,c+y)
        # if p != 0:
        #   if pos in self.constraints:
        #     if p != self.constraints[pos][0]:
        #       return False
        #     if self.constraints[pos][1] != '' and piece.colour != self.constraints[pos][1]:
        #       return False
    # print(True, self, piece, position)
    return True
      

  def placePiece(self, piece, position):
    r = position[0]
    # grid = [[item for item in row] for row in self.grid]

    # if not self.canPlace(piece, position):
    #   raise Exception('Cannot place piece')

    grid = self.grid.copy()
    
    for row in piece.piece:
      c = position[1]
      for p in row:
        if p > 0:
          grid[r][c] = {
            'state': p, 
            'colour': piece.colour
            }
        c += 1
      r += 1

    return Board(grid, self.placedPieces | set([piece.colour]), self.constraints)


if __name__ == '__main__':
  board = Board()
  print(board)
  from pieces import Piece
  piece = Piece('green1')
  print(piece)
  if board.canPlace(piece, [0,0]):
    print('place')
    board = board.placePiece(piece, [0, 0])
  piece = Piece('blue2')
  print(piece)
  if board.canPlace(piece, [0,2]):
    print('place')
    board = board.placePiece(piece, [0, 2])
  print(board)
  # print(board)
  # piece = Piece('yellow')
  # piece.rotate_right()
  # piece.rotate_right()
  # print(piece)
  # if board.canPlace(piece, [0,1]):
  #   board.placePiece(piece, [0,1])
  # print(board)

  # piece = Piece('red')
  # print(piece)
  # if board.canPlace(piece, [4,5]):
  #   board.placePiece(piece, [4,5])
  # print(board)
