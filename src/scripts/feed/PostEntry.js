const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener("click", (event) => {
    if (event.target.id === "newPost__submit") {
        
    }
})



export const PostEntry = () => {
    let html = `

    <div class="newPost">
        <input type="text" value* name="postTitle" class="newPost__input" placeholder="Title" />
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