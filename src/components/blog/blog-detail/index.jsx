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

    returnHeadImg = () => {
        const blog = this.state.card
        
        return(
            <div className='blog-detail__main-image'>
                <img src={require(`../blog-data/blog-images/${blog.mainImage}`)} placeholder='head image' />
            </div>
        )
    }

    returnMainContent = () => {
        const blog = this.state.card

        function getSideBarInfo(team, website){
            let updatedTeam = team.join(', ')

            return(
                <div className='blog-detail__main-content-side'>
                    <h1>Team</h1>
                    <p>{ updatedTeam }</p>
                    <h1>Website</h1>
                    <p> { website }</p>
                </div>
            )
        }

        function getMainContent(contentList){
            let updatedContent = contentList.map(content => {
                return(
                    <p>{ content }</p>
                )
            })

            return(
                <div className='blog-detail__main-content-center'>
                    { updatedContent }
                </div>
            )
        }

        return(
            <div className='blog-detail__main-content'>
                { getSideBarInfo(blog.teamMembers, blog.website) }

                { getMainContent(blog.content) }
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

                { this.state.set ? this.returnHeadImg() : null }

                { this.state.set ? this.returnMainContent() : null }

            </section>
        )
    }
}

export default BlogDetail