import React, { useState } from "react";
import FrameworkApi from "./Framework-Api";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  const putek = {
    bg: `white`,
    font: `black`,
    btn: `DARK`,
  };

  const bedeng = {
    bg: `#282c34`,
    font: `white`,
    btn: `LIGHT`,
  };

  const theme = dark ? bedeng : putek;
  const changeTheme = () => {
    if (dark) {
      setDark(false);
    } else {
      setDark(true);
    }
  };

  return (
    <div className="App" style={{ background: theme.bg, color: theme.font }}>
      <button onClick={changeTheme} style={{ color: theme.font }}>
        {theme.btn} MODE
      </button>
      <FrameworkApi />
    </div>
  );
}

export default App;
