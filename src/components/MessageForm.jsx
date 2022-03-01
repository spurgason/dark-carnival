import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const {chatId, creds} = props;

  const handleSubmit = (event) => {
        event.preventDefault();

      const text = value.trim();

      if(text.length > 0) sendMessage(creds, chatId, {text});

      setValue("");
  };

  const handleChange = (event) => {
      setValue(event.target.value);

      isTyping(props, chatId);
  };

  const handleUpload = (event) => {
        sendMessage(creds, chatId, {flies: event.target.files, text: ""})
  }

  return (
    <form className="message-from" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
            <span className="image-button">
                  <p>Pic</p>
            </span>
      </label>
      <input
            type="file"
            multiple={false}
            id="upload-button"
            style={{display: "none"}}
            onChange={handleUpload}
      />
      <button type="submit" className="send-button"></button>
    </form>
  );
};

export default MessageForm;
