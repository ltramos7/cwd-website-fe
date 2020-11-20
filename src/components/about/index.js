import React from 'react';

class About extends React.Component{
    constructor(){
        super()
        this.state = {
            set: false
        }
    }

    render(){
        return(
            <section className='about'>
                <div className='about__header'>
                    <div className='about__header-text'>
                        <h1>In the City of Wind, we wear windbreakers</h1>
                        <p>City of Wind Design seeks to tackle really tough business problems through our inclusive human-centered design approach. Our design experts strive to grow our clients business with delightful and seamless experiences the same way we build and launch innovative in-house products—with intentional and empathetic mindsets.</p>
                    </div>

                    <div className='about__header-img'>
                        <img src={require(`./images/minimal-placeholder.jpg`)} placeholder='placeholder img' />
                    </div>
                </div>
            </section>
        )
    }
}

export default About;