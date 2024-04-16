import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { display } from './Apifetching';

const Singleinfo = () => {

    const Ids=useParams()
    console.log("Link id",Ids.id);

    const navigate=useNavigate()


    const [mealData,setMealData]=useState([])

    setTimeout(()=>{
navigate('/hello')
    },3000)

    useEffect(()=>{
    display().then((apidata)=>{
      console.log("///////////////",apidata);
      setMealData(apidata)
    })
    },[])

    console.log("++++++++++++++++",mealData);

    const filteredData=mealData.filter((li)=>{
        return li.idCategory == Ids.id
    })


    console.log("FilteredData",filteredData);

  return (
    <div>
       {filteredData.map((li)=>(
        <>
        <img src={li.strCategoryThumb} alt="" />
        <h3>{li.strCategory}</h3>
<h5>{li.strCategoryDescription}</h5>
        </>
       ))}
    </div>
  )
}

export default Singleinfo