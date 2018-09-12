import * as React from "react";

interface IProps {
    getWeather: any
}
class Form extends React.Component <IProps> {
    public render() {
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City"/>
                <input type="text" name="country" placeholder="Country"/>
                <button>Get Weather</button>
            </form>
        );
    }
}

export default Form;