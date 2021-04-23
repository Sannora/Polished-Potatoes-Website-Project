var topButton = document.getElementById("topButton");
window.onscroll = function () { scrollTopFunction() }; i
function scrollTopFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}