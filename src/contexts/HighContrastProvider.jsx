import { useEffect, useState } from "react";
import { HighContrastContext } from "./HighContrastContext";

export default function HighContrastProvider({ children }) {
  const [highContrast, setHighContrast] = useState(false);

  const toggleHighContrast = () => {
    setHighContrast((prev) => !prev);
  };

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const root = document.getElementById("root");

    if (highContrast) {
      body.style.backgroundColor = "black";
      body.style.backgroundImage = "none";
      html.style.backgroundColor = "black";
      if (root) root.style.backgroundColor = "black";
    } else {
      body.style.backgroundColor = "";
      body.style.backgroundImage =
        "linear-gradient(129deg, #291745 18.48%, #491845 83.36%)";
      html.style.backgroundColor = "";
      if (root) root.style.backgroundColor = "";
    }
  }, [highContrast]);

  return (
    <HighContrastContext.Provider value={{ highContrast, toggleHighContrast }}>
      {children}
    </HighContrastContext.Provider>
  );
}
