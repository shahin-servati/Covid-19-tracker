import axios from 'axios';


const url = 'https://covid19.mathdro.id/api'


export const Fetchdata = async (country) => {
   let changeableurl = url;
   if(country){
       changeableurl = `${url}/countries/${country}`
   }
try{
    
    const {data : {confirmed , recovered ,deaths,lastUpdate}} = await axios.get(changeableurl);

const modifydata = {
    confirmed,
    recovered,
    deaths,
    lastUpdate

}

    return modifydata;  
    
} catch (error) {

}
}





export const fetchDailyDate = async () => { 
try{
 const {data} = await axios.get(`${url}/daily`);

 const modifydata = data.map((dailyData) => ({
confirmed : dailyData.confirmed.total,
deaths : dailyData.deaths.total,
date : dailyData.reportDate,
 }))
 return modifydata;
} catch (error) {

}
}


export const fetchCountries = async () => {
    try{
const {data : {countries}} = await axios.get(`${url}/countries`)

return countries.map((country) => country.name)

    } catch(error){

    }
}

