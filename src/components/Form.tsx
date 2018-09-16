import * as React from "react";
import GoogleMapLoader from "react-google-maps-loader"
import GooglePlacesSuggest from "react-google-places-suggest"

// const MY_API_KEY = "AIzaSyB41NPGsscTkRIKF-fJOpid45xDYU_2kAc"

interface IProps {
    stopAPI: any
    MY_API_KEY: any
}
class Form extends React.Component<IProps> {
    public state = {
        search: "",
        value: ""
    }

    public handleInputChange = (e: any) => {
        this.setState({ search: e.target.value, value: e.target.value })
        localStorage.clear()
    }

    public handleSelectSuggest = (geocodedPrediction: any, originalPrediction: any) => {
        this.props.stopAPI(geocodedPrediction.geometry.location.lat(), geocodedPrediction.geometry.location.lng())
        this.setState({ search: "", value: geocodedPrediction.formatted_address })
    }

    public render() {
        const { search, value } = this.state
        return (
            <div className="container">
                <div className="row">
                    <GoogleMapLoader
                        params={{
                            key: this.props.MY_API_KEY,
                            libraries: "places,geocode",
                        }}
                        render={googleMaps =>
                            googleMaps && (
                                <GooglePlacesSuggest
                                    googleMaps={googleMaps}
                                    autocompletionRequest={{
                                        input: search,

                                    }}
                                    // Optional props
                                    onSelectSuggest={this.handleSelectSuggest}
                                    textNoResults="Location Not Found"
                                    customRender={prediction => (
                                        <div className="customWrapper">
                                            {prediction
                                                ? prediction.description
                                                : "Location Not Found"}
                                        </div>
                                    )}
                                >

                                    <input
                                        className="form-control"
                                        type="text"
                                        value={value}
                                        placeholder="Enter an address in Auckland to see the nearest stops"
                                        onChange={this.handleInputChange}
                                    />

                                </GooglePlacesSuggest>
                            )
                        }

                    />
                </div>
            </div>
        )
    }

}

export default Form;