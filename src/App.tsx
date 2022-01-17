import React from "react";
import "./styles.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { BottomNavigation } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, AppState, RootState } from "./reducer/store";

//CheckBox icon
//Социальны сети
import PublicIcon from '@mui/icons-material/Public';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
//Messanger
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import MessageIcon from '@mui/icons-material/Message';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InboxIcon from '@mui/icons-material/Inbox';
//CheckBox icon

import SliderMUI from "./SliderMui";
import CheckBoxMUI from "./CheckBoxMUI";

export interface ISlider {
  min: any;
  sms: any;
  gb: any;
  facebook:any;
  instagram:any;
  vk:any;
  pinterest:any;
  linkedin:any;
  whatsapp:any;
  telegram:any;
  message:any;
  mail:any;
  inbox:any;
}

//Slider pharams
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
//Slider pharams


export default function App() {

  const [value, setValue] = React.useState<ISlider>({
  min: "",sms: "",gb: "", 
  facebook:'',instagram:'', vk:'', pinterest:'', linkedin:'',
  whatsapp:'',telegram:'', message:'', mail:'', inbox:''
});

  const [checked, setChecked] = React.useState({
    facebook:false,
    instagram:false,
    vk:false,
    pinterest:false,
    linkedin:false,
    whatsapp:false,
    telegram:false,
    message:false,
    mail:false,
    inbox:false
  });

  ////Дополнит услуги 
//// Соцсети

  const handleCheckboxFacebook = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked({...checked, facebook: event.target.checked});
    if (!checked.facebook){
      setValue({ ...value, facebook: 20})
    } else setValue({ ...value, facebook: 0 })
  };

const handleCheckboxInstagram = (event: React.ChangeEvent<HTMLInputElement>) => {
  setChecked({...checked, instagram: event.target.checked});
  if (!checked.instagram){
    setValue({ ...value, instagram: 20 })
  } else setValue({ ...value, instagram: 0 })
};

const handleCheckboxVK = (event: React.ChangeEvent<HTMLInputElement>) => {
  setChecked({...checked, vk: event.target.checked});
  if (!checked.vk){
    setValue({ ...value, vk: 20 })
  } else setValue({ ...value, vk: 0 })
};

const handleCheckboxPinterest = (event: React.ChangeEvent<HTMLInputElement>) => {
  setChecked({...checked, pinterest: event.target.checked});
  if (!checked.pinterest){
    setValue({ ...value, pinterest: 20 })
  } else setValue({ ...value, pinterest: 0 })
};

const handleCheckboxLinkedIn = (event: React.ChangeEvent<HTMLInputElement>) => {
  setChecked({...checked, linkedin: event.target.checked});
  if (!checked.linkedin){
    setValue({ ...value, linkedin: 20 })
  } else setValue({ ...value, linkedin: 0 })
};

// Messanger

const handleCheckboxWhatsApp = (event: React.ChangeEvent<HTMLInputElement>) => {
  setChecked({...checked, whatsapp: event.target.checked});
  if (!checked.whatsapp){
    setValue({ ...value, whatsapp: 20})
  } else setValue({ ...value, whatsapp: 0 })
};

const handleCheckboxTelegram = (event: React.ChangeEvent<HTMLInputElement>) => {
setChecked({...checked, telegram: event.target.checked});
if (!checked.telegram){
  setValue({ ...value, telegram: 20 })
} else setValue({ ...value, telegram: 0 })
};

const handleCheckboxMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
setChecked({...checked, message: event.target.checked});
if (!checked.message){
  setValue({ ...value, message: 20 })
} else setValue({ ...value, message: 0 })
};

const handleCheckboxMail = (event: React.ChangeEvent<HTMLInputElement>) => {
setChecked({...checked, mail: event.target.checked});
if (!checked.mail){
  setValue({ ...value, mail: 20 })
} else setValue({ ...value, mail: 0 })
};

const handleCheckboxInbox = (event: React.ChangeEvent<HTMLInputElement>) => {
setChecked({...checked, inbox: event.target.checked});
if (!checked.inbox){
  setValue({ ...value, inbox: 20 })
} else setValue({ ...value, inbox: 0 })
};

