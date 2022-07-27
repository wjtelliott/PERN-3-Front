import "./App.css";
import AuthenticationButton from "./components/AuthenticationButton";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <div className="App">
      <AuthenticationButton />
    </div>
  );
}

export default App;
