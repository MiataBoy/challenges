def duplicate_count(text):
    duplicates = 0
    ignoreList = []
    text = text.lower()
    for char in text:
        if text.count(char) > 1 and char not in ignoreList:
            duplicates += 1
            ignoreList.append(char)
    return duplicates

print(duplicate_count('aA11'))

# Part of KATA 54bf1c2cd5b56cc47f0007a1
# https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/python
# Goal is to find the amount of duplicates in a string.
# aabcdeb should return 2.