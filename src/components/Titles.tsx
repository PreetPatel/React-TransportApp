import * as React from "react";
import { Link } from "react-router-dom";

class Titles extends React.Component {
    public render() {
        return (
            <div>
                <header className="App-header">
                    <div className="App">
                        <Link className="App-title" to={{ pathname: `/` }} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>AUCKLAND STOPS</Link>
                    </div>
                </header>
            </div>
        );
    }
}

export default Titles;