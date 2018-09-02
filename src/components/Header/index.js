import React from 'react';
import Link from 'gatsby-link';

import './Header.scss';

class Header extends React.Component {
    render() {
        let lines = [];
        for (let i = 0; i < 23; i++) {
            lines.push(
                <div className="patternline" key={`patternline-${i}`} />
            );
        }
        return (
            <div className="header">
                <h1>
                    <Link to={'/'}>FOOD DADDY</Link>
                </h1>
                {lines}
                <div className="links">
                    <Link to={'/about'}>about</Link>
                    <a href={'https://www.instagram.com/food__daddy'}>gram</a>
                </div>
            </div>
        );
    }
}

export default Header;
