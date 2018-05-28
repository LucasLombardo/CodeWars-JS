## 6 kyu: Bingo!

Link to problem on CodeWars: https://www.codewars.com/kata/bingo/javascript

### Problem Instructions

Given a random bingo card and an array of called numbers, determine if you have a bingo!

Parameters: card and numbers arrays.

Example input:

```
card = [
  ['B', 'I', 'N', 'G', 'O'],
  [1, 16, 31, 46, 61],
  [3, 18, 33, 48, 63],
  [5, 20, 'FREE SPACE', 50, 65],
  [7, 22, 37, 52, 67],
  [9, 24, 39, 54, 69]
]

numbers = ['B1', 'I16', 'N31', 'G46', 'O61']
```

###Output: true if you have a bingo, false if you do not.

You have a bingo if you have a complete row, column, or diagonal - each consisting of 5 numbers, or 4 numbers and the FREE SPACE.

###Constraints:
Each column includes 5 random numbers within a range (inclusive):

```
'B': 1 - 15
'I': 16 - 30
'N': 31 - 45
'G': 46 - 60
'O': 61 - 75
```

###Notes:
All numbers will be within the above ranges.
FREE SPACE will not be included in the numbers array but always counts towards a bingo.
The first array of the card is the column headers.
numbers array will include only tiles present in the card, without duplicates.
