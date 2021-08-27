/**
 * Объект игрока, здесь будут все свойства и методы с ним
 * x - позиция по X-координате
 * y - позиция по Y-координате
 */
const player = {
    x: 0,
    y: 0,

    /**
     * Двигает игрока по переданному направлению
     * nextPoint - следующая точка пользователя
     */
    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    }
}