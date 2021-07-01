import { applicationState, getUsers } from "../data/provider.js";

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

// document.addEventListener("change", (event) => {
//   const userDropdown = document.querySelector("#chosenUser")
//   if (event.target.id === "author_display_dropdown") {

// });

export const Footer = () => {
  const users = getUsers();
  let dropdownHTML = users
    .map((user) => {
      return `<option value="${user.id}"> ${user.name}</option>`;
    })
    .join("");

  let checkBox = "";
  if (applicationState.feed.displayFavorites) {
    checkBox = "checked";
  }
  let html = `
  <div class="footer__item">Posts since
    <select name="post_since_dropdown" id="chosenUser">
    </select>
  </div>
  <div class="footer__item">Posts by user
    <select name="author_display_dropdown" id="author_display_dropdown"> 
    ${dropdownHTML} <option value="All"> All Users</option>
    </select>
  </div>
  <div class="footer__item">Show only favorites
    <input type="checkbox" id="showOnlyFavorites" ${checkBox}>
  </div>`;

  return html;
};
