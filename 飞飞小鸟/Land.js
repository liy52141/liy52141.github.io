function Land(info) {
    this.image = info.image;
    this.x = info.x;
    this.canvas = info.canvas;
    this.context = info.context;
    this.speed = 2;
}

Land.prototype = {
    constructor: Land,
    draw: function () {
        //向左移动
        this.x -= this.speed;
        //如果走出舞台， 就排到队伍的后面去
        if (this.x <= -this.image.width) {
            this.x = this.image.width * 3;
        }
        //绘制到画布上
        this.context.drawImage(this.image, this.x, this.canvas.height-this.image.height, this.image.width, this.image.height);
    }
}