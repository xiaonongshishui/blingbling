import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MobileTearSheet extends Component {

    render() {
        const {
            prepareStyles,
        } = this.context.muiTheme;

        const styles = {
            root: {
                marginBottom: 24,
                width: '100%',
                background:'rgba(255,255,255,0.9)'
            },
            container: {
                border: 'solid 1px #d9d9d9',
                borderBottom: 'none',
                height: this.props.height,
                overflow: 'hidden',
            },
            bottomTear: {
                display: 'block',
                position: 'relative',
                marginTop: -10,
                maxWidth: 360,
            },
        };

        return (
            <div style={prepareStyles(styles.root)}>
                <div style={prepareStyles(styles.container)}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

MobileTearSheet.contextTypes = { muiTheme: PropTypes.object };

export default MobileTearSheet;
