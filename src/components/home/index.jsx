import React from 'react';

class Home extends React.Component{
    render(){
        return(
            <section className='home'>
                <div className='home__header'>
                    <div className='home__header-text'>
                        <h1>City of Wind Design</h1>
                        <p>We are a design agency that specializes in baking in human centric design for starups. We prioritize inclusitivy and accessibility in our design practices.</p>
                        <div className='home__header-btns'>
                            <button className='home__header-btns-clear'>Work with us -></button>
                            <button className='home__header-btns-full'>Featured Works \/</button>
                        </div>
                    </div>
                    <div className='home__header-img'>
                        <img src={require(`./images/minimal-placeholder.jpg`)} placeholder='rect fill' />
                    </div> 
                </div>

                <div className='home__what-we-do'>
                    <h1>What we do</h1>
                </div>

                <div className='home__categories'>
                    <div className='home__categories-card'>
                        <img src={require(`./images/square-fill.jpg`)} placeholder='square fill' />
                        <div className='home__categories-card-text'>
                            <p className='home__categories-card-title'>Strategy & Organization</p>
                            <p className='home__categories-card-description'>Lorem ipsum dolor sit amet, consectetur adpiscing elit</p>
                        </div>
                    </div>
                    <div className='home__categories-card'>
                        <img src={require(`./images/square-fill.jpg`)} placeholder='square fill' />
                        <div className='home__categories-card-text'>
                            <p className='home__categories-card-title'>Strategy & Organization</p>
                            <p className='home__categories-card-description'>Lorem ipsum dolor sit amet, consectetur adpiscing elit</p>
                        </div>
                    </div>
                    <div className='home__categories-card'>
                        <img src={require(`./images/square-fill.jpg`)} placeholder='square fill' />
                        <div className='home__categories-card-text'>
                            <p className='home__categories-card-title'>Strategy & Organization</p>
                            <p className='home__categories-card-description'>Lorem ipsum dolor sit amet, consectetur adpiscing elit</p>
                        </div>
                    </div>
                    <div className='home__categories-card'>
                        <img src={require(`./images/square-fill.jpg`)} placeholder='square fill' />
                        <div className='home__categories-card-text'>
                            <p className='home__categories-card-title'>Strategy & Organization</p>
                            <p className='home__categories-card-description'>Lorem ipsum dolor sit amet, consectetur adpiscing elit</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;