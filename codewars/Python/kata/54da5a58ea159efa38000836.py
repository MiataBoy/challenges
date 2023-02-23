# Part of KATA 54da5a58ea159efa38000836
# https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python
# Given an array of integers, find the one that appears an odd number of times.
# There will always be only one integer that appears an odd number of times.
# [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

def find_it(seq):
    for num in seq:
        amount = seq.count(num)
        if not amount % 2 == 0:
            return num


print(find_it([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))
