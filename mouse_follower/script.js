const mouseFollower = document.querySelector(".mouse-follower")

addEventListener("mousemove", (e) => {

    const { clientX, clientY } = e;


    mouseFollower.style.transform = `translate(${clientX}px, ${clientY}px)`


})