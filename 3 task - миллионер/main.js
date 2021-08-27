let main = {
    correctAnswers: 0,
    quistionsAsked: 0,

    /**
     * Запускает игру
     */
    start() {
        alert(`Игра началась. Нажмите "0" для выхода`);
        while(true){
        let question = questionPull.getQuestion(this.quistionsAsked);
        if(question == null){
            let startAgain = 0;
            if(this.correctAnswers == 5) {
               alert('Вы ответили на ВСЕ вопросы и выиграли миллион!');
               return;
                
            }
            else {
                alert(`Вы ответили правильно на ${this.correctAnswers} вопросов`)
                startAgain = prompt('Вы хотите сыграть снова? Нажмите 1 для продолжения.')
                if(startAgain == 1){
                    this.correctAnswers = 0;
                    this.quistionsAsked = 0;
                    this.initGame();
                } else {return;}
            }
        }
        let answer = parseInt(prompt(`Задача: ${question.Question}\nВыберите НОМЕР ответа:\n${question.Answers.join('\n')}`));
        if (answer == 0) {
            alert('Игра окончена. Возвращайтесь снова!');
            break;
        }
        if(answer == question.RightAnswer){
            this.correctAnswers++;
            this.quistionsAsked++;
            continue;
            }
        else {
            this.quistionsAsked++;
            continue;
        }
        } 
    },

    /**
     * Инициализирует игру, приветствует игрока
     */
    initGame() {
        alert(`Добро пожаловать в игру "Кто хочет стать миллионером!" Ответьте на 5 вопросов для победы.`);
        this.start();
    }
}

main.initGame();