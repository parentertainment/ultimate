document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');

    if (window.scrollY > 5){
        nav.classList.add('active');
    }

    if(window.scrollY < 15){
        nav.classList.remove('active');
    }
})