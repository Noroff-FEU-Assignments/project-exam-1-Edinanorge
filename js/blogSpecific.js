const url = `https://edinaisztojka.store/blog/wp-json/wp/v2/posts?per_page=15`;

const querySring = document.location.search;
const prams = new URLSearchParams(querySring);
const productId = prams.get("id");

console.log(productId);

async function getPost(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    const post = posts.find(({ id }) => id == productId);
    console.log(post);
    const postContainer = document.querySelector(".section-blogpost ");
    postContainer.insertAdjacentHTML("beforeend", displayPost(post));
  } catch (error) {
    console.error(error);
  }
}
getPost(url);

function displayPost(post) {
  let html = `<img src="${post.better_featured_image.source_url}" alt="${post.better_featured_image.alt_text}" />
               <div class="post-text">
                  <h1 class="heading-primary">${post.title.rendered}</h1>
                  <p>${post.content.rendered}</p>
                  <span class="date"><i class="fa-regular fa-calendar-days"></i> ${post.date.slice(0, -9)}</span>
                  <span><i class="fa-regular fa-comment"></i>${post.id} commment</span>
                  <span><i class="fa-solid fa-share"></i>Share</span>
                  <div>
                `;

  return html;
}
