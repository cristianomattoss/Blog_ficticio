import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <div className="blog-name">Blog Fictício</div>
        <div className="blog-pages"></div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
