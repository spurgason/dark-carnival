import MessageForm from "./MessageForm";
import UserMessage from "./UserMessage";
import OtherUsersMessage from "./OtherUsersMessage";

const ChatFeed = (props) => {
	const { chats, activeChat, userName, messages } = props;

	// creates a chat variable and looks to see if there are any active chats
	const chat = chats && chats[activeChat];

	// this function leaves a read receipt using their avatar on the last message, or last message they viewed
	const renderReadReceipts = (message, isMyMessage) => {
		// maps through all the people in the chat using their ids to tag a read receipt the the most recent message they have seen 
		return chat.people.map(
			(person, index) =>
				person.last_read === message.id && (
					<div
						key={`read_${index}`}
						className="read-receipt"
						style={{
							float: isMyMessage ? "right" : "left",
							backgroundImage: `url(${person?.person?.avatar})`,
						}}
					/>
				)
		);
	};

	const renderMessages = () => {
		// allows the application to fetch messages through a key tied to each message
		const keys = Object.keys(messages);

		// this renders the messages 
		return keys.map((key, index) => {
			// allows us to specify a message
			const message = messages[key];
			// finds the last message in the chat
			const lastMessageKey = index === 0 ? null : key[index - 1];
			// stores the users sent messages so they can identify which is theirs
			const isMyMessage = userName === message.sender.username;

			return (

				// creates a specified key that uses the messages index
				// this is the message bubble
				<div key={`msg_${index}`} style={{ width: "100%" }}>
					<div className="message-block">
						{isMyMessage ? (
							<UserMessage message={message} />
						) : (
							<OtherUsersMessage
								message={message}
								lastMessage={messages[lastMessageKey]}
							/>
						)}
					</div>
					<div
						className="read-receipts"
						style={{
							marginRight: isMyMessage ? " 18px" : "0px",
							marginLeft: isMyMessage ? "0px" : "68px",
						}}
					>
						{renderReadReceipts(message, isMyMessage)}
					</div>
				</div>
			);
		});
	};

	// if chat has not rendered just return it is loading
	if (!chat) return "Loading...";

	return (
		<div className="chat-feed">
			<div className="chat-title-container">
				{/* Title of the chat room */}
				<div className="chat-title">{chat?.title}</div>
				<div className="chat-subtitle">
					{/* This just returns the users names under the title to view who is in the chat room */}
					{chat.people.map((person) => ` ${person.person.username}`)}
				</div>
			</div>
			{renderMessages()}
			<div style={{ height: "100px" }} />
			<div className="message-from-container">
				<MessageForm {...props} chatId={activeChat} />
			</div>
		</div>
	);
};

export default ChatFeed;
