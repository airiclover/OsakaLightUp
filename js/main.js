"use strict"


// 幅が768px以上のビューポートをターゲットとする条件を作成
const mediaQuery = window.matchMedia('(min-width: 961px)')

function handleTabletChange(e) {
  // メディアクエリがtrueかどうかを確認
  if (e.matches) {
    // その後、eventを実行
    setTimeout(() => {
      topMenu.style.backgroundImage = "url(./img/IMG_0311.JPG)";
    }, 1000);
  } else {
    setTimeout(() => {
      topMenu.style.backgroundImage = "url(./img/IMG_1111.JPG)";
    }, 1000);
  }
}

// イベントリスナーを登録
mediaQuery.addListener(handleTabletChange);

// 初期チェック
handleTabletChange(mediaQuery);