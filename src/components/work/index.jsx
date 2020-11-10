import React from 'react';
import { WorkstudyData } from './workstudy-detail/workstudy-data/index.js'

class Work extends React.Component{
    constructor(){
        super()
        this.state = {
            set: false,
            workstudyData: null
        }
    }

    setWorkstudyDataState = () => {
        this.setState({
            ...this.state,
            set: true,
            workstudyData: WorkstudyData
        })
    }

    showcaseWorkstudies = () => {
        return this.state.workstudyData.map(card => {
            return(
                <div className='work__cards-display-card'>
                    <img src={require(`./workstudy-detail/workstudy-data/workstudy-images/${card.mainImage}`)} alt='showcase-placeholder' />
                    <p>{ this.filterTags(card.categories) }</p>
                    <h1>{ card.title }</h1>
                </div>
            )
        })
    }

    filterTags = tags => {
        return tags.join(', ')
    }

    componentDidMount(){
        this.setWorkstudyDataState()
    }

    render(){
        return(
            <section className='work'>
                
                <div className='work__heading'>
                    <div className='work__heading-text'>
                        <h1>UX and UI case studies</h1>
                        <p>A few projects that we've poured our hearts into</p>
                    </div>
                    <div>
                        <img className='work__heading-img' src={require(`./images/minimal-placeholder.jpg`)} alt='placeholder' />
                    </div>
                </div>

                <div>
                    <ul className='work__design-topics'>
                        <li>
                            <a>UX/UI Design</a>
                        </li>
                        <li>
                            <a>UX/UI Design</a>
                        </li>
                        <li>
                            <a>UX/UI Design</a>
                        </li>
                        <li>
                            <a>UX/UI Design</a>
                        </li>
                    </ul>
                </div>

                <div className='work__cards-display'>
                    { this.state.set ? this.showcaseWorkstudies() : <p>Loading...</p> }
                </div>

                
            </section>
        )
    }
}

export default Work;

