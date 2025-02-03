document.addEventListener("DOMContentLoaded", () => {
  // 監視する対象のノードを取得
  const targetNode = document.body;

  // 監視の設定
  const config = { childList: true, subtree: true };

  // 要素が追加される度に実行するコールバック関数
  const callback = () => {
    const attentionElement = document.getElementById("attention");
    const recommendElement = document.getElementById("recommend");
    const articleElement = document.getElementById("new-arrival-article-pc");
    const creatorElement = document.getElementById("new-arrival-creator-pc");
    const boxOrderElement = document.querySelector(
      ".e-boxOrder.is-showPcOnly.is-mypageRankingArticle"
    );
    const boxOrderElement2 = document.querySelector(
      ".e-boxOrder.is-showPcOnly.is-mypageRankingCreator"
    );
    const boxOrderElement3 = document.querySelector(
      ".e-boxOrder.is-mypageNewArrivalCrowdfunding.is-showPcOnly"
    );
    const rankingElement = document.querySelector(
      ".headerRanking.c-dropdown.c-dropdown-trigger"
    );

    // 該当要素があれば非表示にする
    if (attentionElement) {
      attentionElement.style.display = "none";
    }

    if (recommendElement) {
      recommendElement.style.display = "none";
    }

    if (articleElement) {
      articleElement.style.display = "none";
    }

    if (creatorElement) {
      creatorElement.style.display = "none";
    }

    if (boxOrderElement) {
      boxOrderElement.style.display = "none";
    }

    if (boxOrderElement2) {
      boxOrderElement2.style.display = "none";
    }

    if (boxOrderElement3) {
      boxOrderElement3.style.display = "none";
    }

    if (rankingElement) {
      rankingElement.style.display = "none";
    }
  };

  // MutationObserverのインスタンスを作成
  const observer = new MutationObserver(callback);

  // 監視を開始
  observer.observe(targetNode, config);
});

window.addEventListener("load", () => {
  // 4番目の <a> タグを取得（0ベースなので3番目）
  const fourthLink = document.querySelectorAll(".c-menuListItem a")[3];

  if (fourthLink) {
    // クリックイベントを防ぐ
    fourthLink.addEventListener("click", (event) => {
      event.preventDefault(); // リンクの遷移を防止
      event.stopImmediatePropagation(); // 他のイベントの伝播を防止
    });
  }
});
