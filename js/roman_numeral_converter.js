function convertToRoman(num) {
    let romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let arabs = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let arr = [];
    let i = 0;

    while (num != 0) { //пока число 'num' не будет равно нулю
        num = num - arabs[i]; //от числа 'num' вычитаем число из списка 'arabs', по порядку [1000, 900, 500 и тд]
        if (num < 0) { //если при вычитании число стало меньше нуля
            num = num + arabs[i]; //восстанавливаем это число
        } else { //в остальных случаях, если от числа 'num' удалось отнять число из списка 'arabs', и число 'num' при этом не стало меньше нуля
            arr.push(romans[i]); //записываем индекс из списка 'romans' в список 'arr'
            i = -1; //еще раз проходимся по списку 'arabs' с самого его начала
        }
        i++;
    }

    return arr.join('')
}

convertToRoman(2022);
