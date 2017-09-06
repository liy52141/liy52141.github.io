function Bird(info) {
    this.context = info.context;
    this.canvas = info.canvas;
    this.x = info.x;
    this.y = info.y;
    this.image = info.image;
    this.w = this.image.width/3;
    this.h = this.image.height;
    this.index = 0;
    //加速度
    this.aspeed = 0.0005;
    this.speed = 0;
    this.startTime = new Date();

    //最大速度
    this.maxspeed = 0.6;
    //最大角度
    this.maxAngle = 45;
}

Bird.prototype = {
    constructor: Bird,
    draw: function () {
        this.index += 1;
        //计算水平方向第几张图片
        var xindex = this.index % 3;

        //2. 计算小鸟从上一帧到当前帧移动了多远
        var now = new Date();
        var deltaTime = now - this.startTime;
        //从上一帧到当前帧小鸟的位移
        var s = this.speed * deltaTime + this.aspeed * deltaTime * deltaTime / 2;
        //当前帧的小鸟的速度
        this.speed = this.speed + this.aspeed * deltaTime;
        //把当前帧的时间，设为下一帧计算参考的起始时间
        this.startTime = now;

        //3. 改变小鸟的y坐标
        this.y += s;

        //4. 平移坐标系
        this.context.save();
        //translate是累加的
        this.context.translate(this.x + this.w/2, this.y + this.h/2);

        //计算小鸟的旋转的角度
        var percent = this.speed / this.maxspeed;
        var radian = (this.maxAngle * percent) / 180 * Math.PI;
        this.context.rotate(radian);

        //切图显示
        this.context.drawImage(this.image, xindex * this.w, 0, this.w, this.h, -this.w/2, -this.h/2, this.w, this.h);

        this.context.restore();
    }
}