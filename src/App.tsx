import * as React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Stops from './components/Stops';

class App extends React.Component {

  public state = {
    stops: [],
    MY_API_KEY : "AIzaSyB41NPGsscTkRIKF-fJOpid45xDYU_2kAc"

  }


  public stopAPI = async (latitude: any, longitude: any) => {
    const apiCall = await fetch(`https://waka.app/a/nz-akl/station/search?lat=${latitude}&lon=${longitude}&distance=200`);
    const data = await apiCall.json();
    if (data.length === 0) {
      this.setState({
        error: true
      })
    } else {
      this.setState({
        stops: data
      })
    }
  }

  public componentDidMount = () => {
    const json = localStorage.getItem("stops");
    if (json !== null) {
      const stops = JSON.parse(json);
      this.setState({ stops })
    }
  }

  public componentDidUpdate = () => {
    const stops = JSON.stringify(this.state.stops);
    localStorage.setItem("stops", stops);
  }
  

  public render() {
    return (
      <div>
        <Titles />
        <Form stopAPI={this.stopAPI} 
        MY_API_KEY={this.state.MY_API_KEY}/>
        <Stops stops={this.state.stops} 
        MY_API_KEY={this.state.MY_API_KEY}/>
      </div>
    );
  }

}

export default App;
