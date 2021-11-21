// 定义食物类
class Food {
  // 定义一个属性表示食物对应的元素
  element: HTMLElement;
  constructor() {
    // 获取页面的food元素赋值给element
    this.element = document.querySelector("#food")!; // 表示元素不可能为空
  }
  // 获取食物x轴坐标的方法
  get X() {
    return this.element.offsetLeft;
  }
  // 获取食物Y轴坐标的方法
  get Y() {
    return this.element.offsetTop;
  }
  // 随机设置食物的坐标
  change() {
    // 0~294的整数数字
    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;
    this.element.style.left = top + "px";
    this.element.style.top = left + "px";
  }
}

export default Food;
