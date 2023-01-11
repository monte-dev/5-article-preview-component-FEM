const shareBtn = document.getElementById("shareBtn");
const shareBtnDark = document.getElementById("shareBtnDark");
const shareEl = document.getElementById("dark");
const authorEl = document.getElementById("light");
const shareTooltip = document.getElementById("shareTooltip");

function shareClick() {
  if (window.screen.width <= 768) {
    shareBtn.addEventListener("click", () => {
      authorEl.style.display = "none";
      shareEl.style.display = "flex";
    });
    shareBtnDark.addEventListener("click", () => {
      authorEl.style.display = "flex";
      shareEl.style.display = "none";
    });
  } else {
    shareBtn.addEventListener("click", () => {
        shareTooltip.style.display = 'block'
    });
  }
}
shareClick();
