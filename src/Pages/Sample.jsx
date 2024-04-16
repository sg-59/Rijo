import { useEffect } from "react"
import axios from 'axios'
import { useState } from "react"
import './sample.css'
import { display } from "./Apifetching"
import { Link } from "react-router-dom"

const Sample = () => {

  const [mealData,setMealData]=useState([])



  useEffect(()=>{
  display().then((apidata)=>{
    console.log("///////////////",apidata);
    setMealData(apidata)
  })
  },[])

  console.log("*******************************************",mealData);

  return (
    <div className="main">
      {
        mealData.map((li)=>(
          <Link to={`productinfo/${li.idCategory}`}>
          <div key={li.idCategory}>
            <img src={li.strCategoryThumb} alt="" />
            <h3>{li.strCategory}</h3>
          </div>
          </Link>
        ))
      }
 
    </div>
  )
}

export default Sample