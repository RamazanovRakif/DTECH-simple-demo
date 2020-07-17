import React, { Component } from 'react'
import Slider from './slider/Slider'
import Advantage from './ourAdvantage/Advantage'
import Customers from './customers/Customers'
import Services from './servicess/Services'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Slider/>
                <Advantage/>
                <Services/>
                <Customers/>

                
            </div>
        )
    }
}
