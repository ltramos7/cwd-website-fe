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

    componentDidMount(){
        this.setWorkstudyDetailState(this.props.history.location.pathname.split('/')[2])
    }

    render(){
        return(
            <section className='workstudy-detail'>
                { this.state.set ? this.returnHeadCard() : <p>Loading...</p>}

                {/* { this.state.set ? this.returnHeadImg() : null }

                { this.state.set ? this.returnMainContent() : null }

                { this.state.set ? this.returnImages() : null }

                { this.state.set ? this.returnLastContent() : null }

                { this.state.set ? this.returnLastImage() : null } */}
                
            </section>
        )
    }
}

export default WorkstudyDetail