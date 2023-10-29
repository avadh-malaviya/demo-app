import { Button, ButtonGroup } from "@shopify/polaris";
import { useId, useState } from "react";

function InputColorPicker(propsObj) {
  const { onChange = () => {}, value = null } = propsObj;
  const [colorVal, setColorVal] = useState("#000000");
  const randomID = useId();
  const colorPicker = {
    width: "18px",
    height: "18px",
    background: value ?? colorVal,
    borderRadius: "50%",
    cursor: "pointer",
    border: "1px solid",
  };

  return (
    <ButtonGroup variant="segmented">
      <div className="color-picker">
        <Button>
          <label htmlFor={randomID}>
            <div style={colorPicker}></div>
          </label>
          <input
            type="color"
            id={randomID}
            style={{ visibility: "hidden", position: "absolute" }}
            onChange={(e) => {
              setColorVal(e.target.value?.toUpperCase());
              onChange(e.target.value?.toUpperCase());
            }}
            value={value ?? colorVal}
          />
        </Button>
      </div>
      <Button>
        <label htmlFor={randomID}>{value ?? colorVal}</label>
      </Button>
    </ButtonGroup>
  );
}

export default InputColorPicker;
