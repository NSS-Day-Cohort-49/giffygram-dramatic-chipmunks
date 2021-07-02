import { navBar } from "./nav/NavBar.js";
import { PostList } from "./feed/PostList.js";
import { Footer } from "./nav/Footer.js";
import { PostEntry } from "./feed/PostEntry.js";
import { MessageList } from "./feed/MessageList.js";

export const GiffyGram = () => {
  // Show main main UI
  return `

    <div class="nav__bar">
        ${navBar()}
    </div>
    <div class="giffygram__feed">
        <div class="post__entry__form">
            <button class="miniMode" id="miniMode">Click here to post a gif!</button>
        </div>
        <section class="post">
            ${PostList()}
        </section>
        <div class="footer">
            ${Footer()}
        </div>
    </div>
    `;
};

document.addEventListener("click", (event) => {
  if (event.target.id === "miniMode") {
    const entryFormContainer = document.querySelector(".post__entry__form");
    entryFormContainer.innerHTML = PostEntry();
  }
});

document.addEventListener("click", (event) => {
  if (event.target.id === "notification__count") {
    const feedContainer = document.querySelector(".giffygram__feed");
    feedContainer.innerHTML = MessageList();
  }
});
