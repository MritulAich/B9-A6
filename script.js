const allPosts = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await response.json();
    console.log(data);
    const postsContainer = document.getElementById('all-posts');
    data.posts.forEach(post => {
        const div2 = document.createElement("div");
        div2.innerHTML = `<div class="flex flex-row p-10 mb-6 bg-[#F3F3F5] rounded-3xl gap-6 w-[800px]">
        <div class="indicator">
            <span class="indicator-item badge bg-[green]">${post.isActive? '' : 'false'}</span>
            <div class="grid w-28 h-28 place-items-center"><img src="${post.image}" class="rounded-2xl">
            </div>
        </div>
        <div class="space-y-4">
            <div class="flex flex-row gap-5">
                <p>#${post.category}</p>
                <p>Author: ${post.author.name}</p>
            </div>
            <p class="font-bold text-xl">${post.title}</p>
            <p>${post.description}</p>
            <hr class="border border-dashed">
            <div class="flex flex-row justify-between">
                <div class="flex flex-row gap-6">
                    <div class="flex flex-row gap-3 "><img src="./icons/tabler-icon-message-2.svg">${post.comment_count}</div>
                    <div class="flex flex-row gap-3"><img src="./icons/tabler-icon-eye.svg">${post.view_count}</div>
                    <div class="flex flex-row gap-3"><img src="./icons/tabler-icon-clock-hour-9.svg">${post.posted_time}</div>
                </div>
                <button onclick="markBtn()"><img src="./icons/email 1.svg"></button>
            </div>
        </div>
    </div>`;
        postsContainer.appendChild(div2);
    })
}
allPosts();

const currentRead = document.getElementById('mark-read');
const postSummaryContainer = document.getElementById('post-summary');
postSummaryContainer.addEventListener('click', markBtn)
currentRead.addEventListener('click', markBtn);

function markBtn() {
    const currentRead = document.getElementById('mark-read');
    const newRead = parseInt(currentRead.innerText);
    const newReadAdded = newRead + 1;
    currentRead.innerText = newReadAdded;

    const div3 = document.createElement("div");
    div3.innerHTML = `<div class="p-4 gap-8 mb-6 flex flex-row bg-white rounded-2xl justify-between">
    <p class="font-semibold">10 Kids Unaware of Their Costume</p>
    <div class="flex flex-row gap-2"><img src="/icons/tabler-icon-eye.svg"><p>5</p></div>
    </div>`;
    postSummaryContainer.appendChild(div3);
}

const latestPosts = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await response.json();

    const latestContainer = document.getElementById("latest-post");
    data.forEach(post => {
       const div4 = document.createElement('div');
       div4.innerHTML = `<div
       class="card w-96 p-6 space-y-3 bg-base-100 border-[1px] border-solid border-[#12132D] border-opacity-15">
       <img src="${post.cover_image} class="px-10" />
       <div class="flex flex-row gap-2"><img src="./icons/calender.svg">${post.author.posted_date ? post.author.posted_date : 'No publish date'}</div>
       <h2 class="text-lg font-extrabold">${post.title}</h2>
       <p class="text-[#12132D] opacity-60">${post.description} </p>
       <div class="gap-4 flex flex-row">
           <img class='w-[44px] h-[44px] rounded-[44px]' src="${post.profile_image}">
           <div>
               <p class="font-bold">${post.author.name} </p>
               <p>${post.author.designation ? post.author.designation : 'unknown'}</p>
           </div>
        </div>
        </div>`;
       latestContainer.appendChild(div4);
    })

}
latestPosts()