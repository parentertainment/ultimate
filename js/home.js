let title = document.querySelector('.abc');
let name = "Welcome to the official website of PAR Entertainment"
let index = 1;

const typeWriter = () => {
    let new_title = name.slice(0,index);
    title.innerText = new_title;

    index++;

    setTimeout(() => {typeWriter()}, 52)

}

typeWriter();


document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');

    if (window.scrollY > 5){
        nav.classList.add('active');
    }

    if(window.scrollY < 15){
        nav.classList.remove('active');
    }
})

document.addEventListener('scroll', () => {
    const nav = document.querySelector('.container img');

    if (window.scrollY > 8){
        nav.classList.add('active');
    }

    else{
        nav.classList.remove('active')
    }

})

document.addEventListener('scroll', () => {
    const nav = document.querySelector('.container p');

    if (window.scrollY > 8){
        nav.classList.add('active');
    }

    else{
        nav.classList.remove('active');
    }

})






