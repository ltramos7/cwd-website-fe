import React from 'react';

class Navigation extends React.Component{
    render(){
        return(
            <header>
                <ul className='nav-ul'>
                    <li className='nav-li'>
                        <a href='/'>
                            CWD
                        </a>
                    </li>
                    <li className='nav-li'>
                        <a href='/about'>
                            ABOUT
                        </a>
                    </li>
                    <li className='nav-li'>
                        <a href='/work'>
                            WORK
                        </a>
                    </li>
                    <li className='nav-li'>
                        <a href='/blog'>
                            BLOG
                        </a>
                    </li>
                    <li className='nav-li'>
                        <a href='/contact'>
                            CONTACT
                        </a>
                    </li>
                </ul>
            </header>

        )
    }
}

export default Navigation;