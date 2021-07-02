import { getMessages } from "../data/provider.js"


const applicationElement = document.querySelector(".giffygram")

document.addEventListener("click", (event) => {
    if (event.target.id === "logo") {
        applicationElement.dispatchEvent(new CustomEvent("stateChanged", {bubbles: true}))
    }
})


export const navBar = () => {
    const messages = getMessages()
    const currentUserId = parseInt(localStorage.getItem("gg_user"))
    let filterMessages = messages.filter((message => {
        return currentUserId === message.recipientId && message.read === true
    }))
   

    let html = `
        <nav class="navigation">
            <div class="navigation__item navigation__icon">
                <img src="./images/pb.png" id="logo" alt="Jar of Peanut Butter">
            </div>
            <div class="navigation__item navigation__name">
                Giffygram
            </div>
            <div class="navigation__item navigation__message">
                <img src="./images/fountain-pen.svg" alt="Pen">
                    <div class="notification__count" id="notification__count">
                    ${filterMessages.length}
                    </div>
            </div>
            <div class="navigation__item navigation__logout">
                <button id="logout" class="fakeLink">Logout</button>
            </div>

        </nav>
    
    
    `;

  return html;
};
