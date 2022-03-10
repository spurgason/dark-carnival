import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed"
import LoginForm from "./components/LoginForm";

import "./App.css";

const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
      height="100vh"
      projectID="479a9076-012e-4c70-bdb9-9eb1863aa32d"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
