import React from 'react';
import Link from 'gatsby-link';

import './Footer.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="footer">
                <Link to={'/'}>FOOD DADDY</Link> · JT Friedman · Brooklyn NY ·{' '}
                <a href="https://www.instagram.com/food__daddy">Instagram</a>
            </div>
        );
    }
}

export default Header;
