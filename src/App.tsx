import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import { appRoutes as AppRoutes } from "./routes/index.routes";

function App() {

  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
