const OtherUsersMessage = ({ lastMessage, message }) => {
  // tells us if this is the first message by the user
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message=row">
      {/* displays users username above chat message */}
      {isFirstMessageByUser && (
        <div className="message-username">{message?.sender?.username}</div>
      )}
      {/* checks to see if message is text or image */}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
        />
      ) : (
        //if it is not an image then it is a text message
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: "lightgrey",
            color: "#36393e",
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
