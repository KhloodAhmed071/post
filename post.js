let Search = document.querySelector(".Search");
let Tags = document.querySelector(".aside");
let PostCardContainer = document.querySelector(".posts-container");

async function getPosts(url = "https://dummyjson.com/posts") {
    let response = await fetch(url);
    let data = await response.json();
    let Posts = data.posts;
    console.log(Posts);
    PostCardContainer.innerHTML = "";

    Posts.map((element) => {
        PostCardContainer.innerHTML += `
        <div class="post-card">
            <div class="post-body">
                <p>${element.body}</p>
            </div>
            <div class="post-tags">
                <span class="tag1">#${element.tags[0]}</span>
                <span class="tag2">#${element.tags[1]}</span>
                <span class="tag3">#${element.tags[2]}</span>
            </div>
            <div class="About">
                <div class="views">
                    <i class="fa-solid fa-eye"></i>
                    <span class="numbers">125</span>
                </div>
                <div class="Likes">
                    <i class="fa-solid fa-heart"></i>
                    <span class="numbers">22</span>
                </div>
                <div class="Views">
                    <i class="fa-solid fa-eye"></i>
                    <span class="numbers">22</span>
                </div>
            </div>
        </div>`;
    });
}

getPosts();


async function getTags() {
    let responseT= await fetch("https://dummyjson.com/posts/tags");
    let DataT = await responseT.json();
    console.log(DataT);
    DataT.map((element)=> {
        Tags.innerHTML+=`
            <span class="tag" onclick="getPosts('${(element.url)}')">${element.slug}</span>
        `

    })
}
getTags();

Search.addEventListener("keypress",()=>{
    let searchValue = Search.value
    let newLink = `https://dummyjson.com/posts/search?q=${searchValue}`;
    getPosts(newLink);

})

