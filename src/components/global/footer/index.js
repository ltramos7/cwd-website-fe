import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <footer className='footer'>
                <div className='footer__head'>
                    <div className='footer__head-text'>
                        <h1>Have a Project Need?</h1>
                        <button>Let's work together -></button>
                    </div>
                    <div className='footer__head-img'>
                        <img src={require(`./images/minimal-placeholder.jpg`)} alt='placeholder-image' />
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;