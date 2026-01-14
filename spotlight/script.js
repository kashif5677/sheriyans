<<<<<<< HEAD
addEventListener('mousemove', function (e) {
    console.log(e.clientX, e.clientY);

    document.body.style.setProperty('--x', e.clientX + 'px')
    document.body.style.setProperty('--y', e.clientY + 'px')

})
=======
const reels = [
    {
        username: "rahul_dev",
        likeCount: 1240,
        isLiked: true,
        commentCount: 98,
        caption: "Morning code, evening gym 💻🏋️",
        video: "./reels/video1.mp4",
        userProfile: "https://plus.unsplash.com/premium_photo-1676490275177-4c30e01f30b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
        shareCount: 45,
        isFollowed: true
    },
    {
        username: "tech_anam",
        likeCount: 876,
        isLiked: false,
        commentCount: 54,
        caption: "React hooks simplified 🚀",
        video: "./reels/video2.mp4",
        userProfile: "https://example.com/profiles/anam.jpg",
        shareCount: 30,
        isFollowed: false
    },
    {
        username: "daily_fitness",
        likeCount: 3421,
        isLiked: true,
        commentCount: 210,
        caption: "No excuses. Just results.",
        video: "./reels/video3.mp4",
        userProfile: "https://example.com/profiles/fitness.jpg",
        shareCount: 120,
        isFollowed: true
    },
    {
        username: "code_master",
        likeCount: 1590,
        isLiked: false,
        commentCount: 132,
        caption: "JavaScript array methods you must know 🔥",
        video: "https://example.com/videos/reel4.mp4",
        userProfile: "https://example.com/profiles/code.jpg",
        shareCount: 64,
        isFollowed: false
    },
    {
        username: "travel_vibes",
        likeCount: 4876,
        isLiked: true,
        commentCount: 340,
        caption: "Mountains are calling 🏔️",
        video: "https://example.com/videos/reel5.mp4",
        userProfile: "https://example.com/profiles/travel.jpg",
        shareCount: 220,
        isFollowed: true
    },
    {
        username: "ui_designer",
        likeCount: 1120,
        isLiked: false,
        commentCount: 76,
        caption: "Clean UI = Better UX 🎨",
        video: "https://example.com/videos/reel6.mp4",
        userProfile: "https://example.com/profiles/ui.jpg",
        shareCount: 41,
        isFollowed: false
    },
    {
        username: "food_lovers",
        likeCount: 6543,
        isLiked: true,
        commentCount: 510,
        caption: "Street food therapy 🌮",
        video: "https://example.com/videos/reel7.mp4",
        userProfile: "https://example.com/profiles/food.jpg",
        shareCount: 390,
        isFollowed: true
    },
    {
        username: "crypto_daily",
        likeCount: 980,
        isLiked: false,
        commentCount: 88,
        caption: "Market volatility explained 📉📈",
        video: "https://example.com/videos/reel8.mp4",
        userProfile: "https://example.com/profiles/crypto.jpg",
        shareCount: 55,
        isFollowed: false
    },
    {
        username: "life_quotes",
        likeCount: 7230,
        isLiked: true,
        commentCount: 610,
        caption: "Stay consistent. Stay winning.",
        video: "https://example.com/videos/reel9.mp4",
        userProfile: "https://example.com/profiles/quotes.jpg",
        shareCount: 480,
        isFollowed: true
    },
    {
        username: "mern_stack",
        likeCount: 1345,
        isLiked: false,
        commentCount: 99,
        caption: "Building full-stack apps step by step 💡",
        video: "https://example.com/videos/reel10.mp4",
        userProfile: "https://example.com/profiles/mern.jpg",
        shareCount: 70,
        isFollowed: false
    }
];

let allReels = document.querySelector('.all-reels')


function addData() {
    let sum = ''
    reels.forEach(function (e, id) {
        sum = sum + `       <div class="reel">
        <video autoplay muted  src=${e.video}></video>
                    <div class="bottom">
                        <div class="user">
                            <img src=${e.userProfile} alt="">
                            <div>${e.username}</div>
                            <button id=${id} class='follow'>${e.isFollowed ? 'Unfollow' : 'follow'}</button>
                        </div>
                        <h3>${e.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${id} class="like">
                            <h4  >
                              ${e.isLiked ? '  <i class=" love ri-heart-3-fill">' : '  <i class="ri-heart-3-line">'}</i>
                            </h4>
                            <h6>${e.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4>
                         <i class="ri-chat-3-line"></i>
                            </h4>
                            <h6>${e.commentCount}</h6>

                        </div>
                        <div class="share">
                            <h4>
                                <i class="ri-share-forward-line"></i>
                            </h4>

                        </div>
                        <div class="more">
                            <h4>
                               <i class="ri-more-2-fill"></i>
                            </h4>

                        </div>
                    </div>

                </div>
        `


    })

    allReels.innerHTML = sum
}

addData()




allReels.addEventListener('click', function (e) {


    // if (!reels[e.target.id].isLiked) {
    //     reels[e.target.id].likeCount++
    //     reels[e.target.id].isLiked = true
    // } else {
    //     reels[e.target.id].likeCount--
    //     reels[e.target.id].isLiked = false
    // }

    if (e.target.className == 'like') {
        if (!reels[e.target.id].isLiked) {
            reels[e.target.id].likeCount++
            reels[e.target.id].isLiked = true
        } else {
            reels[e.target.id].likeCount--
            reels[e.target.id].isLiked = false
        }

    }



    if (e.target.className == "follow") {
        if (!reels[e.target.id].isFollowed) {
            reels[e.target.id].isFollowed = true
        } else {
            reels[e.target.id].isFollowed = false
        }
    }

    addData()

    console.log(e.target.className)

})
>>>>>>> 6ac682c7a94b1a0123de48421ceb8733465a4f43
