from pieces import DIRECTIONS, COLOURS
import copy


def parsePair(pair):
  return f'\033[{COLOURS.get(pair[1])}m{DIRECTIONS.get(pair[0])}\033[0m'

class Board(object):
  def __init__(self, grid = [], placedPieces = set()):
    self.width = 6
    self.height = 3
    if grid == []:
      self.grid = [[(0,'') for i in range(self.width)] for j in range(self.height)]
    else:
      self.grid = grid
    
    self.placedPieces = placedPieces

  def __str__(self):
    string = ""
    for row in self.grid:
      string += ' '.join(map(parsePair, row)) + "\n"
    return string[:-1]

  def canPlace(self, piece, position):
    if piece.colour in self.placedPieces:
      return False

    r = position[0]
    for row in piece.piece:
      c = position[1]
      for p in row:
        if not (len(self.grid) > r and len(self.grid[r]) > c):
          return False
        if p > 0 and  self.grid[r][c][0] != 0:
          return False
        c += 1
      r += 1
    return True
      

  def placePiece(self, piece, position):
    r = position[0]
    grid = copy.deepcopy(self.grid)


    if piece in self.placedPieces:
      raise Exception('Piece has already been placed')


    for row in piece.piece:
      c = position[1]
      for p in row:
        if not (len(grid) > r and len(grid[r]) > c):
          raise Exception("Piece out of range")
        if p > 0 and grid[r][c][0] != 0:
          raise Exception("Piece cannot be placed here")
        if p > 0:
          grid[r][c] = (p, piece.colour)
        c += 1
      r += 1

    return Board(grid, self.placedPieces | set([piece.colour]))



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
