import React from "react";
import axios from "./axios";

export default class Welcome extends React.Component {
    componentDidMount() {
        axios.get("/getbigfile").then(data => {
            console.log({ data }, "this data");
        });
    }

    render() {
        return (
            <div>
                <div id="titleofthepage">
                    <h1>Orphei hymnorum epitheta</h1>
                </div>
            </div>
        );
    }
}
