import { renderSpinner } from "./components/spinner.js";
import { url, urlBasic, restPostsUrl } from "./config/apiUrl.js";

const postsContainer = document.querySelector(".grid-auto");
const btnCategories = document.querySelectorAll(".btn-category");
const btnOlderPosts = document.querySelector(".section-blog .btn-cta");

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
getPosts(urlBasic);

btnOlderPosts.addEventListener("click", () => {
  getPosts(restPostsUrl);

  btnOlderPosts.classList.add("btn-disable");
});

btnCategories.forEach(function (category) {
  category.onclick = function (e) {
    e.preventDefault();
    changeBtnAvtiveStyle(category);
    const categoryChosen = e.target.value;

    if (categoryChosen === 7) {
      getPosts(urlBasic);
    } else {
      const categoryUrl = url + `&categories=${categoryChosen}`;
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
              <div class="blog-post-text">
                <h2 class="heading-secondary">${post.title.rendered}</h2>
                <p>${post.excerpt.rendered}</p>
                <div>
                  <span class="date"><i class="fa-solid fa-calendar-days"></i> ${post.date.slice(0, -9)}</span>
                  <span><i class="fa-solid fa-comment"></i>${post.id} commment</span>
                  <span><i class="fa-solid fa-share"></i>Share</span>
                </div>
              </div>
            </a>`;
  });
  return html;
}
