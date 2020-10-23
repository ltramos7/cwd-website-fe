import React from 'react';

class Navigation extends React.Component{
    render(){
        return(
            <nav>
                <ul className='main-nav'>
                    <li>
                        <a className='logo' href='/'>
                            CWD
                        </a>
                    </li>

                    <li className='push'>
                        <a href='/about'>
                            ABOUT
                        </a>
                    </li>

                    <li>
                        <a href='/work'>
                            WORK
                        </a>
                    </li>

                    <li>
                        <a href='/blog'>
                            BLOG
                        </a>
                    </li>

                    <li>
                        <a href='/contact'>
                            CONTACT
                        </a>
                    </li>
                </ul>
                <hr className='nav-line' />
            </nav>

        )
    }
}

export default Navigation;
