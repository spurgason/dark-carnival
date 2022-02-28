import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed"

import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="479a9076-012e-4c70-bdb9-9eb1863aa32d"
      userName="Coach"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
