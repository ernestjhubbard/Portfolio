import React from 'react';

class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: 0,
      messages: 0,
      greeting: '',
      name: 'Senpai',
      xIsClicked: false
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  render() {
    console.log(this.props);
    return (
      <div className="row sidebar p-right col s10 offset-s2 grey lighten-4 no-pad overflowhidden">
        <div className="row m-0 p-top">
          <h4 className="red-text m-0 col s12">
            <i class="material-icons medium" onClick={this.props.clickHandler}>close</i>
          </h4>
          <h4 className="red-text m-0 col s12">______________________</h4>
          <div class="col s8 center-align offset-s2 container mt-1">
            <img src="/images/1044633.jpg" alt="" class="circle responsive-img"></img>
          </div>
          <h6 className="col s12 center">Welcome Back, {this.state.name}</h6>
        </div>
        <div className="menu mt-1">
          <h5 className="menutext red-text" onClick={() => { this.props.setView('profile'); this.props.clickHandler(); }}>View Profile</h5>
          <h5 className="menutext red-text">Account Settings</h5>
          <h5 className="menutext red-text">Past Adventures</h5>
          <h5 className="menutext red-text">View Friends</h5>
          <h5 className="menutext red-text">Read Messages</h5>
        </div>
      </div>
    )
  }
  clickHandler() {
    console.log('clicked');
  }
}

export default Sidenav;