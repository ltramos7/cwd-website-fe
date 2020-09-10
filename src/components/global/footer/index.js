import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <ul className='top-footer'>
                    <li >
                        <a className='footer-logo'>
                            CWD
                        </a>
                    </li>
                    <li>
                        <a>
                            Work
                        </a>
                    </li>
                    <li>
                        <a>
                            Services
                        </a>
                    </li>
                    <li>
                        <a>
                            Career
                        </a>
                    </li>
                    <li>
                        <a>
                            About
                        </a>
                    </li>
                    <li>
                        <a>
                            Contact
                        </a>
                    </li>
                    <li className='push'>
                        <a>
                            0
                        </a>
                    </li>
                    <li>
                        <a>
                            0
                        </a>
                    </li>
                    <li>
                        <a>
                            0
                        </a>
                    </li>
                </ul>

                <hr className='footer-line' />
                
                <ul className='bottom-footer'>
                    <li>
                        <a>
                            Terms & Conditions
                        </a>
                    </li>
                    <li>
                        <a>
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a>
                            FAQ
                        </a>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Footer;