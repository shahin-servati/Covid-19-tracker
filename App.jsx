import React from 'react'
import Cards from './Components/Cards/Cards'
import Chart from './Components/Charts/Charts.jsx'
import Countrypicker from './Components/CountryPicker/CountryPicker.jsx'
import Style1 from './Style.module.css'
import {Fetchdata} from './Api/api.js'
import { Container } from '@material-ui/core'




//let App = (props) => {

  //  useEffect(() => {
   //    const data =  Fetchdata();
//       console.log(data)
 //   },[])
  //  return(
//<div className = {Style1.countainer}>
//<Cards/>
//<Chart/>
//<Countrypicker/>

//</div>
//    )
//}

//export default App;

export default class App extends React.Component {
  state = {
      data : {},
      country : '',
  }

async componentDidMount(){
    const fetchdata = await Fetchdata();
    this.setState ({data : fetchdata})
}

handleCountryChnge = async (country) => {
  const fetchdata = await Fetchdata(country);
  this.setState ({data : fetchdata , country : country})
}

    render(){
       


        
        return(
            <div className = {Style1.countainer}>
               
<Cards data = {this.state.data} />
<Countrypicker handlechange = {this.handleCountryChnge}/>
<Chart data = {this.state.data} country = {this.state.country}/>


</div>
        )
    
}
    }
  