exit = false

while (exit === false) {

    let hiddenNumber = Math.floor(Math.random() * 1001);
    let enteredNumber = prompt('Я загадал число от 0 до 1000.\nУгадай, какое число я загадал?')
    console.log('Загадано:', hiddenNumber);

    while (true) {
        if (hiddenNumber < enteredNumber) {
            alert('Мое число МЕНЬШЕ!');
            enteredNumber = prompt('Попробуйте еще разок:');
        }
        else if (hiddenNumber > enteredNumber) {
            alert('Мое число БОЛЬШЕ!');
            enteredNumber = prompt('Попробуйте еще разок:');
        }
        else if (hiddenNumber == enteredNumber) {
            alert('Поздравляю, вы угадали!');
            exit = prompt('Сыграем еще (да/нет)?')

            if (exit === 'да' || exit === 'yes' || exit === 'y') {
                exit = false;
                break;
            }
            else if (exit === 'нет' || exit === 'no' || exit === 'n') {
                alert('Отлично поиграли, до встречи!')
                exit = true;
                break;
            }
            else {
                alert('Ответа не понял ¯\\_(ツ)_/¯, до встречи!')
                exit = true;
                break;
            }
        }
        else {
            enteredNumber = prompt('Введено не число! Попробуйте еще разок:')
        }
    }

}