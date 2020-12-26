import copy

DIRECTIONS = {
  0: '•',
  1: '↑',
  2: '→',
  3: '↓',
  4: '←',
}

PIECES = {
  "blue": [
    [3,0,0],
    [4,4,3]
  ],
  "orange": 
  [
    [2,0],
    [3,1]
  ],
  "red": 
  [
    [3,1,4]
  ],
  "yellow": [
    [4,0],
    [3,3]
  ],
  "green": [
    [2,0],
    [1,3]
  ],
  "purple": [
    [3,1]
  ],
}

COLOURS = {
  "orange": '48:5:166:0',
  "red": '41',
  "yellow": '43',
  "blue": '44',
  "green": '42',
  "purple": '45',
  "": '40'
}

class Piece(object):
  def __init__(self, colour: str, piece = -1):
    self.colour = colour
    if piece == -1:
      self.piece = PIECES[colour]
    else:
      self.piece = piece

  def __str__(self):
    string = f'Piece: {self.colour}\n'
    for row in self.piece:
      string += ' '.join(map(DIRECTIONS.get, row)) + '\n'
    return string[:-1]

  def rotate_right(self):
    self.piece = list(zip(*self.piece[::-1]))
    self.piece = [[arrow + 1 if (arrow < 4 and arrow > 0) else (0 if arrow == 0 else 1) for arrow in row] for row in self.piece]

  def copy(self):
    return Piece(self.colour, copy.deepcopy(self.piece))


if __name__ == '__main__':
  for colour in PIECES.keys():
    piece = Piece(colour)
    print(piece)
    piece.rotate_right()
    piece.rotate_right()
    piece.rotate_right()
    piece.rotate_right()
    print(piece)