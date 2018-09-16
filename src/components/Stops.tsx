import * as React from "react";

import { Link } from "react-router-dom"

interface IProps {
    stops: any,
}

class Stops extends React.Component<IProps> {

    public render() {
        console.log(this.props.stops)
        return (
            <div className="container">
                <div className="row">
                    {this.props.stops.map((stop: any) => {
                        if(stop.route_type === 3) {
                        return ( 
                            <div className="col-md-4" key={stop.stop_id} style={{ marginBottom: "2rem" }}>
                                <div className="recipes__box">
                                    <img className="recipe__box-img"
                                        src="https://userscontent2.emaze.com/images/14111162-6402-46a3-bb68-8db864ba192c/55f6aedd-013d-4a04-9a0e-44469b4eff91.jpg"
                                    />

                                    <div className="recipe__text">
                                        <h5 className="recipes__title">
                                            {stop.stop_name.length < 20 ? `${stop.stop_name}` : `${stop.stop_name.substring(0, 35)}...`}
                                        </h5>
                                    </div>

                                    <button className="recipe_buttons">
                                        <Link to={{
                                            pathname: `/stop/${stop.stop_id}`,
                                            state: {stop: stop.stop_id}
                                        }}>View Station Times</Link>
                                    </button>
                                </div>
                            </div>
                            
                        )} else {
                            return (
                                <div key={stop.stop_id}/>
                            )
                        }
                    })}
                </div>
            </div>
        );
    }
}

export default Stops;