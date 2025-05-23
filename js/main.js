// ナビゲーション展開
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function() {
    ham.classList.toggle('active');
    nav.classList.toggle('active');
});

// トップリバースボタン
const btn = document.getElementById("top-btn");

btn.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});
