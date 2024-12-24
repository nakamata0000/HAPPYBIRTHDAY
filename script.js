document.getElementById('startAnimation').addEventListener('click', () => {
    const balloonContainer = document.getElementById('balloonContainer');
    const backgroundMusic = document.getElementById('backgroundMusic');
    
    // 音楽を再生
    backgroundMusic.play().catch(error => {
        console.error("音楽が再生できませんでした:", error);
    });

    const balloonColors = ['#ff7f50', '#87cefa', '#ffa07a', '#32cd32', '#ff69b4'];

    // 10個のバルーンを作成
    for (let i = 0; i < 30; i++) { // 10個のバルーン
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
        
        // バルーンをランダムな位置に配置
        const leftPos = Math.random() * 100;
        balloon.style.left = `${leftPos}%`;

        balloonContainer.appendChild(balloon);

        // バルーンのアニメーション時間をランダムに設定
        balloon.style.animationDuration = `${Math.random() * 8 + 4}s`; // アニメーション時間
    }
});