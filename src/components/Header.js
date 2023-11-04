import "./Header.css";
import { BsFillSunFill, BsMoonFill, BsSunFill } from "react-icons/bs";

export default function Header(props) {
  const { theme, setTheme } = props;

  function ToggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <header>
      <div className="logo">
        <span>Task Menagement</span>
      </div>
      <div className="theme-container">
        <span>{theme === "light" ? "Light" : "Night"}</span>
        <span className="icon" onClick={ToggleTheme}>
          {theme === "light" ? <BsSunFill /> : <BsMoonFill />}
        </span>
      </div>
    </header>
  );
}
