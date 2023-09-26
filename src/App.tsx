import { MainRoutes } from "./routes/MainRoutes";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1 className="header-bar">Photo Gallery</h1>
      <hr />
      <MainRoutes />
    </div>
  );
};

export default App;
