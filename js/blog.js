const url = `https://edinaisztojka.store/blog/wp-json/wp/v2/posts`;
const newUrl = url + `?per_page=13`;

const postsContainer = document.querySelector(".grid-auto");
const btnOlderPosts = document.querySelector(".section-blog .btn-cta");
const btnCategories = document.querySelectorAll(".btn-category");

async function getPosts(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    if (!response.ok) throw new Error(`${posts.status} `);
    // display sticky posts
    postsContainer.insertAdjacentHTML("afterbegin", displayPosts(posts));
  } catch (error) {
    console.log(error);
  }
}
getPosts(url);

btnOlderPosts.addEventListener("click", (e) => {
  const restPostsUrl = url + `?page=2`;
  getPosts(restPostsUrl);
  btnOlderPosts.classList.add("btn-disable");
});

btnCategories.forEach(function (category) {
  category.onclick = function (e) {
    changeBtnAvtiveStyle(category);
    const categoryChosen = e.target.value;

    if (categoryChosen === 7) {
      getPosts(url);
    } else {
      const categoryUrl = newUrl + `&categories=${categoryChosen}`;
      postsContainer.innerHTML = "";
      getPosts(categoryUrl);
    }
  };
});

function changeBtnAvtiveStyle(activeItem) {
  btnCategories.forEach((category) => category.classList.remove("btn-category--selected"));
  activeItem.classList.add("btn-category--selected");
}

function displayPosts(posts) {
  let html = "";
  posts.forEach((post) => {
    html += `<a href="blogSpecific.html?id=${post.id}" class="blog-post">
              <img src="${post.better_featured_image.source_url}" alt="${
      post.better_featured_image.alt_text
    }"  loading="lazy"/>
              <div>
                <h2 class="heading-secondary">${post.title.rendered}</h2>
                <p>${post.excerpt.rendered}</p>
                <span class="date"><i class="fa-solid fa-calendar-days"></i> ${post.date.slice(0, -9)}</span>
                <span><i class="fa-solid fa-comment"></i>${post.id} commment</span>
                <span><i class="fa-solid fa-share"></i>Share</span>
              </div>
            </a>`;
  });
  return html;
}
