import React from 'react'
import { BlogData } from '../blog-data/index'

class BlogDetail extends React.Component {
    constructor(){
        super()
        this.state = {
            set: false,
            card: []
        }
    }

    componentDidMount(){
        console.log(BlogData)
        console.log(this.props.history.location.pathname)
    }

    render(){
        return(
            <section>
                BLOG DETAIL

                { this.state.set ? <p>SET</p> : <p>Loading...</p>}

            </section>
        )
    }
}

export default BlogDetail