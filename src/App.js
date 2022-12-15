import React, { useState } from "react";
import { Slider } from "antd";

import "antd/dist/reset.css";
import "./App.css";

function App() {
  const [valueR, setValueR] = useState(255);
  const [valueG, setValueG] = useState(255);
  const [valueB, setValueB] = useState(255);

  return (
    <div className="container">
      <div className="box">
        <div className="box-top">
          <h1
            className="title"
            style={{
              backgroundColor: `rgb(${valueR + "," + valueG + "," + valueB})`,
            }}
          >
            {`rgb(${valueR + ", " + valueG + ", " + valueB})`}
          </h1>
        </div>
        <div className="content">
          <div className="red">
            <p>RED</p>
            <Slider
              defaultValue={valueR}
              min={0}
              max={255}
              trackStyle={{ backgroundColor: "red" }}
              handleStyle={{ borderColor: "red" }}
              onChange={(e) => {
                setValueR(e);
              }}
            />
            <p>{valueR}</p>
          </div>
          <div className="green">
            <p>GREEN</p>
            <Slider
              defaultValue={valueG}
              min={0}
              max={255}
              trackStyle={{ backgroundColor: "green" }}
              handleStyle={{ borderColor: "green" }}
              onChange={(e) => {
                setValueG(e);
              }}
            />
            <p>{valueG}</p>
          </div>
          <div className="blue">
            <p>BLUE</p>
            <Slider
              defaultValue={valueB}
              min={0}
              max={255}
              trackStyle={{ backgroundColor: "blue" }}
              handleStyle={{ borderColor: "blue" }}
              onChange={(e) => {
                setValueB(e);
              }}
            />
            <p>{valueB}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
