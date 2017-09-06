function Pipe2(info) {
    //上部分的图片
    this.topImage = info.topImage;
    //下部分的图片
    this.bottomImage = info.bottomImage;
    //水平位置
    this.x = info.x;
    //画布和画图工具
    this.canvas = info.canvas;
    this.context = info.context;
    //移动速度
    this.speed = 2;
    //管道之间的间隔
    this.gap = info.gap;
    //上管道和下管道中间的间隔
    this.space = 100;
    //部底的间隔
    this.bottomOffset = info.bottomOffset;

    //上下两根管道的高度
    this.topHeight = 0;
    this.bottomHeight = 0;

    //初始化管道的高度
    this.initHeight();

}

//构造函数原型
Pipe2.prototype = {
    constructor: Pipe2,
    //绘制方法
    draw: function () {
        //改变位置
        this.x -= this.speed;
        //如果移出舞台，跑到屏幕的外面
        if (this.x <= -this.topImage.width) {
            this.x = this.topImage.width * 5 + this.gap * 6;
        }

        //开始画图
        //画上面的管道
        this.context.drawImage(this.topImage, this.x, 0, this.topImage.width, this.topHeight);

        //画下面的管道
        this.context.drawImage(this.bottomImage, this.x, this.topHeight + this.space, this.bottomImage.width, this.bottomHeight);

        //上面柱子的路径
        this.context.rect(this.x, 0, this.topImage.width, this.topHeight);
        //画下面的柱子的路径
        this.context.rect(this.x, this.topHeight + this.space, this.bottomImage.width, this.bottomHeight)

    },

    //计算出两个管道的高度
    initHeight: function () {
        //代表这个管道的高度是一个100到250的一个随机值
        //上边管道的高度
        this.topHeight = Math.random() * 150 + 100;
        //下边管道的高度
        this.bottomHeight = this.canvas.height - this.topHeight - this.space - this.bottomOffset;
    }

}