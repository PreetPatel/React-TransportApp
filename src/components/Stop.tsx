import * as React from 'react'
import Titles from './Titles';


interface IProps {
    location: any,
}

class Stop extends React.Component<IProps> {

    public state = {
        activeStop: [],
        routes: []
    }

    public componentDidMount = async () => {

        const title = this.props.location.state.stop;
        const apiCall = await fetch(`https://api.at.govt.nz/v2/gtfs/routes/stopid/${title}`, {
            headers: {
                "Ocp-Apim-Subscription-Key": "8a84d5abf14c4875aada70cdb84acf2f"
            }
        });
        const data = await apiCall.json();
        this.setState({
            routes: data.response
        })
        console.log(data)
    }

    public render() {
        return (
            <div>
                <Titles/>
                <div className="container">
                    <div className="row">
                        <table className="table table-hover table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Bus Number</th>
                                    <th scope="col">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.routes.map((route: any) => {
                                    if (route.route_short_name === "OUT" || route.route_short_name === "SKY") {
                                    return (
                                        <tr key="route.route_id">
                                            <th className="text-danger">{route.route_short_name}</th>
                                            <th >{route.route_long_name}</th>
                                        </tr>
                                    )
                                    } else if (route.route_short_name === "INN") {
                                        return (
                                            <tr key="route.route_id">
                                                <th className="text-success">{route.route_short_name}</th>
                                                <th >{route.route_long_name}</th>
                                            </tr>
                                        )
                                    } else {
                                        return (
                                            <tr key="route.route_id">
                                                <th  className="text-primary">{route.route_short_name}</th>
                                                <th >{route.route_long_name}</th>
                                            </tr>
                                        )
                                    }
                                })}
                            </tbody>
                        </table>
                     </div>
                </div> 
            </div>
        );
    }
}

export default Stop;