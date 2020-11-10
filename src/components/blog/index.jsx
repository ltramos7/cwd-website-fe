import React from 'react';
import { BlogData } from './blog-data/index.jsx'

class Blog extends React.Component{
    constructor(){
        super()
        this.state = {
            set: false,
            blogData: null
        }
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
                    { this.state.set ? this.showcaseBlogs() : <p>Loading...</p> }
                </div>
            </section>
        )
    }
}

export default Blog;