import {} from "./nav/NavBar.js";
import { PostList } from "./feed/PostList.js";
import {} from "./nav/Footer.js";

export const GiffyGram = () => {
  // Show main main UI
  return `
    <div class="giffygram__feed">
        <div class="navigation">
           navbar
        </div>
        <div class="post__entry__form">
            <div><button class="miniMode" id="miniMode">POST GIF HERE</button>
            </div>
        </div>
        <section class="post">
            ${PostList()}
        </section>
        <div class="footer">
            footer
        </div>
    </div>
    `;
};
