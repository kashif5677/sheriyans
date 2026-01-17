const para = document.body.querySelector('p')
const charcter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijhklmnopqrstuvwxyz"
const text = para.innerText

// para.addEventListener("mouseenter", (e) => {



let interation = 0

function randomText() {

    const str = text.split('').map((char, index) => {

        if (index < interation) {
            return char
        }

        return charcter.split('')[Math.floor(Math.random() * 52)]
    }).join("")


    // console.log(str);

    para.innerText = str
    interation += 0.7

}



setInterval(randomText, 30)
// })
