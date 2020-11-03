import React from 'react';
import { WorkstudyData } from '../workstudy-detail/workstudy-data/index';

class WorkstudyDetail extends React.Component {
    constructor(){
        super()
        this.state = {
            set: false,
            workstudy: null
        }
    }

    setWorkstudyDetailState = (id) => {
        let retrievedWorkstudy = WorkstudyData.find(study => study.id == id)

        this.setState({
            ...this.state,
            set: true,
            workstudy: retrievedWorkstudy
        })
    }

    returnHeadCard = () => {
        const workstudy = this.state.workstudy

        function getCategories(categories){
            return categories.map(category => {
                return(
                    <button className='blog-detail__head-btn'>{ category }</button>
                )
            })
        }

        return(
            <div className='blog-detail__head'>
                <h1 className='blog-detail__head-title'>{ workstudy.title }</h1>
                <div className='blog-detail__head-btns'>
                    { getCategories(workstudy.categories) }
                </div>
            </div>
        )
    }

    returnHeadImg = () => {
        const workstudy = this.state.workstudy

        return(
            <div className='blog-detail__main-image'>
                <img src={require(`../workstudy-detail/workstudy-data/workstudy-images/${workstudy.mainImage}`)} placeholder='main-image' />
            </div>
        )
    }

    returnMainContent = () => {
        const workstudy = this.state.workstudy

        function getSideBarInfo(team, website, client){
            let updatedTeam = team.join(', ')

            return(
                <div className='blog-detail__main-content-side'>
                    <h1>Client</h1>
                    <p>{ client }</p>
                    <h1>Team</h1>
                    <p>{ updatedTeam }</p>
                    <h1>Website</h1>
                    <a href={website} target='_blank'>{ website }</a>
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
                { getSideBarInfo(workstudy.teamMembers, workstudy.website, workstudy.client) }

                { getMainContent(workstudy.content) }
            </div>
        )
    }

    returnImages = () => {
        const workstudy = this.state.workstudy

        let updatedImages = workstudy.images.map(img => {
            return(
                <img className='blog-detail__images-img' src={require(`../workstudy-detail/workstudy-data/workstudy-images/${img}`)} placeholder='images' />
            )
        })

        return(
            <div className='blog-detail__images'>
                { updatedImages }
            </div>
        )
    }

    returnLastContent = () => {
        const workstudy = this.state.workstudy
        const workstudyLastInd = workstudy.content.length - 1

        return (
            <div className='blog-detail__last-content'>
                <p></p>
                <p>{ workstudy.content[workstudyLastInd] }</p>
            </div>
        )
    }

    returnLastImage = () => {
        const workstudy = this.state.workstudy

        return(
            <div className='blog-detail__last-image'>
                <img src={require(`../workstudy-detail/workstudy-data/workstudy-images/${workstudy.closingImage}`)} placeholder='closing-image' />
            </div>
        )
    }

    componentDidMount(){
        this.setWorkstudyDetailState(this.props.history.location.pathname.split('/')[2])
    }

    render(){
        return(
            <section className='workstudy-detail'>
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

export default WorkstudyDetail