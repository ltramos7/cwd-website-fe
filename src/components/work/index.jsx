import React from 'react';

class Work extends React.Component{
    constructor(){
        super()
        this.state = {
            showcases: [
                {
                    title: 'Designing a pharmaceutical e-commerce platform',
                    tags: ['UI Development', 'Strategy'],
                    image: './images/minimal-placeholder.jpg'
                },
                {
                    title: 'Designing a pharmaceutical e-commerce platform',
                    tags: ['UI Development', 'Strategy'],
                    image: './images/minimal-placeholder.jpg'
                },
                {
                    title: 'Designing a pharmaceutical e-commerce platform',
                    tags: ['UI Development', 'Strategy'],
                    image: './images/minimal-placeholder.jpg'
                },
                {
                    title: 'Designing a pharmaceutical e-commerce platform',
                    tags: ['UI Development', 'Strategy'],
                    image: './images/minimal-placeholder.jpg'
                },
                {
                    title: 'Designing a pharmaceutical e-commerce platform',
                    tags: ['UI Development', 'Strategy'],
                    image: './images/minimal-placeholder.jpg'
                },
                {
                    title: 'Designing a pharmaceutical e-commerce platform',
                    tags: ['UI Development', 'Strategy'],
                    image: './images/minimal-placeholder.jpg'
                }
            ]
        }
    }

    showcaseCards = () => {
        return this.state.showcases.map(card => {
            return(
                <div className='work__cards-display-card'>
                    <img src={require(`./images/minimal-placeholder.jpg`)} alt='showcase-placeholder' />
                    <p>{ this.filterTags(card.tags) }</p>
                    <h1>{ card.title }</h1>
                </div>
            )
        })
    }

    filterTags = tags => {
        return tags.join(', ')
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
                    { this.showcaseCards() }
                </div>

                
            </section>
        )
    }
}

export default Work;

