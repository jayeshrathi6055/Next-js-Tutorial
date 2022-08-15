import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'

const Pagination = () => {
    const router = useRouter();
    const pathArray = router.pathname.split("/").filter((item)=>{
        if(item.length){
            return true;
        }
        return false;
    });
  return (
    <div style={{backgroundColor:"var(--bgcolor)", padding:"4rem 15vw"}}>
        <ul className='flex' style={{ gap:"1rem"}}>
            {pathArray.map((item, index)=>{
                return(
                    <li key={index} style={{fontSize:"1.7rem", listStyle:"none", gap:"1rem", textTransform:"capitalize"}} className="flex">
                        <span style={{color:"white"}}>{item}</span>
                        {pathArray.length-1>index?<span style={{color:"white", fontWeight:"bolder", cursor:"default"}}>&gt;</span>:""}
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Pagination;