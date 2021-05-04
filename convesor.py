
menu = """
||-------------------------------||
        Welcome to Conversor 💰

    [1]  Colombian 
    [2]  Mexican
    [3]  Argentinian

||-------------------------------||

Select type of peso: """


def Conversor(country, dolarValue):
    print('||____ Welcome to Convesor ____||')
    print(f'||____ {country} ____||')
    diner = float(input('Type the value to convert: '))
    convert = diner/dolarValue
    convert = round(convert,2)
    return print(f'Do you have {convert}')

# option = int(input(menu))

if option == 1:
    Conversor('Colombian',3875)
elif option == 2:
    Conversor('Mexican',24)
elif option ==3:
    Conversor('Argentinian',65)
else:
    print('Select a valid option')

