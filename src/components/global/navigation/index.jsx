import React from 'react';

class Navigation extends React.Component{

    checkWindowWidthNav = () => {
        if (window.innerWidth > 550){
            return(
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
            )
        } else {
            return(
                <div>NOTHING</div>
            )
        }
    }

    render(){
        return(
            <nav>
                { this.checkWindowWidthNav() }
            </nav>

        )
    }
}

export default Navigation;
