let mover = {
     /**
         * Получает и отдает направление от пользователя
         * return направления, отданного пользователем
    */
    getDirection(){
       const availableDirection = [1,2,,3,4,5,6,7,8,9];
       while(true){
           let direction = parseInt(prompt('Нажмите 2,4,6,8 для хода, Отмена для выхода'));
           if(isNaN(direction)){
                return null;
           }
           if(!availableDirection.includes(direction)){
               alert('для перемещения введите 2,4,6,8');
               continue;
           }
           return direction;
       }
    },
    /**
     * Отдает следующую точку, в которой будет находиться игрок
     * @param {int} direction
     * @returns {{x:int}{y:int}} 
     */
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        }
        switch(direction){
            case 1:
                if(nextPosition.y == config.rowsCount-1 || nextPosition.x == 0 ){
                    alert('Вы вышли за рамки поля, выберите другое направление')
                    break;
                }
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 2:
                if(nextPosition.y == config.rowsCount-1){
                    alert('Вы вышли за рамки поля, выберите другое направление')
                    break;
                }
                nextPosition.y++;
                break;
            case 3:
                if(nextPosition.y == config.rowsCount-1 || nextPosition.x == config.colsCount-1){
                    alert('Вы вышли за рамки поля, выберите другое направление')
                    break;
                }
                nextPosition.y++;
                nextPosition.x++;;
                break;    
            case 4:
                if(nextPosition.x == 0){
                    alert('Вы вышли за рамки поля, выберите другое направление')
                    break;
                }
                nextPosition.x--;
                break;
            case 6:
                if(nextPosition.x == config.colsCount-1){
                    alert('Вы вышли за рамки поля, выберите другое направление')
                    break;
                }
                nextPosition.x++;
                break;
            case 7:
                if(nextPosition.x == 0 || nextPosition.y == 0 ){
                    alert('Вы вышли за рамки поля, выберите другое направление')
                    break;
                }
                nextPosition.y--;
                nextPosition.x--;
                break;    
            case 8:
                if(nextPosition.y == 0){
                    alert('Вы вышли за рамки поля, выберите другое направление')
                    break;
                }
                nextPosition.y--;
                break;
            case 9:
                if(nextPosition.y == 0 || nextPosition.x == config.colsCount-1){
                    alert('Вы вышли за рамки поля, выберите другое направление')
                    break;
                }
                nextPosition.y--;
                nextPosition.x++;;
                break;    
        }
        return nextPosition;
    }
}