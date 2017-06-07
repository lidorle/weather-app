// var React = require('react');
import React, { Component,propTypes } from 'react';
import api from './../api.js';


export default class page extends React.Component{
  constructor(props){
      super(props);
      this.UpDateWeather = this.UpDateWeather.bind(this);


      this.state = {
        wx_desc: '',
        temp_c:'',
        humid_pct:'',
        longitude:'',
        latitude:''

      };
  }



  	 componentWillMount(){
        this.UpDateWeather();

    //    navigator.geolocation.getCurrentPosition(
    //      (position) => {
     //
    //    this.setState({latitude:position.latitude});
    //    this.setState({longitude:JSON.stringify(position.longitude)});
    //    console.log(this.state.latitude)
     //
    //  });

       this.timerId = setInterval(this.UpDateWeather, 60000);
     };


    UpDateWeather(){

      api.fetchWeather().then((weather)=> {
        console.log('weather object',weather);
        return weather;

        }).then((weather)=>{
              this.setState({wx_desc: JSON.stringify(weather['wx_desc'])});
             this.setState({temp_c: JSON.stringify(weather['temp_c'])});
             this.setState({humid_pct: JSON.stringify(weather['humid_pct'])});

           }).then(()=>{
             console.log('last update at:',new Date());
           });



    };



  	render(){
  		return (
  					<html>
  					   <head>
  							 	<title>Wheter app</title>
  								<link rel='stylesheet' href='/style.css'/>
  					   </head>

  					   <body>
  								<div>
  								    <h1>weather app</h1>
                      <table className="t1">
                        <tbody>
                          <tr>
                            <th>weather description : {this.state.wx_desc}</th>
                            <th>temperature: {this.state.temp_c} c</th>
                            <th>humidity level: {this.state.humid_pct}</th>
                          </tr>
                        </tbody>
                      </table>
  								</div>
  			 			<script src='./bundle.js' />
  					   </body>
  					</html>
  			);
  	}
  };
