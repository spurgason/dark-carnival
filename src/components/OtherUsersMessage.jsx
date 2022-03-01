const OtherUsersMessage = ({ lastMessage, message }) => {
      // tells us if this is the first message by the user
      const isFirstMessageByUser =
            !lastMessage || lastMessage.sener.username !== message.sender.username;

      return (
        <div className="message=row">
          {isFirstMessageByUser && (
            <div
              className="message-avatar"
              style={{ backgroundImage: `url (${message?.sender?.avatar})` }}
            />
          )}
          {message?.attachments?.length > 0 ? (
            <img
              src={message.attachment[0].file}
              alt="message-attachment"
              className="message-image"
              style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
            />
          ) : (
            <div
              className="message"
              style={{
                float: "left",
                backgroundColor: "yellow",
                marginLeft: isFirstMessageByUser ? "4px" : "48px",
              }}
            >
              {message.text}
            </div>
          )}
        </div>
      );
};

export default OtherUsersMessage;
