import copy

STATES = {
  0: ' ',
  1: '◯',
  2: '●',
}

PIECESARRAY = [
  '',
  'blue1',
  'blue2',
  'red1',
  'red2',
  'green1',
  'green2',
  'yellow1',
  'yellow2',
]

PIECES = {
  "blue1": {
    'piece': [
      [2,2,2],
      [1,1,0]
    ],
    'symmetric': False
  },
  "yellow1": {
    'piece': [
      [0,2,0],
      [1,2,0],
      [0,1,1]
    ],
    'symmetric': False
  },
  "red1": {
    'piece': [
      [2,0],
      [1,2],
      [0,2]
    ],
    'symmetric': False
  },
  "green1": {
    'piece': [
      [0,1,0],
      [1,2,2]
    ],
    'symmetric': False
  },
  "blue2": {
    'piece': [
      [2,2,1,2]
    ],
    'symmetric': True
  },
  "yellow2": {
    'piece': [
      [1,2,2]
    ],
    'symmetric': True
  },
  "red2": {
    'piece': [
      [0,0,2],
      [1,2,1],
    ],
    'symmetric': False
  },
  "green2": {
    'piece': [
      [1,0],
      [1,2],
    ],
    'symmetric': False
  },
}

COLOURS = {
  "red1": '38;2;255;20;20',
  "red2": '38;2;191;55;31',
  "yellow1": '38;2;232;240;22',
  "yellow2": '38;2;255;247;0',
  "blue1": '38;2;83;158;237',
  "blue2": '38;2;13;130;255',
  "green1": '38;2;20;255;20',
  "green2": '38;2;51;255;0',
  '': '40'
}

class Piece(object):
  def __init__(self, colour: str, piece = -1, symmetric = False):
    self.colour = colour
    if piece == -1:
      self.piece = PIECES[colour]['piece']
      self.symmetric = PIECES[colour]['symmetric']
    else:
      self.piece = piece
      self.symmetric = symmetric

  def __str__(self):
    string = f'{self.colour.capitalize()}\n\033[{COLOURS.get(self.colour)}m'
    for row in self.piece:
      string += ' '.join(map(STATES.get, row)) + '\n'
    string = string[:-1] + '\033[0m'
    return string

  def rotate_right(self):
    self.piece = list(zip(*self.piece[::-1]))
    self.piece = [[arrow + 1 if (arrow < 2 and arrow > 0) else (0 if arrow == 0 else 1) for arrow in row] for row in self.piece]

  def flip(self):
    if self.symmetric:
      print(f'{self.colour} is symmetric, flip is useless')
    else:
      self.piece = [row[::-1] for row in self.piece]

  def copy(self):
    return Piece(self.colour, copy.deepcopy(self.piece), self.symmetric)


if __name__ == '__main__':
  for colour in PIECES.keys():
    piece = Piece(colour)
    print(piece)
    piece.flip()
    print(piece)
