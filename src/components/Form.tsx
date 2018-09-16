import * as React from "react";
import GoogleMapLoader from "react-google-maps-loader"
import GooglePlacesSuggest from "react-google-places-suggest"

const MY_API_KEY = "AIzaSyD750duKYXMWkgZfSDWG3e3w0YxFU1AXIY"

interface IProps {
    stopAPI: any
}
class Form extends React.Component<IProps> {
    public state = {
        search: "",
        value: ""
    }

    public handleInputChange = (e: any) => {
        this.setState({ search: e.target.value, value: e.target.value })
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
                            key: MY_API_KEY,
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
                                    textNoResults="Location Not Found" // null or "" if you want to disable the no results item
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
                                        placeholder="Search a location"
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