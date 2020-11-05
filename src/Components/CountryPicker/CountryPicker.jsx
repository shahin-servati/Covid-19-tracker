import React ,{useEffect ,useState} from 'react'
import Style1 from './CountryPicker.module.css'
import {NativeSelect,FormControl} from '@material-ui/core'
import {fetchCountries} from '../../Api/api.js'




const Countrypicker = ({handlechange}) => {

    const [fetchcountries,setfetchcountries] = useState([])


useEffect(() => {
const fetchAPI = async () => {
setfetchcountries(await fetchCountries())

}
fetchAPI();

},[setfetchcountries])

console.log(fetchcountries)
    return(
      <FormControl className = {Style1.formcontrol}>
          <NativeSelect defaultValue = '' onChange = {(e) => {handlechange(e.target.value)}} >
              <option value = ''>Global</option>    
            {fetchcountries.map((item , i) => {
                return (
                    <option key = {i} value= {item}>{item}</option>
                )
            })}
          </NativeSelect>
      </FormControl>
    )
}

export default Countrypicker;