// var React = require('react');
import React, { Component } from 'react';
import api from './../api.js';


export default class page extends React.Component{

  //Component constructor
  constructor(props){
      super(props);

      //bind functions
      this.UpDateWeather = this.UpDateWeather.bind(this);


      //define state variables
      this.state = {
        wx_desc: '',
        temp_c:'',
        humid_pct:'',
        longitude:'',
        latitude:'',
        time:''

      };
  }



componentDidMount(){


  navigator.geolocation.getCurrentPosition((position)=>{
    let lon =JSON.stringify(position.coords.longitude)
    let lat =JSON.stringify(position.coords.latitude)
    this.setState({longitude:lon});
    this.setState({latitude:lat});
    this.UpDateWeather();
  },error=>{console.log('navigator error',error);});




}
  	 componentWillMount(){

      setInterval(this.UpDateWeather, 20000);
     };


    UpDateWeather(){

      //fech data from server
      api.fetchWeather(this.state.latitude,this.state.longitude)
      .then((weather)=> {
        return weather;

        }).then((weather)=>{

             //save date in state and render it
             console.log(weather['temp_c']);
              this.setState({wx_desc: JSON.stringify(weather['wx_desc'])});
             this.setState({temp_c: JSON.stringify(weather['temp_c'])});
             this.setState({humid_pct: JSON.stringify(weather['humid_pct'])});

           }).then(()=>{
             //print the update time
             let t =new Date().toJSON();
             console.log('last update at:',new Date());
             this.setState({time:t});
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
  								    <h1>Weather Forecast</h1>
                      <table className="t1">
                        <tbody>
                          <tr>
                            <th>weather description : {this.state.wx_desc}</th>
                            <th>temperature: {this.state.temp_c} c</th>
                            <th>humidity level: {this.state.humid_pct}%</th>
                          </tr>
                        </tbody>
                      </table>
                      <p>{this.state.time}</p>
  								</div>
  			 			<script src='./bundle.js' />
  					   </body>
  					</html>
  			);
  	}
  };
