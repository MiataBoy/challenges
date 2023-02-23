# Part of KATA 52efefcbcdf57161d4000091
# https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/python
# Goal is to gather the amount per character into a dict
# aba should return {a:2,b:1}

def count(string):
    dict = {}
    for char in string:
        if char not in dict:
            dict[char] = 1
        else:
            dict[char] += 1
    return dict


print(count('aba'))
