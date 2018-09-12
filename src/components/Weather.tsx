import * as React from "react";

interface IProps {
    temprature: any,
    city: any,
    country: any,
    humidity: any,
    description: any,
    error: any
}

class Weather extends React.Component <IProps> {

    public render() {
        return(
            <div>
                { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p> }
                { this.props.temprature && <p>Temprature: {this.props.temprature}</p> }
                { this.props.humidity && <p>Humidity: {this.props.humidity}</p> }
                { this.props.description && <p>Conditions: {this.props.description}</p> }
                { this.props.error && <p>{this.props.error}</p>}
            </div>
        );
    }
}

export default Weather;