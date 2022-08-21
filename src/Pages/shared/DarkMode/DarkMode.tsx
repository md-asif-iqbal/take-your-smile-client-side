import { ChangeEventHandler } from "react";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import "./DarkMode.css";

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");
const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const DarkMode = () => {
  return (
    <div className="toggle-theme-wrapper">
      {/* <span className="text-primary" ><MdOutlineLightMode ></MdOutlineLightMode></span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <div className="slider round"></div>
      </label>

      
      <span className="text-primary"><MdOutlineNightlight /></span> */}


      
    <input type="checkbox" id="toggle_checkbox" onChange={toggleTheme}
          defaultChecked={defaultDark} />

    <label htmlFor="toggle_checkbox">
      <div id="star">
        <div className="star" id="star-1">★</div>
        <div className="star" id="star-2">★</div>
      </div>
      <div id="moon"></div>
    </label>

    </div>
  );
};

export default DarkMode;