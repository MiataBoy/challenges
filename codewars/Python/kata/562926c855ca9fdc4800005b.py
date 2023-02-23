# Part of KATA 562926c855ca9fdc4800005b
# https://www.codewars.com/kata/562926c855ca9fdc4800005b/train/python
# Goal is to display the result of a specified number to its specified power
# number_to_pwr(3,3) should return 27

def number_to_pwr(number, p):
    result = 1
    for i in range(p):
        result *= number
    return result
