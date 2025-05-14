import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/Routes/AppRoutes";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <AppRoutes />
         </BrowserRouter>
      </div>
   );
}

export default App;
