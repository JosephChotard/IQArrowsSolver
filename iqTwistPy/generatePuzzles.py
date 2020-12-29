import json
from pieces import PIECES, Piece
from board import Board
import numpy
from findGrids import fullfillsConstraint
from tqdm import tqdm
import itertools
import json

pieces = set(colour for colour in PIECES.keys())

with open('grids.json') as json_file:
    data = json.load(json_file)

ONE_COUNT = 5
def hasAcceptableOnes(matrix):
    ones = matrix.count(1)
    return ones == ONE_COUNT

def toConstraint(grid):
    constraint = {}
    for rowIndex, row in enumerate(grid):
        for cellIndex, cell in enumerate(row):
            if cell:
                constraint[(rowIndex, cellIndex)] = (cell, '')
    return constraint

binaryCombinations = list(filter(hasAcceptableOnes, map(list, itertools.product([0, 1], repeat=6*3))))

validConstraints = []
constraintFile = open(f'constraints-{ONE_COUNT}.txt', 'a')

PREV_COUNT = 1009
for fakeIndex, g in enumerate(tqdm(data[PREV_COUNT:])):
    index = PREV_COUNT + fakeIndex
    # for grid in data:
    grid = numpy.array(tuple(tuple(cell[0] for cell in row) for row in g))
    flatGrid = grid.flatten()
    # print(grid, flatGrid)

    combinations = [
    numpy.array(
        tuple(flatGrid[i] if digit else 0 for i, digit in enumerate(binaryCombination))
    ) for binaryCombination in binaryCombinations
    ]

    combinations = [arr.reshape(-1,6) for arr in combinations]



    for combination in combinations:
        constraint = toConstraint(combination)
        unique = True
        count = 1
        for i,grid in enumerate(data):
            if i != index and fullfillsConstraint(grid, constraint):
                unique = False
                count += 1
                break
        if unique:
            validConstraints.append(constraint)
            break

    if len(validConstraints) > 100:
        constraintFile.write('\n'.join(map(str, validConstraints)))
        constraintFile.write(f'\n')
        constraintFile.flush()
        validConstraints = []
        print(f'\nWrote to file, current data index: {index}')

index = len(data) - PREV_COUNT
constraintFile.write('\n'.join(map(str, validConstraints)))
# constraintFile.write(f'\n{PREV_COUNT + index}\n')
constraintFile.flush()
validConstraints = []
print(f'\nWrote to file, current data index: {PREV_COUNT + index}')
constraintFile.close()
# board = Board(grid=grid, placedPieces=pieces)
# correct = True
# for constraint in CONSTRAINTS.keys():
#   if board.grid[constraint[0]][constraint[1]][0] != CONSTRAINTS[constraint][0]:
#     correct = False
#     continue
#   if CONSTRAINTS[constraint][1] != '' and board.grid[constraint[0]][constraint[1]][1] != CONSTRAINTS[constraint][1]:
#     correct = False
#     continue
# if correct:
