import json
from pieces import PIECES, Piece
from board import Board

pieces = set(colour for colour in PIECES.keys())

CONSTRAINTS = {
  (0,1): (2, ''),
  (1,0): (2, ''),
  (1,3): (2, ''),
  (2,4): (2, ''),
}

with open('grids.json') as json_file:
    data = json.load(json_file)
    for grid in data:
      board = Board(grid=grid, placedPieces=pieces)
      correct = True
      for constraint in CONSTRAINTS.keys():
        if board.grid[constraint[0]][constraint[1]][0] != CONSTRAINTS[constraint][0]:
          correct = False
          continue
      if correct:
        print(board)
        print()
