let audio = null
// 在文档加载时预加载音频
document.addEventListener("DOMContentLoaded", () => {
  audio = new Audio("/audio/1.flac")
  audio.preload = "auto"
})
const playPauseButton = document.getElementById('playPauseButton');
let isPlaying = false; // 初始状态为未播放

playPauseButton.addEventListener('click', () => {
  isPlaying = !isPlaying; // 切换播放状态

  if (isPlaying) {
    // 如果当前是播放状态，则开始播放音频并更新按钮样式
    audio.play();
    playPauseButton.classList.add('playing');
  } else {
    // 如果当前是暂停状态，则暂停音频并更新按钮样式
    audio.pause();
    playPauseButton.classList.remove('playing');
  }
});