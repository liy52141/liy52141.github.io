function Sky(info) {
    //图片
    this.image = info.image;
    //位置
    this.x = info.x;
    //画图工具
    this.context = info.context;
    //画布
    this.canvas = info.canvas;
    //速度
    this.speed = 2;
}

Sky.prototype = {
    constructor: Sky,
    draw: function () {
        //移动
        this.x -= this.speed;
        //如果走出舞台
        if (this.x <= -this.canvas.width) {
            //就提到队伍的最后面
            this.x = this.canvas.width;
        }

        //将图片绘制到画布上
        this.context.drawImage(this.image, this.x, 0, this.image.width, this.image.height);
    }
}