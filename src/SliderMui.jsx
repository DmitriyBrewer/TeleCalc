import React from "react";
import { Slider } from "@mui/material";

const SliderMUI = ({
  value,
  onChange,
  defaultValue,
  getAriaValueText,
  step,
  min,
  max,
  marks
}) => {
  return (
    <div>
      <Slider
        value={value}
        onChange={onChange}
        sx={{
          marginLeft: "20px",
          width: "500px"
        }}
        aria-label="Custom marks"
        defaultValue={defaultValue}
        getAriaValueText={getAriaValueText}
        step={step}
        min={min}
        max={max}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </div>
  );
};

export default SliderMUI;
