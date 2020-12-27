import json


arr = [
  [[1,'orange']]
]

with open('data.json', 'w') as outfile:
    json.dump(arr, outfile)