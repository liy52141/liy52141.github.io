function Pipe(info) {
    //图片
    this.image = info.image;
    //水平位置
    this.x = info.x;
    //画布和画图工具
    this.canvas = info.canvas;
    this.context = info.context;
    //移动速度
    this.speed = 2;
    //管道之间的间隔
    this.gap = info.gap;
}

//构造函数原型
Pipe.prototype = {
    constructor: Pipe,
    //绘制方法
    draw: function () {
        //改变位置
        this.x -= this.speed;
        //如果移出舞台，跑到屏幕的外面
        if (this.x <= -this.image.width) {
            this.x = this.image.width * 5 + this.gap * 6;
        }

        //开始画图
        this.context.drawImage(this.image, this.x, 0, this.image.width, this.image.height);
    }
}