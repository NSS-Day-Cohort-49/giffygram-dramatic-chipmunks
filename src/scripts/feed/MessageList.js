import { applicationState, getMessages, getUsers } from "../data/provider";
import { GiffyGram } from "../GiffyGram";

let miniMode = !![];

const applicationElement = document.querySelector(GiffyGram);
const messages = getMessages;

document.addEventListener("change", (event) => {
  if (event.target.id === "notification__count") && (miniMode = !![],
    document.dispatchEvent(new CustomEvent("stateChanged", { bubbles: true })))
});
