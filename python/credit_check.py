def credit_check(cardnum):
    from functools import reduce
    arr = []
    for i in range(0, len(cardnum)):
        if (i % 2 == 0):
            if (int(cardnum[i]) * 2 < 10):
                arr.append(int(cardnum[i]) * 2)
            else:
                arr.append((int(cardnum[i]) * 2) - 9)
        else:
            arr.append(int(cardnum[i]))
    if (reduce(lambda a, b: a + b, arr) % 10 == 0):
        return ('The number is valid!')
    else:
        return ('The number is invalid!')
#print(credit_check('5541808923795240')) #valid
#print(credit_check("4024007106512380")) #invalid