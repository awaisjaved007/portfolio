import React, { Component } from "react";
import Projects from "./components/Projects";
import Profile from "./assets/profile.png";
import SocialProfiles from "./components/SocialProfiles";
import Title from "./components/Title";


class App extends Component {
  state = { stateBio: false };

  showMoreOrLess = () => {
    this.setState({ stateBio: !this.state.stateBio });
  };

  render() {
    return (
      <div>
        <h1>Portfolio</h1>

        <img src={Profile} alt="Profile" className="profile" />

        <p>This is Muhammad Awais Javed</p>
        {this.state.stateBio ? <Title /> : null}
        <p>I am looking forward to work on SAAS applications.</p>
        {this.state.stateBio ? (
          <div>
            <p>My hobby is reading novels. I play cricket as well.</p>
            <p>I love to code daily and try to improve my coding standards.</p>
            <p>Thank You.</p>

            <button onClick={this.showMoreOrLess}> Show less </button>
          </div>
        ) : (
          <button onClick={this.showMoreOrLess}> Show More </button>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;