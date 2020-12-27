import json
from pieces import PIECES, Piece
from board import Board

pieces = set(colour for colour in PIECES.keys())

with open('grids.json') as json_file:
    data = json.load(json_file)
    for grid in data:
      board = Board(grid=grid, placedPieces=pieces)
      print(board)
