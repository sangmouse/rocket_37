import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../root.scss"
import { Outlet } from "react-router";

export default function LayoutRoot(){

    return (
        <div>
            <Header/>
            <div className="wrapper-content">
                <Sidebar/>
                <div className="component-content">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}