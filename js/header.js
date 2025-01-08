let LastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const LastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop = LastScrollTop) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    LastScrollTop = scrollTop;
})