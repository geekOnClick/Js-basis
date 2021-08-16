// Task #6
/* Программа должна спросить у пользователя число, это будет количество денег, которое он хочет положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104
То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного числа
*/
let number = prompt('Какое число Вы хотите положить в банк?');
isWrong(number);

function isWrong(number) {
    if (isNaN(parseInt(number)) == true || parseInt(number) < 0) {
        alert('Введите корректное число.');
        number = prompt('Какое число Вы хотите положить в банк?');
        isWrong(number);
    }
    else {
        makeCorrectCase(number);
    }
}

function makeCorrectCase(number){
let lastDigit = 0;
if (number > 20) {
    lastDigit = number.slice(number.length - 1);
}
else {
    lastDigit = number.slice(number.length - 2);
}

let rubl = "";
if (lastDigit > 10 && lastDigit <= 20) {
    rubl = "рублей";
}
else if (lastDigit == 0 || (lastDigit >= 5 && lastDigit <= 10)) {
    rubl = "рублей";
}
else if (lastDigit == 1) {
    rubl = "рубль";
}
else if (lastDigit > 1 && lastDigit <= 4) {
    rubl = "рубля";
}
alert(`Ваша сумма в ${number} ${rubl} успешно зачислена.`)
}

