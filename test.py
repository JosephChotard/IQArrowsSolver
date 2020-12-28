
import numpy


arr1 = numpy.array([['a','b'],['c','d']])
# flattenedArr1 = [list(cell for cell in row) for row in arr1]

print(arr1.flatten())

print(arr1.reshape(-1,6))

# import itertools
# binaryCombinations = list(map(list, itertools.product([0, 1], repeat=4)))

# combinations = [
#   [
#     flattenedArr1[i] if digit else (0, '') for i, digit in enumerate(binaryCombination)
#   ] for binaryCombination in binaryCombinations
# ]

# print(combinations)