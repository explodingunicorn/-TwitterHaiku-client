import React, { Component } from "react";
import { Row } from "components/layout";
import SiteContainer from "containers/siteContainer";
import HaikuCollection from "components/haikuCollection";
import UserBanner from "./banner";
import requests from "requests";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      haikus: []
    };
  }

  componentDidMount() {
    this.getUserData(this.props.match.params.id);
  }

  componentWillReceiveProps(props) {
    this.getUserData(props.match.params.id);
  }

  async getUserData(userId) {
    const response = await requests.haikus.get("user", userId);
    console.log('response recieved');
    console.log(response);
    if (response.haikus) {
      const { user, haikus } = response;
      this.setState({ user, haikus });
    }
  }

  render() {
    const { user, haikus } = this.state;
    const data = haikus.length > 0 ? { haikus } : {};
    return (
      <SiteContainer style={{ paddingTop: "120px" }}>
        <UserBanner user={user} userName={this.props.match.params.id} />
        <Row>
          <HaikuCollection data={data} />
        </Row>
      </SiteContainer>
    );
  }
}

export default User;
