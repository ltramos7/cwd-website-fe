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

    returnHeadCard = () => {
        const blog = this.state.card

        function getCategories(categories){
            return categories.map(category => {
                return(
                    <button className='blog-detail__head-btn'>{ category }</button>
                )
            })
        }

        return(
            <div className='blog-detail__head'>
                <h1 className='blog-detail__head-title'>{ blog.title }</h1>
                <div className='blog-detail__head-btns'>
                    { getCategories(blog.categories) }
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.setBlogDetailState(this.props.history.location.pathname.split('/')[2])
    }

    render(){
        return(
            <section className='blog-detail'>

                { this.state.set ? this.returnHeadCard() : <p>Loading...</p>}

            </section>
        )
    }
}

export default BlogDetail