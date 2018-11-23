import React from 'react';
import Link from 'gatsby-link';

class Header extends React.Component {
    constructor({
        siteTitle, titles, galleryTitle, contactTitle,
    }) {
        super();
        this.siteTitle = siteTitle;
        this.titles = titles;
        this.galleryTitle = galleryTitle;
        this.contactTitle = contactTitle;
    }

    render() {
        return (
            <div className="header">
                <h1 className="header-title title">
                    <Link to="/">
                        {' '}
                        {this.siteTitle}
                        {' '}
                    </Link>
                </h1>
                {this.titles.map((title, index) => (
                    <a className="header-link" href={`#description-${index}`} key={title}>
                        {title}
                    </a>
                ))}
                <a className="header-link" href="#gallery">
                    {this.galleryTitle}
                </a>
                <a className="header-link" href="#contact">
                    {this.contactTitle}
                </a>
            </div>
        );
    }
}

export default Header;
