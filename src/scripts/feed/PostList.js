import { getPosts, getUsers, getLikes, getFollows, sendLike, deleteLike, deletePost, applicationState } from "../data/provider.js"

export const PostList = () => {
    let posts = getPosts()
    let likes = getLikes()
    let reversedPosts = posts.sort((a, b) => b.id - a.id)

    let filteredPosts = []

    if (applicationState.feed.displayFavorites) {
        filteredPosts = reversedPosts.filter(post => {
            const likedPost = likes.find(like => post.id === like.postId)
            return likedPost
        })
    } else {
        filteredPosts = reversedPosts
    }

    if (applicationState.feed.chosenUser) {
        const chosenUserId = applicationState.feed.chosenUser
        filteredPosts = filteredPosts.filter(post => post.userId === parseInt(chosenUserId))
    }

    let html = formatPosts(filteredPosts)

    return html
}

const formatPosts = (postList) => {
    let html = postList.map(post => {
        const users = getUsers()
        const likes = getLikes()
        const postAuthor = users.find(user => user.id === post.userId)
        const currentUserId = localStorage.getItem("gg_user")
        let starImg = "./images/favorite-star-blank.svg"
        let favCheck = likes.find(like => {
            return ((post.id === like.postId) && (parseInt(currentUserId) === like.userId))
        })
        if (favCheck) {
            starImg = "./images/favorite-star-yellow.svg"
        }
        let deleteButton = ""
        if (postAuthor.id === parseInt(currentUserId)) {
            deleteButton = `<img id="deletePost--${post.id}" class="actionIcon" src="./images/block.svg"></img>`
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
                            ${deleteButton}
                        </div>
                    </div>
                </section>    
        `
    }).join("")

    return html
}


/* event listeners for action icons */

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

document.addEventListener("click", event => {
    if (event.target.id.startsWith("deletePost")) {
        const [,postId] = event.target.id.split("--")
        deletePost(parseInt(postId))
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