//Page top Event
var pageTopE = document.querySelector('#footerWrap .pageTop');
window.onscroll = () => { scrollHandler() }

function scrollHandler() {
    if (document.body.ScrollTop > 20 || document.documentElement.scrollTop > 20) {
        pageTopE.style.display = 'block';
    } else pageTopE.style.display = 'none';
}

function toTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
pageTopE.addEventListener('click', toTop);