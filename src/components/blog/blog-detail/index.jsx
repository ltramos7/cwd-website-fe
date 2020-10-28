import React from 'react'
import { BlogData } from '../blog-data/index'

class BlogDetail extends React.Component {

    componentDidMount(){
        console.log(BlogData)
        console.log(this.props.history.location.pathname)
    }

    render(){
        return(
            <section>
                BLOG DETAIL



            </section>
        )
    }
}

export default BlogDetail