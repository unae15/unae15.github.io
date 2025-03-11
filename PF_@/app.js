let mouseCursor = document.querySelector(".cursor");
let header = document.querySelectorAll('.header li a');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    console.log(e);
    mouseCursor.style.top = e.screenY + 'px';
    mouseCursor.style.left = e.screenX + 'px';
}

header.forEach(link => {
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");
    });
    link.addEventListener("mouseenter", () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-link");
    });
});




$(document).ready(function () {
    $("a[href^='#']").on("click", function (e) {
        e.preventDefault();

        var target = $(this.getAttribute("href"));

        if (target.length) {
            $("html, body").animate(
                {
                    scrollTop: target.offset().top,
                },
                1400, // 애니메이션 속도 (밀리초)
                "easeOutExpo" // 감속 효과 적용
            );
        }
    });
});