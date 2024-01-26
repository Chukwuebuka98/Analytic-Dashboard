import Header from "./components/Header";
import Finance from "./components/Finance";
import Session from "./components/Session";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../src/store/themeSlice";
function App() {
  const darkMode = useSelector(selectDarkMode);
  return (
    <div className={`${darkMode ? "bg-slate-950 text-white" : ""}`}>
      <Header />
      <Finance />
      <Session />
    </div>
  );
}

export default App;
