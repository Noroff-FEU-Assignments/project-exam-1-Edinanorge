import { url } from "../config/apiUrl.js";

const searchButton = document.querySelector(".btn-search");
const searchPostsContainer = document.querySelector(".search-results-container");

async function getPosts(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    if (!response.ok) throw new Error(`${posts.status} `);
    console.log(posts);
    if (posts.length > 0) {
      searchPostsContainer.innerHTML = displaySearchedPosts(posts);
    } else {
      searchPostsContainer.innerHTML = `<div class="search-input-error">Please enter words like: tips, screen, birthday, family, newborn</div>`;
    }
  } catch (error) {
    console.log(`An error has occurred: ${error}`, "error");
  }
}

searchButton.onclick = () => {
  const searchInput = document.querySelector("#search").value;
  const newUrl = url + `&search=${searchInput}`;
  if (!searchInput) {
    searchPostsContainer.innerHTML = `<div class="search-input-error">Please enter words like: tips, screen, birthday, family, newborn</div>`;
  } else {
    getPosts(newUrl);
  }
};

function displaySearchedPosts(posts) {
  let html = "";
  posts.forEach((post) => {
    html += `<a href="blogSpecific.html?id=${post.id}" class="blog-post-search blog-post">
              <img src="${post.better_featured_image.source_url}" 
                    alt="${post.better_featured_image.alt_text}"  loading="lazy"/>
              <div class="blog-post-text">
                <h2 class="heading-secondary">${post.title.rendered}</h2>
              </div>
            </a>`;
  });

  return html;
}
