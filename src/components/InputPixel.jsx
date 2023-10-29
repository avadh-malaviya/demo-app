import { TextField } from "@shopify/polaris";
import { useEffect, useState } from "react";

function InputPixel(propsObj) {
  const { onChange = () => {}, value = 0, suffixval = "PX", min = 0, max = 100 } = propsObj;
  const [count, setCount] = useState(value);

  useEffect(() => {
    setCount(value);
  }, [value])

  const handleCountIncrease = () => {
    if(count < max) {
        onChange(count + 1);
        setCount((p) => p + 1);
    }
  };

  const handleCountDecrease = () => {
    if(count > min) {
        onChange(count - 1);
        setCount((p) => p - 1);
    }
  };

  const handleValidation = (val) => {
    let numVal = Number(val);
    if(Number.isInteger(numVal) && numVal >= min && numVal <= max) {
        onChange(numVal);
        setCount(numVal);
    }
  }

  const suffix = (
    <div style={{ display: "flex", alignItems: "center", height: "32px" }}>
      <small style={{ marginRight: "5px" }}> {suffixval} </small>
      <div style={{ borderLeft: "1px solid", height: "32px" }}>
        <span className="btn-arrow" onClick={handleCountIncrease}>
          <svg viewBox="0 0 20 20" focusable="false" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M14.53 12.28a.75.75 0 0 1-1.06 0l-3.47-3.47-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06Z"
            ></path>
          </svg>
        </span>
        <span className="btn-arrow" style={{ borderTop: "1px solid" }} onClick={handleCountDecrease}>
          <svg viewBox="0 0 20 20" focusable="false" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );

  return (
    <div className="up-down-arrow">
      <TextField
        value={value}
        onChange={handleValidation}
        //   suffix={suffixval}
        suffix={suffix}
        //   type="number"
        autoComplete="off"
        min={min}
        max={max}
      />
    </div>
  );
}

export default InputPixel;
