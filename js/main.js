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


// フェードイン
//scroll_effect
$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('faid_in');
    var scrollAnimationFunc = function () {
        for (var i = 0; i < scrollAnimationElm.length; i++) {
            var triggerMargin = 100;
            if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
                scrollAnimationElm[i].classList.add('on');
            }
        }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
});