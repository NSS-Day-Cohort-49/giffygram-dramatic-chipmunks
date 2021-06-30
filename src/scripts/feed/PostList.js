import { getPosts, getUsers, getLikes, getFollows, sendLike, deleteLike } from "../data/provider.js"

export const PostList = () => {
    let posts = getPosts()
    let users = getUsers()
    let likes = getLikes()
    let reversedPosts = posts.sort((a, b) => b.id - a.id)

    let html = reversedPosts.map(post => {
        const postAuthor = users.find(user => user.id === post.userId)
        const currentUserId = localStorage.getItem("gg_user")
        let starImg = "./images/favorite-star-blank.svg"
        let favCheck = likes.find(like => {
            return ((post.id === like.postId) && (parseInt(currentUserId) === like.userId))
        })
        if (favCheck) {
            starImg = "./images/favorite-star-yellow.svg"
        }

        return `<section class="post">
                    <header>
                        <h2 class="post__title">${post.title}</h2>
                    </header>
                    <img class="post__image" src="${post.imageURL}">
                    <div class="post__description">
                        ${post.description}
                    </div>
                    <div class="post__tagline">
                        Posted by ${postAuthor.name} on ${new Date(post.timestamp).toLocaleDateString()}
                    </div>
                    <div class="post__actions">
                        <div>
                            <img id="favoritePost--${post.id}" class="actionIcon" src="${starImg}">
                        </div>
                        <div>
                        
                        </div>
                    </div>
                </section>    
        `
    }).join("")

    return html
}

document.addEventListener("click", event => {
    if (event.target.id.startsWith("favoritePost")) {
        const userId = localStorage.getItem("gg_user")
        const likes = getLikes()
        const [,postId] = event.target.id.split("--")

        const like = likes.find(like => like.postId === parseInt(postId))

        if (!like) {
            const dataToSendAPI = {
                userId: parseInt(userId),
                postId: parseInt(postId)
            }

            sendLike(dataToSendAPI)
        } else {
            deleteLike(parseInt(like.id))
        }
    }
})

/* Pseudocode for future implementation of filters:

PostList = () => {
	const posts = getPosts()
	const users = getUsers()
	const favorites = getFavorites()
	const filteredPosts = []
	if (favorites) {
		filteredPosts = posts.filter(some favorites logic)
	} else {
		filteredPosts = posts
	}
	if (someUserFilter) {
		filteredPosts = filteredPosts.filter(some user filter logic)
	}
	renderPosts(fileredPosts)
}
renderPosts = (someArg) => {
	someArg.map(post => {
		const html = ""
		html += `some html`
		if (post.userId === gg-user) {
			html += `delete button html`
}
		return html
})
} */