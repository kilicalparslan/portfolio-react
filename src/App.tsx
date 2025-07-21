import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-black transition-colors">
        <div className="z-50">
          <div className="container"></div>
          <Navbar />
        </div>
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
