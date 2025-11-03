import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Post from "./Post";
import SİdeMenu from "./SİdeMenu";

function App() {
  return (
    <div className="App">
      <Header />

      <div style={{ display: "flex", justifyContent: "center" }}>
        {/*posts & side menu container*/}
        <div style={{ display: "flex", width: "60%" }}>
          {/*posts contanier*/}
          <div style={{ width: "70%" }}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>

          {/*side menu  container*/}

          <div style={{ width: "30%" }}>
            <SİdeMenu />
          </div>
        </div>

        {/*posts & side menu container*/}
      </div>
    </div>
  );
}

export default App;
