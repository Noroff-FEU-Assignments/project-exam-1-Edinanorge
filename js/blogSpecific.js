import { validateCtaForm, validateCommentForm, ctaForm, commentForm } from "./components/formValidation.js";
import { url } from "./config/apiUrl.js";

const querySring = document.location.search;
const prams = new URLSearchParams(querySring);
const productId = prams.get("id");

ctaForm.addEventListener("submit", validateCtaForm);
commentForm.addEventListener("submit", validateCommentForm);

async function getPost(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    const post = posts.find(({ id }) => id == productId);
    const postContainer = document.querySelector(".section-blogpost ");
    postContainer.insertAdjacentHTML("beforeend", displayPost(post));
    document.title += ` | ${post.title.rendered}`;
  } catch (error) {
    console.error(error);
  }
}
getPost(url);

function displayPost(post) {
  let html = `<img src="${post.better_featured_image.source_url}" alt="${post.better_featured_image.alt_text}" />
               <div class="post-text blog-post-text">
                  <h1 class="heading-secondary">${post.title.rendered}</h1>
                  <p>${post.content.rendered}</p>
                  <div>
                    <span class="date"><i class="fa-regular fa-calendar-days"></i> ${post.date.slice(0, -9)}</span>
                    <span><i class="fa-regular fa-comment"></i>${post.id} commment</span>
                    <span><i class="fa-solid fa-share"></i>Share</span>
                  </div>  
                </div>
                `;

  return html;
}
