import React from 'react';
import Navbar from './navbar';
import LandingPage from './landingpage';
import ProfilePage from './profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'landingpage'
    }
    this.changeView = this.changeView.bind(this);
  }

  render() {
    const view = this.state.view;
    const renderView =
      view === 'landingpage' ? <LandingPage /> : (
        view === 'profile' ? <ProfilePage /> : null
      )
    return (
      <div>
        <Navbar setView={this.changeView} />
        {renderView}
      </div>
    )
  }
  changeView(view) {
    this.setState({ view })
  }
}

export default App;
