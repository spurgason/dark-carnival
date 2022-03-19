const UserMessage = ({ message }) => {
      
      // checks to see if message is text or image
      if (message?.attachments?.length > 0) {
            return (
                  <img
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{ float: "right" }}
                  />
            );
      }

      // this returns the users messages that they send/sent in the chat
      return (
        <div
          className="message"
          style={{
            float: "right",
            marginRight: "18px",
            color: "#36393e",
            backgroundColor: "#ffd166",
          }}
        >
          {message.text}
        </div>
      );
};

export default UserMessage;
