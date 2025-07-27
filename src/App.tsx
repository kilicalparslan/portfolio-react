import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-black transition-colors">
        <div className="z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar />
            <AppRouter />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
