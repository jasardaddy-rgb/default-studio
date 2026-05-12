// AI简单“模拟逻辑”
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
}

// 生成未来事件
function generateEvent() {
  const event = document.getElementById("event");

  const events = [
    "2035年：AI开始参与城市管理",
    "2040年：人类与AI共同学习系统诞生",
    "2050年：AI辅助太空殖民计划启动",
    "未来：AI成为每个人的数字分身",
    "未来：教育完全个性化"
  ];

  event.innerText = events[Math.floor(Math.random() * events.length)];

  changeBG();
}

// 背景变化
function changeBG() {
  const colors = [
    "radial-gradient(circle at top, #1a2b4f, #050814)",
    "radial-gradient(circle at top, #2b1a4f, #0a0514)",
    "radial-gradient(circle at top, #0f3d3a, #050814)",
    "radial-gradient(circle at top, #3a1a2f, #050814)"
  ];

  document.querySelector(".bg").style.background =
    colors[Math.floor(Math.random() * colors.length)];
}
