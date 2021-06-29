import { sendPost } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener("click", (event) => {
    if (event.target.id === "newPost__submit") {
        const titleName = document.querySelector("input[name='postTitle']").value
        const urlLink = document.querySelector("input[name='postURL']").value
        const postText = document.querySelector("textarea[name='postDescription']").value
        const userId = parseInt(localStorage.getItem("gg_user"))

        const dataToSendAPI = {
           title: titleName,
           imageURL: urlLink,
           description: postText,
           userId: userId,
           timestamp: Date.now()

        }

        sendPost(dataToSendAPI)
    }
})

applicationElement.addEventListener("click", (event) => {
    if (event.target.id === "newPost__cancel") {
        applicationElement.dispatchEvent(new CustomEvent("stateChanged", {bubbles: true}))
    }
})



export const PostEntry = () => {
    let html = `

    <div class="newPost">
        <input type="text" name="postTitle" class="newPost__input" placeholder="Title" />
    </div>
    
    <div class="postURL">
        <input type="text" name="postURL" class="newPost__input" placeholder="URL of GIF...aka JIF"/>
    </div>

        <textarea name="postDescription" class="newPost__input newPost__description" placeholder"Comments..."></textarea>
  
    <button id="newPost__submit">Submit</button>
    <button id="newPost__cancel">Cancel</button>
    
    `

    return html 
}