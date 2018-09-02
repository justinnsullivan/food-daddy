import React from 'react';
import Helmet from 'react-helmet'
import Link from 'gatsby-link';

import './index.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Template extends React.Component {
    render() {
        const { location, children } = this.props;
        let header;

        let rootPath = `/`;
        if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
            rootPath = __PATH_PREFIX__ + `/`;
        }

        return (
            <div className="container">
                <Header />
                <Helmet title="🌶 FOOD DADDY 🌶" />
                {children()}
                <Footer />
            </div>
        );
    }
}

export default Template;
