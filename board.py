from pieces import DIRECTIONS, COLOURS
import copy


def parsePair(pair):
  return f'\033[{COLOURS.get(pair[1])}m{DIRECTIONS.get(pair[0])}\033[0m'

class Board(object):
  def __init__(self, grid = [], placedPieces = set(), constraints = dict()):
    self.width = 6
    self.height = 3
    if len(grid) == 0:
      self.grid = tuple(tuple((0,'') for i in range(self.width)) for j in range(self.height))
    else:
      self.grid = grid

    self.constraints = constraints
    
    self.placedPieces = placedPieces

  def __str__(self):
    string = ""
    for r, row in enumerate(self.grid):
      for c, pair in enumerate(row):
        if (r,c) in self.constraints and pair[0] == 0:
          string += f' \u001b[35m{DIRECTIONS.get(self.constraints.get((r,c))[0])}\033[0m'
        else:
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
        if p > 0 and self.grid[currentX][currentY][0] != 0:
          return False
        pos = (r+x,c+y)
        if p != 0:
          if pos in self.constraints:
            if p != self.constraints[pos][0]:
              return False
            if self.constraints[pos][1] != '' and piece.colour != self.constraints[pos][1]:
              return False
    return True
      

  def placePiece(self, piece, position):
    r = position[0]
    grid = [[item for item in row] for row in self.grid]

    if not self.canPlace(piece, position):
      raise Exception('Cannot place piece')

    for row in piece.piece:
      c = position[1]
      for p in row:
        if p > 0:
          grid[r][c] = (p, piece.colour)
        c += 1
      r += 1

    return Board(tuple(tuple(pos for pos in row) for row in grid), self.placedPieces | set([piece.colour]), self.constraints)



if __name__ == '__main__':
  board = Board()
  print(board)
  from pieces import Piece
  piece = Piece('orange')
  print(piece)
  if board.canPlace(piece, [0,0]):
    board.placePiece(piece, [0,0])
  print(board)
  piece = Piece('yellow')
  piece.rotate_right()
  piece.rotate_right()
  print(piece)
  if board.canPlace(piece, [0,1]):
    board.placePiece(piece, [0,1])
  print(board)

  piece = Piece('red')
  print(piece)
  if board.canPlace(piece, [4,5]):
    board.placePiece(piece, [4,5])
  print(board)
