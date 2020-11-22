import React from 'react';

class About extends React.Component{
    constructor(){
        super()
        this.state = {
            set: false
        }
    }

    getTeammates = () => {
        const name = "Joe Dart"
        const title = "Co-Founder & Lead UX Designer"

        let team = []

        for(let i = 16; i !== 0; i--){
            team.push(
                <div className='about__team-mate'>
                    <img src={require(`./images/square-fill.jpg`)} />
                    <h1>{name}</h1>
                    <p>{title}</p>
                </div>
            )
        }

        return team
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

                <div>
                    <h1 className='about__we-do'>What we do</h1>
                </div>

                <div className='about__categories'>
                    <div className='about__categories-card'>
                        <img src={require(`./images/square-fill.jpg`)} placeholder='square fill' />
                        <h1>Strategy & Organization</h1>
                        <p>lorem ipsum dolor sit amet, consectur adiscping elit.</p> 
                    </div>
                    <div className='about__categories-card'>
                        <img src={require(`./images/square-fill.jpg`)} placeholder='square fill' />
                        <h1>Strategy & Organization</h1>
                        <p>lorem ipsum dolor sit amet, consectur adiscping elit.</p> 
                    </div>
                    <div className='about__categories-card'>
                        <img src={require(`./images/square-fill.jpg`)} placeholder='square fill' />
                        <h1>Strategy & Organization</h1>
                        <p>lorem ipsum dolor sit amet, consectur adiscping elit.</p> 
                    </div>
                    <div className='about__categories-card'>
                        <img src={require(`./images/square-fill.jpg`)} placeholder='square fill' />
                        <h1>Strategy & Organization</h1>
                        <p>lorem ipsum dolor sit amet, consectur adiscping elit.</p> 
                    </div>
                </div>
                
                <div className='about__our-team'>
                    <h1>Our Team</h1>
                    <p>Hailing from the windy city of Chicago, urban scenic NewYork, to the rain-filled coasts of Vancouver, the team at City of Wind works tirelessly to deliver you the best experiences and services.</p>
                </div>

                <div className='about__team'>
                    { this.getTeammates() }
                </div>
            </section>
        )
    }
}

export default About;