console.log(value);
console.log(checked.facebook);
console.log(checked.instagram);
  ////Дополнит услуги 



  


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
        <CheckBoxMUI 
        checked={checked.facebook} 
        onChange={handleCheckboxFacebook} 
        icon={<FacebookIcon />} 
        checkedIcon={<FacebookIcon style={{color:'#3f50b5'}}/>}
        coin={'+20р'}
        disabled={value.min<600? true : false}
        />
        <CheckBoxMUI 
        checked={checked.instagram} 
        onChange={handleCheckboxInstagram} 
        icon={<InstagramIcon />} 
        checkedIcon={<InstagramIcon style={{color:'#3f50b5'}}/>}
        coin={'+20р'}
        disabled={value.min<350? true : false}
        />
        <CheckBoxMUI 
        checked={checked.vk} 
        onChange={handleCheckboxVK} 
        icon={<PublicIcon />} 
        checkedIcon={<PublicIcon style={{color:'#3f50b5'}} />}
        coin={'+20р'}
        />
        <CheckBoxMUI 
        checked={checked.pinterest} 
        onChange={handleCheckboxPinterest} 
        icon={<PinterestIcon />} 
        checkedIcon={<PinterestIcon style={{color:'#3f50b5'}}/>}
        coin={'+20р'}
        />
        <CheckBoxMUI 
        checked={checked.linkedin} 
        onChange={handleCheckboxLinkedIn} 
        icon={<LinkedInIcon />} 
        checkedIcon={<LinkedInIcon style={{color:'#3f50b5'}} />}
        coin={'+20р'}
        />
      </ul>
      <h3>Мессенджеры</h3>
      <ul style={{listStyle:'none', display:'flex'}}>
        <CheckBoxMUI 
        checked={checked.whatsapp} 
        onChange={handleCheckboxWhatsApp} 
        icon={<WhatsAppIcon />} 
        checkedIcon={<WhatsAppIcon style={{color:'#3f50b5'}}/>}
        coin={'+20р'}
        />
        <CheckBoxMUI 
        checked={checked.telegram} 
        onChange={handleCheckboxTelegram} 
        icon={<TelegramIcon />} 
        checkedIcon={<TelegramIcon style={{color:'#3f50b5'}}/>}
        coin={'+20р'}
        />
        <CheckBoxMUI 
        checked={checked.message} 
        onChange={handleCheckboxMessage} 
        icon={<MessageIcon />} 
        checkedIcon={<MessageIcon style={{color:'#3f50b5'}} />}
        coin={'+20р'}
        />
        <CheckBoxMUI 
        checked={checked.mail} 
        onChange={handleCheckboxMail} 
        icon={<MailOutlineIcon />} 
        checkedIcon={<MailOutlineIcon style={{color:'#3f50b5'}}/>}
        coin={'+20р'}
        />
        <CheckBoxMUI 
        checked={checked.inbox} 
        onChange={handleCheckboxInbox} 
        icon={<InboxIcon />} 
        checkedIcon={<InboxIcon style={{color:'#3f50b5'}} />}
        coin={'+20р'}
        />
      </ul>
      <BottomNavigation style={{ background: "lightblue" }}>
        <p>{
        (parseFloat(value.min)||0)
         + (parseFloat(value.sms) ||0)
         + (parseFloat(value.gb) ||0)
         + (parseFloat(value.facebook)||0)
         + (parseFloat(value.instagram)||0)
         + (parseFloat(value.vk)||0)
         + (parseFloat(value.pinterest)||0)
         + (parseFloat(value.linkedin)||0)
         + (parseFloat(value.whatsapp)||0)
         + (parseFloat(value.telegram)||0)
         + (parseFloat(value.message)||0)
         + (parseFloat(value.mail)||0)
         + (parseFloat(value.inbox)||0)
         + " р/месяц"}
         </p>
      </BottomNavigation>
    </div>
  );
}
