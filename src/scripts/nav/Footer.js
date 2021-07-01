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

document.addEventListener("change", (event) => {
  if (event.target.id === "author_display_dropdown") {
    applicationState.feed.chosenUser = event.target.value;
    if (event.target.value === "All") {
      applicationState.feed.chosenUser = null;
    }
    document.dispatchEvent(new CustomEvent("stateChanged", { bubbles: true }));
  }
});

export const Footer = () => {
  const users = getUsers();
  let dropdownHTML = users
    .map((user) => {
      let authorDropdown = "";
      if (parseInt(applicationState.feed.chosenUser) === user.id) {
        authorDropdown = "selected";
      }
      return `<option value="${user.id}" ${authorDropdown}> ${user.name}</option>`;
    })
    .join("");

  let checkBox = "";
  if (applicationState.feed.displayFavorites) {
    checkBox = "checked";
  }

  let allDropdown = "";
  if (!applicationState.feed.chosenUser) {
    allDropdown = "selected";
  }

  let html = `
  <div class="footer__item">Posts since
    <select name="post_since_dropdown" id="post_since_dropdown"><option> 2021 </option><option> 2020 </option><option> 2019 </option><option> 2018 </option>
    </select>
  </div>
  <div class="footer__item">Posts by user
    <select name="author_display_dropdown" id="author_display_dropdown"> 
    ${dropdownHTML} <option value="All" ${allDropdown}> All Users</option>
    </select>
  </div>
  <div class="footer__item">Show only favorites
    <input type="checkbox" id="showOnlyFavorites" ${checkBox}>
  </div>`;

  return html;
};
