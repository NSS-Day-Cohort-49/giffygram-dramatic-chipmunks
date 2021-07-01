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
    <div class="message_list" id="${filteredMessages.id}"> Message from: ${filteredMessages.userId} 
    Message: ${filteredMessages.text}
    </div>`;

  return html;
};
