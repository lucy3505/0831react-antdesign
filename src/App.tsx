import React, { useState } from "react";
import "./App.css";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>Disabled Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Large Primary
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          small danger
        </Button>
        <Button btnType={ButtonType.Link} href="baidu.com" disabled>
          Baidu
        </Button>
        <Button btnType={ButtonType.Link} href="baidu.com">
          Baidu
        </Button>
      </header>
    </div>
  );
};

export default App;
