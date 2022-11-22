import { validateCtaForm, ctaForm } from "./components/formValidation.js";
import { stickyUrl, latestUrl } from "./config/apiUrl.js";

ctaForm.addEventListener("submit", validateCtaForm);

async function getPosts(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    if (!response.ok) throw new Error(`${posts.status} `);

    // display sticky posts
    const postContainer = document.querySelector(".section-posts");
    postContainer.insertAdjacentHTML("afterbegin", displayStickyPosts(posts));
  } catch (error) {
    console.log(error);
  }
}
getPosts(stickyUrl);

async function getLatestPosts(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    if (!response.ok) throw new Error(`${posts.status} `);

    // dispale latest posts
    const latestPostsConatiner = document.querySelector(".carousel");
    latestPostsConatiner.insertAdjacentHTML("afterbegin", displayLatestPosts(posts));
    carousel();
  } catch (error) {
    console.log(error);
  }
}
getLatestPosts(latestUrl);

function displayStickyPosts(posts) {
  let html = "";
  posts.forEach((post) => {
    html += `<a href="blogSpecific.html?id=${post.id}" class="blog-post">
              <img src="${post.better_featured_image.source_url}" 
                    alt="${post.better_featured_image.alt_text}"  loading="lazy"/>
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

function displayLatestPosts(posts) {
  let html = "";
  posts.forEach((post) => {
    html += `<a href="blogSpecific.html?id=${post.id}" class="grid carousel-item">
              <img src="${post.better_featured_image.source_url}" 
                    alt="${post.better_featured_image.alt_text}"  loading="lazy"/>
              <blockquote class="carousel-text">
                <h3 class="heading-tertiary">${post.title.rendered}</h3>
                <p>${post.excerpt.rendered}</p>
                <span class="date"><i class="fa-solid fa-calendar-days"></i> ${post.date.slice(0, -9)}</span>
                <span><i class="fa-solid fa-comment"></i>${post.id} commment</span>
                <span><i class="fa-solid fa-share"></i>Share</span>
                </blockquote>
            </a>`;
  });
  return html;
}
