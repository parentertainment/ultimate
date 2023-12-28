document.addEventListener('scroll', () => {
    const nav = document.querySelector('.image');

    if (window.scrollY > 800){
        nav.classList.add('active');
    }

})

document.addEventListener('scroll', () => {
    const nav = document.querySelector('.image1');

    if (window.scrollY > 800){
        nav.classList.add('active');
    }

})

document.addEventListener('scroll', () => {
    const nav = document.querySelector('.image2');

    if (window.scrollY > 800){
        nav.classList.add('active');
    }

})