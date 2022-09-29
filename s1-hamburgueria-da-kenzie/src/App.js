import { useState } from "react";
import Dashboard from "./components/Dashboard";
import WelcomePage from "./components/WelcomePage";
import "./Global/index.css";

function App() {
  const [initialPage, setInitialPage] = useState(true);

  return (
    <div className="App">
      {initialPage ? (
        <WelcomePage setInitialPage={setInitialPage}></WelcomePage>
      ) : (
        <Dashboard></Dashboard>
      )}
    </div>
  );
}

export default App;
