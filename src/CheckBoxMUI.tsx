import React, {useState} from "react";
import Checkbox from "@mui/material/Checkbox";


interface CheckBoxProps {
    checked:boolean;
    onChange: (event: any) => void;
    icon:any;
    checkedIcon:any;
    coin:string;
    disabled?:boolean;
  }


const CheckBoxMUI:React.FC<CheckBoxProps> = ({checked,onChange,icon, checkedIcon,coin, disabled}) => {
    return (
        <li style={{marginLeft:'10px'}}>
        <Checkbox
            disabled={disabled}
            checked={checked}
            onChange={onChange}
            icon={icon}
            checkedIcon={checkedIcon}
      />
        <p>{coin}</p>
        </li>
    )
}

export default CheckBoxMUI;
