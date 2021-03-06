const apiURL = "http://localhost:8088";
const applicationElement = document.querySelector(".giffygram");

export const applicationState = {
  users: [],
  posts: [],
  likes: [],
  messages: [],
  follows: [],
  currentUser: {},
  feed: {
    chosenUser: null,
    displayFavorites: false,
    displayMessages: false,
  },
};

export const fetchExternalData = () => {
  return Promise.all([
    fetch(`${apiURL}/users`),
    fetch(`${apiURL}/posts`),
    fetch(`${apiURL}/likes`),
    fetch(`${apiURL}/messages`),
    fetch(`${apiURL}/follows`),
  ])
    .then((responses) => {
      return Promise.all(
        responses.map((response) => {
          return response.json();
        })
      );
    })
    .then((externalData) => {
      applicationState.users = externalData[0];
      applicationState.posts = externalData[1];
      applicationState.likes = externalData[2];
      applicationState.messages = externalData[3];
      applicationState.follows = externalData[4];
    });
};

export const getUsers = () => {
  return applicationState.users.map((user) => ({ ...user }));
};

export const getPosts = () => {
  return applicationState.posts.map((post) => ({ ...post }));
};

export const getLikes = () => {
  return applicationState.likes.map((like) => ({ ...like }));
};

export const getMessages = () => {
  return applicationState.messages.map((message) => ({ ...message }));
};

export const getFollows = () => {
  return applicationState.follows.map((follow) => ({ ...follow }));
};

export const sendPost = (postData) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  };

  return fetch(`${apiURL}/posts`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      applicationElement.dispatchEvent(
        new CustomEvent("stateChanged", { bubbles: true })
      );
    });
};

export const sendLike = (likeData) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(likeData),
  };

  return fetch(`${apiURL}/likes`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      applicationElement.dispatchEvent(
        new CustomEvent("stateChanged", { bubbles: true })
      );
    });
};

export const deleteLike = (id) => {
  return fetch(`${apiURL}/likes/${id}`, { method: "DELETE" }).then(() => {
    applicationElement.dispatchEvent(
      new CustomEvent("stateChanged", { bubbles: true })
    );
  });
};

export const deletePost = (id) => {
  return fetch(`${apiURL}/posts/${id}`, { method: "DELETE" }).then(() => {
    applicationElement.dispatchEvent(
      new CustomEvent("stateChanged", { bubbles: true })
    );
  });
};

export const updateRead = (id, readData) => {
  const fetchOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(readData),
  };

  return fetch(`${apiURL}/messages/${id}`, fetchOptions)
    .then((response) => response.json())
}
