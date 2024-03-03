const allPost = async()=> {
    const res = await fetch ("https://openapi.programming-hero.com/api/retro-forum/posts");
    const data = await res.json();
    const posts = data.posts;
    displayPosts(posts);
}

const postContainer = document.getElementById('post-container');

const displayPosts = posts =>{
    posts.forEach(post =>{
        console.log(post);
        const postCard = document.createElement('div');
        postCard.classList = `flex items-center gap-10 border-2 p-6 rounded-lg w-[960px] mb-10`
        postCard.innerHTML= `
        <div class="indicator">
            <span class="indicator-item badge bg-green-700"></span>
            <div class="grid w-20 h-20 bg-base-300 place-items-center"><img src="${post.image}" alt="">
            </div>
        </div>
        <div>
            <div class="flex gap-16 mb-4">
                <p class="font-bold">#${post.category} </p>
                <p class="font-bold">Author : ${post.name}</p>
            </div>
            <h2 class="text-2xl font-bold mb-4">${post.description}</h2>
            <p>It’s one thing to subject yourself to ha Halloween costume mishap because, hey that’s
                your prerogative. </p>
            <hr class="m-4">
            <div class="flex justify-between">
                <div class="mt-4 flex justify-start gap-4 lg:gap-8">
                    <div class="flex gap-2">
                        <img src="images/Group 13.png" alt="">${post.comment_count}
                    </div>
                    <div class="flex gap-2">
                        <img src="images/Group 16.png" alt="">${post.view_count}
                    </div>
                    <div class="flex gap-2">
                        <img src="images/Group 18.png" alt="">${post.posted_time}
                    </div>
                </div>
                <button><img src="images/Group 40106.png" alt=""></button>
            </div>
        </div>
        `;
        postContainer.appendChild(postCard);
    })
}

allPost();