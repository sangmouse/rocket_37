import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar(){
    return (
        <div className="sidebar">
            <h1>Sidebar</h1>
            <ul>
                <li>
                    <Link to="about-us">About us</Link>
                </li>
            </ul>
        </div>
    )
}