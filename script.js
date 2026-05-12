function changeTheme() {
  const colors = [
    "radial-gradient(circle at top, #1a2b4f, #050814)",
    "radial-gradient(circle at top, #2b1a4f, #0a0514)",
    "radial-gradient(circle at top, #0f3d3a, #050814)",
    "radial-gradient(circle at top, #1f3a5a, #02040a)"
  ];

  const bg = document.querySelector(".bg");
  bg.style.background = colors[Math.floor(Math.random() * colors.length)];
}
