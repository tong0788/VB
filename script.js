const video = document.getElementById('camera');
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 啟用鏡頭
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error('無法啟用鏡頭:', err);
    });

// 遊戲邏輯
function drawGame() {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    // ...在此添加互動邏輯，例如檢測特定顏色或物件...
    requestAnimationFrame(drawGame);
}

// 開始遊戲
video.addEventListener('play', () => {
    drawGame();
});
