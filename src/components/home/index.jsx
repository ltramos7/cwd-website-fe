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
            </section>
        )
    }
}

export default Home;