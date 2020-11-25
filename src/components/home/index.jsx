import React from 'react';
import { WorkstudyData } from '../work/workstudy-detail/workstudy-data/index.js'

class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            workstudyData: WorkstudyData
        }
    }

    fakeMethod = () => {
        const reason = 'just checking if i solved my contribution error'
    }

    setWorkstudyCards = () => {
        return this.state.workstudyData.map((study, ind) => {
            if (ind % 2 === 0){
                return(
                    <div key={study.id} className='home__workstudies-left'>
                        <div className='home__workstudies-left-text'>
                            <p className='home__workstudies-left-text-categories'>{ this.filterCategories(study.categories) }</p>
                            <p className='home__workstudies-left-text-title'>{ study.title }</p>
                            <p className='home__workstudies-left-text-content'>{ this.snipContent(study.content[0]) }</p>
                            <button onClick={ () => this.viewCaseStudy(study.id) }>View Case Study -></button>
                        </div>
                        <div className='home__workstudies-left-img'>
                            <img src={require(`../work/workstudy-detail/workstudy-data/workstudy-images/${study.mainImage}`)} placeholder='main image' />
                        </div>
                    </div>
                )
            } else {
                return(
                    <div key={study.id} className='home__workstudies-right'>
                        <div className='home__workstudies-right-img'>
                            <img src={require(`../work/workstudy-detail/workstudy-data/workstudy-images/${study.mainImage}`)} placeholder='main image' />
                        </div>
                        <div className='home__workstudies-right-text'>
                            <p className='home__workstudies-right-text-categories'>{ this.filterCategories(study.categories) }</p>
                            <p className='home__workstudies-right-text-title'>{ study.title }</p>
                            <p className='home__workstudies-right-text-content'>{ this.snipContent(study.content[0]) }</p>
                            <button onClick={ () => this.viewCaseStudy(study.id) }>View Case Study -></button>
                        </div>
                    </div>
                )
            }
        })
    }

    filterCategories = categories => {
        return categories.join(', ')
    }

    snipContent = content => {
        let snipped = content.split(' ')
        snipped = snipped.splice(0, 30)
        snipped = snipped.join(' ')
        return snipped
    }

    viewCaseStudy = id => {
        this.props.history.push(`/workstudy/${id}`)
    }

    viewContactUs = () => {
        window.location.href = 'http://localhost:3000/contact'
    }

    render(){
        return(
            <section className='home'>
                <div className='home__header'>
                    <div className='home__header-text'>
                        <h1>City of Wind Design</h1>
                        <p>We are a design agency that specializes in baking in human centric design for starups. We prioritize inclusitivy and accessibility in our design practices.</p>
                        <div className='home__header-btns'>
                            <button onClick={this.viewContactUs} className='home__header-btns-clear'>Work with us -></button>
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

                <div className='home__workstudies'>
                    { this.setWorkstudyCards() }
                </div>
            </section>
        )
    }
}

export default Home;