import { getPosts, getUsers, getLikes, getFollows } from "../data/provider.js"

export const PostList = () => {
    const posts = getPosts()
    const users = getUsers()

    let html = posts.map(post => {
        const postAuthor = users.find(user => user.id === post.userId)

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
                </section>    
        `
    }).join("")

    return html
}

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