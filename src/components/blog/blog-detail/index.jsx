import React from 'react'
import { BlogData } from '../blog-data/index'

class BlogDetail extends React.Component {
    constructor(){
        super()
        this.state = {
            set: false,
            card: null
        }
    }

    setBlogDetailState = (id) => {
        let retrievedBlog = BlogData.find(blog => blog.id == id)

        this.setState({
            ...this.state,
            set: true,
            card: retrievedBlog
        })
    }

    componentDidMount(){
        this.setBlogDetailState(this.props.history.location.pathname.split('/')[2])
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