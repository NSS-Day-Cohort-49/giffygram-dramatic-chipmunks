import { applicationState } from "../data/provider.js";

document.addEventListener("change", (event) => {
  if (event.target.id === "showOnlyFavorites") {
    const checkbox = document.querySelector("#showOnlyFavorites");
    if (checkbox.checked) {
      applicationState.feed.displayFavorites = true;
    } else {
      applicationState.feed.displayFavorites = false;
    }
    document.dispatchEvent(new CustomEvent("stateChanged", { bubbles: true }));
  }
});

export const Footer = () => {
  let checkBox = "";
  if (applicationState.feed.displayFavorites) {
    checkBox = "checked";
  }
  let html = `
  <div class="footer">Posts since
  <select name="post_since_dropdown" id="post_since_dropdown"
  </div>
  <div class="footer">Posts by user
  </div>
  <div class="footer">Show only favorites
  <input type="checkbox" class="footer__item" id="showOnlyFavorites" ${checkBox}>
  </div>`;

  return html;
};
