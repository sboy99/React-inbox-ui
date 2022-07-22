import logo from "./logo.svg";
import "./App.css";
import { Header, Main, Sidebar } from "./Components";

function App() {
  return (
    <div className="App font-poppins">
      <div className="layout flex h-screen flex-col">
        <Header />
        <div className="flex flex-auto">
          <Sidebar />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
