import { renderSpinner } from "./components/spinner.js";
import { url, urlBasic, restPostsUrl } from "./config/apiUrl.js";

const postsContainer = document.querySelector(".blog-container");
const restPostsContainer = document.querySelector(".rest-posts");
const btnCategories = document.querySelectorAll(".btn-category");
const btnOlderPosts = document.querySelector(".section-blog .btn-cta");

async function getPosts(url, container) {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    if (!response.ok) throw new Error(`${posts.status} `);
    container.innerHTML = renderSpinner();
    container.innerHTML = displayPosts(posts);
  } catch (error) {
    console.log(error);
  }
}
getPosts(urlBasic, postsContainer);

btnOlderPosts.addEventListener("click", () => {
  restPostsContainer.innerHTML = renderSpinner();
  getPosts(restPostsUrl, restPostsContainer);
  btnOlderPosts.classList.add("btn-disable");
});

btnCategories.forEach(function (category) {
  category.onclick = function (e) {
    changeBtnAvtiveStyle(category);
    restPostsContainer.innerHTML = "";
    const categoryChosen = e.target.value;

    if (categoryChosen === 7) {
      getPosts(urlBasic, postsContainer);
    } else {
      const categoryUrl = url + `&categories=${categoryChosen}`;
      getPosts(categoryUrl, postsContainer);
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
