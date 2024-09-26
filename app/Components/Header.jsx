import React from "react";
import "../app.css"
import HelpIcon from '@mui/icons-material/Help';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';

function Header(){

    return(
        <>
        <div className="header-content">
        <div className="header-buscar">Buscar</div>
        <div className="header-alertas">Alertas  <div><NotificationImportantIcon /></div></div>
        <div className="header-usuario">Usuario   <div><AccountCircleIcon /></div></div>
        <div className="header-ayuda">Ayuda   <div><HelpIcon /></div></div>
        <div className="header-whatsapp">Whatsapp  <div><WhatsAppIcon /></div> </div>
        </div>
        </>
    )
};
export default Header