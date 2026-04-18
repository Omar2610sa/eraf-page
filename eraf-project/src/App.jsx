import AppRoutes from "./routes/AppRoutes";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <HelmetProvider>
      <div dir="rtl">
        <AppRoutes />
      </div>
    </HelmetProvider>
  );
}

export default App
