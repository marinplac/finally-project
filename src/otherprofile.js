import React from "react";
import axios from "./axios";
import FriendButton from "./friendbutton";

export default class OtherProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        const self = this;

        axios
            .get("/user/" + id + "/json")
            .then(({ data }) => {
                console.log(data, "this is data from user nr whatever");
                if (data.redirectTo) {
                    this.props.history.push("/");
                } else {
                    this.setState({
                        firstname: data.firstname,
                        lastname: data.lastname,
                        users_image: data.users_image,
                        bio: data.bio,
                        id: data.id
                    });
                }
            })
            .catch(err => {
                console.log(err, "error in getting otheruser");
            });
    }
    render() {
        console.log(this.state);
        return (
            <div id="otherprofile">
                <img id="otherprofilepic" src={this.state.users_image} />
                <div id="nameandsurnameotherprofile">
                    <p>
                        {this.state.firstname} {this.state.lastname}
                    </p>
                </div>
                <p className="otherbio">{this.state.bio}</p>
                <FriendButton recipient_id={this.props.match.params.id} />{" "}
            </div>
        );
    }
}
