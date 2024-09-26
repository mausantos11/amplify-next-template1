import React from "react"
import "../app.css"
import { SideBarData } from "./SideBarData";

function SideBar(){

    return(

        <>
        <div className="sidebar">
            <ul className="sidebar-list">
                <div className="logo-sidebar"><img src={"https://www.lumnivision.com/wp-content/uploads/2024/02/logo-LV.webp"} alt="logo" height={60} onClick={() => {window.location.pathname= ""}}/></div>

                {SideBarData.map((val,key)=> {
                    return(
                    <li key = {key} onClick={() => {window.location.pathname = val.link}} className="row-nav" id={window.location.pathname == val.link ? "active":""}>
                    <div id="icon">{val.icon}</div>
                    <div id="title">{val.title}</div>
                    </li>
            )
        })}
        </ul>
      </div>
        </>
    )

};
export default SideBar