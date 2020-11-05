import React , {useState , useEffect} from 'react'
import {fetchDailyDate} from '../../Api/api.js'
import {Line , Bar} from 'react-chartjs-2'
import Style1 from './Charts.module.css'




const Chart = ({data , country}) => {
  const [Dailydata ,setDailydata] = useState([])


useEffect(() => {
const fetchAPI = async() => {
  setDailydata( await fetchDailyDate() )
}
//console.log(Dailydata)
fetchAPI();
},[Dailydata])

const Barchart = (
    data.confirmed ? 
    (
        <Bar
        
data = {{
labels : ['Infected' , 'Recovered' , 'Deaths'],
datasets : [{
label : 'people',
backgroundColor : [
   ' rgba(0,0,255,0.5)',
'rgba(0,255,0,0.5)',
'rgba(255,0,0,0.5)',
],
data : [data.confirmed.value,data.recovered.value,data.deaths.value]
}]
}}
options = {{
    legend:{display : false},
    title : {display : true , text : `current state in ${country}`}
}}

        />
    ): null
)
const linechart = (
    
    Dailydata.length  ? 
    (<Line
    data ={{
        labels : Dailydata.map(({date}) => date),
        datasets : [{
            data : Dailydata.map(({confirmed}) => confirmed),
            label : 'Infected',
            borderColor : '#3333ff',
            fill : true,
        },{
            data : Dailydata.map(({deaths}) => deaths),
            label : 'Deaths',
            borderColor : 'red',
            backgroundColor : 'rgba(255,0,0,0.5)',
            fill : true,
        }],
    }}
    />) : null
)


    return(
       <div className ={Style1.container}>
           {country ? Barchart : linechart}
       </div>
    )
}

export default Chart;