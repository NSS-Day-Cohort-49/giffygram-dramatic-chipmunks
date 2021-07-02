import { getMessages, getUsers, updateRead } from "../data/provider.js";

export const MessageList = () => {
  const messages = getMessages();
  const currentUserId = localStorage.getItem("gg_user");

  let filteredMessages = messages.filter((message) => {
    return parseInt(currentUserId) === message.recipientId;
  });

  let html = formatMessages(filteredMessages)

  return html;
};

const formatMessages = (filteredMessages) => {
  const users = getUsers()

  let html = filteredMessages.map(message => {
          const sender = users.find(user => user.id === message.userId)
          updateRead(message.id, {
                      userId: message.userId,
                      recipientId: message.recipientId,
                      text: message.text,
                      read: true
          })
    
    return `<div class="message_list" id="${message.id}"> Message from: ${sender.name} 
          <br>
          Message: ${message.text}
          </div>
          <br>`
  }).join("")

  return html
}
