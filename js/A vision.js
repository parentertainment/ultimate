document.addEventListener('scroll', () => {
    const nav = document.querySelector('.A-vision img');

    if (window.scrollY > 120){
        nav.classList.add('active');
    }
})
