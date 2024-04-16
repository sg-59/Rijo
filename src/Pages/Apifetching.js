import axios from "axios";

export const display=async ()=>{
    const Apidata=await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    console.log("Apidata",Apidata.data.categories);
  return Apidata.data.categories   
      }

      