import React from "react";
// import axios from "./axios";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    // componentDidMount() {
    //     axios.get("/user").then(({ data }) => {
    //         console.log(data);
    //         this.setState(data);
    //     });
    // }



    render() {
        if (!this.state.id) {
            return null;
        }
        return (
            <div>

            </div>
        );
    }
}
