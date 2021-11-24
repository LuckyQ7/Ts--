// 创建蛇的类
export default class Snake {
  // 蛇的容器
  element: HTMLElement;
  // 表示蛇头的元素
  head: HTMLElement;
  // 蛇的身体 包括舌头  dom的集合会时时更新
  bodies: HTMLCollection;
  constructor() {
    this.element = document.querySelector("#snake")!;
    this.head = document.querySelector("#snake > div") as HTMLElement; // 断言
    this.bodies = this.element.getElementsByTagName("div")!;
  }

  // 获取舌头的坐标
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }
  set X(value: number) {
    // 优化 相同值不调用
    if (this.X === value) {
      return;
    }
    // 判断蛇是否撞墙
    if (value < 0 || value > 290) {
      throw new Error("蛇撞墙了");
    }

    // 判断蛇是否撞到了自己
    this.headAndBodies();

    this.moveBodies();
    this.head.style.left = value + "px";
  }
  set Y(value: number) {
    // 优化 相同值不调用
    if (this.Y === value) {
      return;
    }
    if (value < 0 || value > 290) {
      throw new Error("蛇撞墙了");
    }
    this.headAndBodies();
    this.moveBodies();
    this.head.style.top = value + "px";
  }
  // 给蛇身体添加的方法
  addBody() {
    // 向element添加一个div
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }

  // 移动蛇的身体
  moveBodies() {
    // 从后往前 最后一节等于上一节的位置
    let bds = this.bodies;
    for (let i = bds.length - 1; i > 0; i--) {
      // 上一节的x位置
      let x = (bds[i - 1] as HTMLElement).offsetLeft;
      let y = (bds[i - 1] as HTMLElement).offsetTop;

      // 设置当前身体的位置
      (bds[i] as HTMLElement).style.left = x + "px";
      (bds[i] as HTMLElement).style.top = y + "px";
    }
  }
  // 判断蛇头是否撞到了蛇的身体
  headAndBodies() {
    let bds = this.bodies;
    for (let i = bds.length - 1; i > 1; i--) {
      if (
        this.head.offsetLeft === (bds[i] as HTMLElement).offsetLeft &&
        this.head.offsetTop === (bds[i] as HTMLElement).offsetTop
      ) {
        throw new Error("自己装自己");
      }
    }
  }
}
