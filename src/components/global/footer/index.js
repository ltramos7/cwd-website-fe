import React from 'react';
import { withRouter } from 'react-router-dom'

class Footer extends React.Component{

    viewContactUs = () => {
        window.location.href = 'http://localhost:3000/contact'
    }

    render(){
        return(
            <footer className='footer'>
                <div className='footer__head'>
                    <div className='footer__head-text'>
                        <h1>Have a Project Need?</h1>
                        <button onClick={this.viewContactUs} className='footer__head-button'>Let's work together -></button>
                    </div>
                    <div className='footer__head-img'>
                        <img src={require(`./images/minimal-placeholder.jpg`)} alt='placeholder-image' />
                    </div>
                </div>

                <div className='footer__sub'>
                    <div className='footer__sub-text'>
                        <p className='footer__sub-text-logo'>LOGO</p>
                        <p className='footer__sub-text-description'>City of Wind is a design studio that specializes in UX Design and Software Development for startups</p>
                        <p className='footer__sub-text-copyright'>&copy; City of Wind Design 2020</p>
                    </div>

                    <div className='footer__sub-project'>
                        <ul className='footer__sub-project-list'>
                            <p className='footer__sub-project-list-title'>Have a project for us?</p>
                            <li>User Research</li>
                            <li>Prototype a concept</li>
                            <li>Ideate & Test a new product</li>
                            <li>Improve an existing product</li>
                        </ul>
                    </div>

                    <div className='footer__sub-site-map'>
                        <ul className='footer__sub-site-map-list'>
                            <p className='footer__sub-site-map-list-title'>Site Map</p>
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