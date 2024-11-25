import "./assets/styles/common.scss";
import Header from "./layout/Header";
import Router from "./Router";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="l-main">
        <div className="l-main__container">
          <Router />
        </div>
      </div>
    </div>
  );
}

export default App;
