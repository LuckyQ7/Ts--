import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";
// 游戏控制的类
export default class GameControl {
  // 蛇
  snake: Snake;
  // 记分牌
  scorePanel: ScorePanel;
  // 食物
  food: Food;
  // 存贮蛇的移动方向
  direction: string = "ArrowRight";
  // 判断游戏是否结束
  isLive: boolean = true;
  constructor() {
    this.snake = new Snake();
    this.scorePanel = new ScorePanel();
    this.food = new Food();
    // 开始游戏
    this.init();
  }
  // 游戏初始化的方法，调用后游戏立即开始
  init() {
    // 绑定键盘按下事件
    document.addEventListener("keydown", this.keyDownHandler.bind(this));
    // 蛇开始移动
    this.run();
  }
  /* 
   ArrowUp;
  ArrowLeft;
  ArrowDown;
  ArrowRight;
  */
  // 创建一个键盘按下的相应函数
  keyDownHandler(event: KeyboardEvent) {
    // 修改direction属性
    if (this.direction === "ArrowLeft" && event.key === "ArrowRight") {
      return;
    } else if (this.direction === "ArrowRight" && event.key === "ArrowLeft") {
      return;
    } else if (this.direction === "ArrowUp" && event.key === "ArrowDown") {
      return;
    } else if (this.direction === "ArrowDown" && event.key === "ArrowUp") {
      return;
    }
    this.direction = event.key;
  }

  // 控制蛇移动的方法
  run() {
    // 获取蛇的现在的坐标
    let x = this.snake.X;
    let y = this.snake.Y;

    // 根据this.direction修改x y值
    switch (this.direction) {
      case "ArrowUp":
        y -= 10;
        break;
      case "ArrowDown":
        y += 10;
        break;
      case "ArrowLeft":
        x -= 10;
        break;
      case "ArrowRight":
        x += 10;
        break;
    }
    this.checkEat(x, y);
    try {
      this.snake.X = x;
      this.snake.Y = y;
    } catch (e: any) {
      alert("你的水平就到这儿吧");
      this.isLive = false;
    }
    this.isLive &&
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }
  // 检查蛇是否吃到了食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.change();
      this.snake.addBody();
      this.scorePanel.addScore();
    }
  }
}
