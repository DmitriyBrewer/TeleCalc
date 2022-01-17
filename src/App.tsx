import React from "react";
import "./styles.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { BottomNavigation } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import SliderMUI from "./SliderMui";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export interface ISlider {
  min: any;
  sms: any;
  gb: any;
  facebook:any;
}

const marks = [
  {value: 200,label: "200 мин"},{value: 350,label: "350 мин"},
  {value: 600,label: "600 мин"},{value: 650,label: "650 мин"}
];

const marksSMS = [
  {value: 0,label: "0 смс"},{value: 50,label: "50 смс"},
  {value: 100,label: "100 смс"},{value: 150,label: "150 смс"}
];

const marksWeb = [
  {value: 5,label: "5 ГБ"},{value: 10,label: "10 ГБ"},
  {value: 15,label: "15 ГБ"},{value: 25,label: "25 ГБ"}
];

function valuetext(value: number) {
  return `${value}`;
}

export default function App() {

  const [value, setValue] = React.useState<ISlider>({min: "",sms: "",gb: "", facebook:''});

  const [checked, setChecked] = React.useState(false);

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if (!checked){
      setValue({ ...value, facebook: 10 })
    } else setValue({ ...value, facebook: 0 })
  };

  console.log(checked);
  console.log(value);


  const minHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, min: event.target.value });
  };

  const smsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, sms: event.target.value });
  };

  const gbHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, gb: event.target.value });
  };


  return (
    <div className="App">
      <h1>Настройте тариф</h1>
      <h3>Минуты</h3>
      <p>На Tele2 по России безлимитно</p>
      <p>на другие мобильные номера домашнего региона</p>
      <SliderMUI
        value={value?.min}
        onChange={minHandler}
        defaultValue={200}
        getAriaValueText={valuetext}
        step={0}
        min={200}
        max={650}
        marks={marks}
      />
      <p>
        <AddCircleOutlineIcon />
        Используйте вместе с тарифом
      </p>
      <SliderMUI
        value={value?.sms}
        onChange={smsHandler}
        defaultValue={0}
        getAriaValueText={valuetext}
        step={0}
        min={0}
        max={150}
        marks={marksSMS}
      />
      <h3>Интернет</h3>
      <SliderMUI
        value={value?.gb}
        onChange={gbHandler}
        defaultValue={20}
        getAriaValueText={valuetext}
        step={0}
        min={5}
        max={25}
        marks={marksWeb}
      />
      <h3>Соцсети</h3>
      <ul style={{listStyle:'none', display:'flex'}}>
        <li>
      <Checkbox
        checked={checked}
        onChange={handleCheckbox}
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
      <p>+20 р</p>
      </li>
      <li>
      <Checkbox
        checked={checked}
        onChange={handleCheckbox}
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
      <p>+20 р</p>
      </li>
      </ul>
      <BottomNavigation style={{ background: "lightblue" }}>
        <p>{(parseFloat(value.min) + parseFloat(value.sms) + parseFloat(value.gb) +parseFloat(value.facebook)) + " р/месяц"}</p>
      </BottomNavigation>
    </div>
  );
}
