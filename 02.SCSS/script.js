let btn = document.querySelector('button')
let h1 = document.querySelector('h1')
let inner = document.querySelector('#inner')

let grow = 0



btn.addEventListener('click', function () {

    let downloading = setInterval(() => {
        grow++
        inner.style.width = grow + '%'
        h1.innerHTML = grow + "%"
    }, 50)
    setTimeout(
        () => {
            clearInterval(downloading)

        }, 5000);

    console.log("hello");

}) 