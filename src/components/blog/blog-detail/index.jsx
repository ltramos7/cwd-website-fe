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
                    <a href={website} target='_blank'> { website }</a>
                </div>
            )
        }

        function getMainContent(contentList){
            let updatedContent = contentList.map(content => {
                return(
                    <p>{ content }</p>
                )
            })

            updatedContent.pop()

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

    returnImages = () => {
        const blog = this.state.card
        let updatedImages = blog.images.map(img => {
            return(
                <img className='blog-detail__images-img' src={require(`../blog-data/blog-images/${img}`)} placeholder='images' />
            )
        })
        
        return(
            <div className='blog-detail__images'>
                { updatedImages }
            </div>
        )
    }

    returnLastContent = () => {
        const blog = this.state.card
        const blogLastInd = blog.content.length - 1

        return (
            <div className='blog-detail__last-content'>
                <p></p>
                <p>{ blog.content[blogLastInd] }</p>
            </div>
        )
    }

    returnLastImage = () => {
        const blog = this.state.card

        return(
            <div className='blog-detail__last-image'>
                <img src={require(`../blog-data/blog-images/${blog.closingImage}`)} placeholder='closing-image' />
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

                { this.state.set ? this.returnImages() : null }

                { this.state.set ? this.returnLastContent() : null }

                { this.state.set ? this.returnLastImage() : null }

            </section>
        )
    }
}

export default BlogDetail