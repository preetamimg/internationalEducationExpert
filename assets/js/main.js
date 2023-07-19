// // on scorll navbar
window.onscroll = function () {
    scrollFunction();
};
var first = true;
function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("navbar").classList.add('fixed-navbar');
    }
    else {
        document.getElementById("navbar").classList.remove('fixed-navbar');
    }
}