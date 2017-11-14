import React from 'react'
import {connect} from 'react-redux'
import Weather from './index.js'


class WeatherContainer extends React.Component {
  constructor(props){
    super(props)
    this.state={
      day: true,
      sunny: true,
      cloudy: false,
      rain: false,
      location: '',
    }
    this.fetchWeatherData = this.fetchWeatherData.bind(this)
  }

  componentDidMount(){
    this.fetchWeatherData()
  }
  // 43ef96f8feca8b8c3287e084e2bc5d7d

  fetchWeatherData(){
    console.log('fetchWeatherData')
    fetch('https://api.ipify.org/?format=json')
      .then(res => res.json())
      .then(data => fetch(`https://ipinfo.io/${data.ip}/json`))
      .then(res => res.json())
      .then(data => fetch(`http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=257ba9186ca5a3f0b91dbfcb5b678faa`))
      .then(res => res.json())
      .then(info => {
        this.setState({location: info})
      })
  }

// weather?lat=35&lon=139


  // var url = 'http://api.population.io:80/1.0/countries';
  //
  // var result = fetch(url, {
  //     method: 'get',
  //   }).then(function(response) {
  //     return response.json(); // pass the data as promise to next then block
  //   }).then(function(data) {
  //     var countryIndex = Math.floor(Math.random() * data.countries.length);
  //     var country = data.countries[countryIndex]; // get a random country from the returned data
  //
  //     console.log(country);
  //
  //     return fetch('http://api.population.io:80/1.0/population/' + country + '/today-and-tomorrow/'); // make a 2nd request and return a promise
  //   })
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .catch(function(error) {
  //     console.log('Request failed', error)
  //   })
  //
  // I'm using the result variable to show that you can continue to extend the chain from the returned promise
  // result.then(function(r) {
  //   console.log(r); // 2nd request result
  // });













  render(){
    console.log('weather container render')
    return (
      <Weather {...this.state} />
    )
  }
}

let mapStateToProps = (state) => ({

})

let mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer)
