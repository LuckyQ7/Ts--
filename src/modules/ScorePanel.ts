// 定义记分牌的类
class ScorePanel {
  score: number = 0; // 分数
  level: number = 1; // 等级

  scoreElement: HTMLElement;
  levelElemnet: HTMLElement;

  maxLevel: number; // 等级上限
  upScore: number; // 多少分时升级

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreElement = document.querySelector("#score")!;
    this.levelElemnet = document.querySelector("#level")!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  // 加分数的方法
  addScore() {
    this.score++;
    this.scoreElement.innerHTML = this.score + "";
    // 每10分升一级
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }
  // 升级的方法
  levelUp() {
    if (this.level >= this.maxLevel) {
      return false;
    }
    this.level++;
    this.levelElemnet.innerHTML = this.level + "";
  }
}

export default ScorePanel;
