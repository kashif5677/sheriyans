const para = document.body.querySelector('p')
const charcter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijhklmnopqrstuvwxyz"
const text = para.innerText

para.addEventListener("mouseenter", (e) => {

    setInterval(() => {

        const str = text.split('').map((char, index) => {
            return charcter.split("")[Math.floor(Math.random() * 53)]
        }).join("")
        para.innerText = str
    }, 30)





})
