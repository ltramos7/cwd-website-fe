import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <footer className='footer'>
                <div className='footer__head'>
                    <div className='footer__head-text'>
                        <h1>Have a Project Need?</h1>
                        <button className='footer__head-button'>Let's work together -></button>
                    </div>
                    <div className='footer__head-img'>
                        <img src={require(`./images/minimal-placeholder.jpg`)} alt='placeholder-image' />
                    </div>
                </div>

                <div className='footer__sub'>
                    <div className='footer__sub-text'>
                        <p>LOGO</p>
                        <p>City of Wind is a design studio that specializes in UX Design and Software Development for startups</p>
                        <p>&copy; City of Wind Design 2020</p>
                    </div>

                    <div className='footer__sub-project'>
                        <ul className='footer__sub-project-list'>
                            <p>Have a project for us?</p>
                            <li>User Research</li>
                            <li>Prototype a concept</li>
                            <li>Ideate & Test a new product</li>
                            <li>Improve an existing product</li>
                        </ul>
                    </div>

                    <div className='footer__sub-site-map'>
                        <ul className='footer__sub-site-map-list'>
                            <p>Site Map</p>
                            <li>About</li>
                            <li>Works</li>
                            <li>Blog</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;