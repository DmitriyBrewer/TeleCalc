import React, {useState} from "react";
import Checkbox from "@mui/material/Checkbox";


interface CheckBoxProps {
    checked:boolean;
    onChange: (event: any) => void;
    icon:any;
    checkedIcon:any;
    coin:string;
  }


const CheckBoxMUI:React.FC<CheckBoxProps> = ({checked,onChange,icon, checkedIcon,coin}) => {
    return (
        <li style={{marginLeft:'10px'}}>
        <Checkbox
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
