import React, {Component, PropTypes} from 'react';

import TopBarComponent from './topbar/components';

class BaseComponent extends Component {

    render() {
        return (
            <div>
                <TopBarComponent />
                {this.props.children}
            </div>
        );
    }
}

BaseComponent.PropTypes = {
    children: PropTypes.element.isRequired
};

export default BaseComponent;