import json
from pieces import PIECES, Piece
from board import Board

def fullfillsConstraint(grid, constraints):
  for constraint in constraints.keys():
    if grid[constraint[0]][constraint[1]][0] != constraints[constraint][0]:
      return False
    if constraints[constraint][1] != '' and grid[constraint[0]][constraint[1]][1] != constraints[constraint][1]:
      return False
  return True


if __name__ == '__main__':
  pieces = set(colour for colour in PIECES.keys())

  CONSTRAINTS = {
    # (0,4): (3, ''),
    # (1,1): (3, ''),
    # (1,3): (3, ''),
    # (2,2): (3, ''),
    # (2,3): (3, ''),
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
          if CONSTRAINTS[constraint][1] != '' and board.grid[constraint[0]][constraint[1]][1] != CONSTRAINTS[constraint][1]:
            correct = False
            continue
        if correct:
          print(board)
          print()
