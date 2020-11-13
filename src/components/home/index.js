import React from 'react';

class Home extends React.Component{
    render(){
        return(
            <section>
                <div className='home'>
                    <h1 className="home__title">Better Products, Faster.</h1>
                    <p className="home__tagline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim eget tortor mi congue malesuada condimentu</p>
                    <img className="home__wide-image" alt="chicago-wide" src={require("../../images/chicago-wide.jpg")} />
                </div>
            </section>
        )
    }
}

export default Home;