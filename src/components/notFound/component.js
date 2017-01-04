import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import TopBarComponent from '../topbar/components';

class NotFoundComponent extends Component {
  render() {
    const handleGoBack = () => {
      browserHistory.goBack();
    };
    return (
      <div >
        <TopBarComponent />
        <div>
          <p>Page not found...</p>
          <a href="" onClick={handleGoBack}>Go back</a>
        </div>
      </div>
    );
  }
}

export default NotFoundComponent;
