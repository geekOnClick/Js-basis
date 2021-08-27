let game = {
    /**
     * Запускает игру
     */
    run() {
        while(true){
            const direction = mover.getDirection();
            if(direction == null) {
                console.log('Game over');
                return;
            }
        const nextPoint = mover.getNextPosition(direction);
        renderer.clear();
        player.move(nextPoint);
        renderer.render();
        }
    },

    // Инициализируется при открытии страницы
    init() {
        console.log('Ваше положение в виде буквы "о" ')
        renderer.render();
        this.run();

    }

};

game.init();