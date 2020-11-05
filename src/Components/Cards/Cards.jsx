import React from 'react'
import {Card ,Typography ,CardContent ,Grid} from '@material-ui/core'
import Countup from 'react-countup'
import cx from 'classnames'
import Style1 from './Cards.module.css'




const Cards = ({data : {confirmed , recovered , deaths , lastUpdate} }) => {
 
    if(!confirmed){
        return 'Loading ...'
    }

    return(
        <div className = {Style1.container}>
            <Grid container  spacing = {3} justify = 'center'>
        <Grid item component = {Card} xs = {12} md = {3} className = {cx(Style1.card , Style1.infected)}>
            <CardContent>
                <Typography color = 'textSecondary' gutterBottom>
                    Infected
                </Typography>
                <Typography variant = 'h5'>
                <Countup start = {0} end = {confirmed.value} duration = {2.2} separator = ','/>
                </Typography>
                <Typography color = 'textsecondary'>
                {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant = 'body2'>
                Number of active cases of covid-19
                </Typography>
            </CardContent>
        </Grid>

        <Grid item  component = {Card} xs = {12} md = {3} className = {cx(Style1.card , Style1.recovered)}>
            <CardContent>
                <Typography color = 'textSecondary' gutterBottom>
                    Recovered
                </Typography>
                <Typography variant = 'h5'>
                <Countup start = {0} end = {recovered.value} duration = {2.2} separator = ','/>
                </Typography>
                <Typography color = 'textsecondary'>
               {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant = 'body2'>
                Number of recoveries from covid-19
                </Typography>
            </CardContent>
        </Grid>

        <Grid item  component = {Card} xs = {12} md = {3} className = {cx(Style1.card , Style1.deaths)}>
            <CardContent>
                <Typography color = 'textSecondary' gutterBottom>
              Deaths
                </Typography>
                <Typography variant = 'h5'>
                <Countup start = {0} end = {deaths.value} duration = {2.2} separator = ','/>
                </Typography>
                <Typography color = 'textsecondary'>
                {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant = 'body2'>
                Number of deaths caused by covid-19
                </Typography>
            </CardContent>
        </Grid>
            </Grid>
        </div>
    )
}

export default Cards;