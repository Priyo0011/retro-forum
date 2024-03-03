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
                <p class="font-bold">Author : ${post.author.name}</p>
            </div>
            <h2 class="text-2xl font-bold mb-4">${post.title}</h2>
            <p>${post.description}  It’s one thing to subject yourself to ha Halloween costume mishap because, hey that’s your prerogative .</p>
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

const handleSearch = () =>{
   const searchField = document.getElementById('search-field').value;

   if (searchField){
    allPost(searchField)
   }else{
    alert("please valid text")
   }
}







const latestPost = async()=> {
    const res = await fetch ("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
    const data = await res.json();
    const posts = data;
   
    displayPosts2(posts);
}
const postContainer2 = document.getElementById('post-container2');

const displayPosts2 = posts =>{
    posts.forEach(post =>{
        console.log(post);
        const postCard2 = document.createElement('div');
        postCard2.classList = `items-center gap-10 border-2 p-6 rounded-lg `
        postCard2.innerHTML= `
        <img class="rounded-lg" src="${post.cover_image}" alt="">
        <div class="flex gap-4 mt-4">
            <img src="images/Frame (5).png" alt="">
            <p>${post.author.posted_date}</p>
        </div>
        <h1 class="text-xl font-bold mt-4">${post.title}
        </h1>
        <p class="mt-4">${post.description}</p>
        <div class="flex mt-4 gap-6">
            <div class="mt-2">
                <img class="h-10 w-10 rounded-full" src="${post.profile_image}" alt="">
            </div>
            <div>
                <p class="font-bold">${post.author.name}</p>
                <p>${post.author.designation}</p>
            </div>
        </div>
        `;
        postContainer2.appendChild(postCard2);
    })
}




latestPost();

allPost();