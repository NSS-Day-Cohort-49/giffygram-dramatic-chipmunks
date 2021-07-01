import { navBar } from "./nav/NavBar.js";
import { PostList } from "./feed/PostList.js";
import { Footer } from "./nav/Footer.js";
import { PostEntry } from "./feed/PostEntry.js";

export const GiffyGram = () => {
  // Show main main UI
  return `
    <div class="giffygram__feed">
           ${navBar()}
        </div>
        <div class="post__entry__form">
            <div><button class="miniMode" id="miniMode">POST GIF HERE</button>
            ${PostEntry()}
            </div>
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
