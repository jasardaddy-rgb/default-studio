function askAI() {
  const input = document.getElementById("input").value;
  const answer = document.getElementById("answer");

  if (!input) {
    answer.innerText = "请输入问题";
    return;
  }

  const responses = [
    "未来AI可能成为人类的协作伙伴，而不是替代者。",
    "这个问题在未来10年会有重大变化。",
    "AI会重塑教育、工作和创造力。",
    "人类与AI将进入共生阶段。",
    "未来世界将由人类与AI共同决策。"
  ];

  answer.innerText = responses[Math.floor(Math.random() * responses.length)];

  changeBG();
  addAchievement("第一次探索未来");
}

function generateEvent() {
  const events = [
    "🚀 2038：AI参与城市管理系统",
    "🧠 2042：人类记忆可数字化存储",
    "🌌 2050：AI辅助星际旅行",
    "🤖 未来：每个人拥有AI分身",
    "⚡ 未来：教育完全个性化"
  ];

  document.getElementById("event").innerText =
    events[Math.floor(Math.random() * events.length)];

  changeBG();
  addAchievement("未来观察者");
}

function unlock() {
  const effects = [
    "AI系统开始学习你的思维模式...",
    "检测到未来意识连接...",
    "模拟宇宙生成中...",
    "AI实验成功启动..."
  ];

  alert(effects[Math.floor(Math.random() * effects.length)]);

  changeBG();
  addAchievement("AI实验者");
}

function changeBG() {
  const colors = [
    "radial-gradient(circle at top, #1a2b4f, #050814)",
    "radial-gradient(circle at top, #2b1a4f, #050814)",
    "radial-gradient(circle at top, #0f3d3a, #050814)",
    "radial-gradient(circle at top, #3a1a2f, #050814)"
  ];

  document.querySelector(".bg").style.background =
    colors[Math.floor(Math.random() * colors.length)];
}

function addAchievement(text) {
  document.getElementById("achieve").innerText = "🏆 " + text;
}
