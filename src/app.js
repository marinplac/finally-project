import React from "react";
import axios from "./axios";

// import { BrowserRouter, Route } from "react-router-dom";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    componentDidMount() {
        axios.get("/user").then(({ data }) => {
            console.log(data);
            this.setState(data);
        });
    }

    }
    render() {
        if (!this.state.id) {
            return (

            );
        }
        return (
            <div>

            </div>
        );
    }
