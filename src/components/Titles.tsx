import * as React from "react";
import { Link } from "react-router-dom";

class Titles extends React.Component {
    public render() {
        return (
            <div>
                <header className="App-header">
                    <h2 className="App-title"><Link to={{ pathname: `/` }} style={{textDecoration: 'none', }}>Auckland Bus Stop Finder</Link></h2>
                </header>
            </div>
        );
    }
}

export default Titles;