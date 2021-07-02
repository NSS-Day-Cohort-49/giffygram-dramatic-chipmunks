import { getMessages, getUsers } from "../data/provider.js";

export const MessageList = () => {
  const messages = getMessages();
  const users = getUsers();
  let html = "";
  const currentUserId = localStorage.getItem("gg_user");

  let filteredMessages = messages.filter((message) => {
    return parseInt(currentUserId) === messages.userId;
  });

  html += `
    <div class="message_list" id="${messages.id}"> Message from: ${messages.userId} 
    Message: ${messages.text}
    </div>`;

  return html;
};
