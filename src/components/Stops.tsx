import * as React from "react";
import GoogleMapReact from 'google-map-react';


import { Link } from "react-router-dom"

interface IProps {
    stops: any,
    MY_API_KEY: any
}


class Stops extends React.Component<IProps> {

    public render() {
        return (
            <div className="spacer-stops">
                <div className="container">
                    <div className="row">
                        {this.props.stops.map((stop: any) => {
                            const defaultProps = {
                                center: {
                                    lat: stop.stop_lat,
                                    lng: stop.stop_lon
                                },
                                zoom: 19
                            };
                            if (stop.route_type === 3) {
                                return (
                                    <div className="col-md-4" key={stop.stop_id} style={{ marginBottom: "2rem" }}>
                                        <div className="recipes__box">
                                            <div className="recipe__box-img" style={{ height: '50vh', width: '100%' }}>
                                                <GoogleMapReact
                                                    bootstrapURLKeys={{ key: this.props.MY_API_KEY }}
                                                    defaultCenter={defaultProps.center}
                                                    defaultZoom={defaultProps.zoom}
                                                />
                                            </div>

                                            <div className="recipe__text">
                                                <h5 className="recipes__title">
                                                    {stop.stop_name.length < 20 ? `${stop.stop_name}` : `${stop.stop_name.substring(0, 35)}...`}
                                                </h5>
                                            </div>

                                            <button className="recipe_buttons">
                                                <Link to={{
                                                    pathname: `/stop/${stop.stop_id}`,
                                                    state: { stop: stop.stop_id }
                                                }}>View Station Times</Link>
                                            </button>
                                        </div>
                                    </div>

                                )
                            } else {
                                return (
                                    <div key={stop.stop_id} />
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Stops;