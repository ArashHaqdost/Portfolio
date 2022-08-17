import React from "react";

//importt  data
import { social } from "../data";

const Sotial =()=>{
    return(
        <ul className="flex space-x-6">
            {social.map((item, index )=>{
                return(<li key={index} className="flex justify-center itmes-center text-accent">
                    <a className=" text-base" href={item.href}>
                        {item.icon}
                    </a>
                </li>)
            })}
        </ul>
    )

}

export default Sotial;