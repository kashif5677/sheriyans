let screen = document.querySelector('#screen')
let cursor = document.querySelector('#cursor')


screen.addEventListener('mousemove', function (dets) {


    cursor.style.left = dets.x + 'px'
    cursor.style.top = dets.y + 'px'



})
const sound = document.getElementById("ctrlSound");

document.addEventListener("keydown", (event) => {
    if (event.key) {
        sound.currentTime = 0; // restart sound if pressed again
        sound.play();
    }
});
