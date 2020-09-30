import React from 'react';

class Blog extends React.Component{
    render(){
        return(
            <section className='blog-feed'>
                <h1 className='blog-feed__main-header'>BLOG</h1>

                <div className='blog-feed__container'>
                    <div className='blog-feed__container-right'>
                        <div className='blog-feed__card'>
                            <img className='blog-feed__container-img' src={require(`./images/square-fill.jpg`)} alt='placeholder' />
                            <p className='blog-feed__title'>Blog Post Title</p>
                            <p className='blog-feed__written'>Written by David Pinedo on May 25, 2020</p>
                        </div>

                        <div className='blog-feed__card'>
                            <img className='blog-feed__container-img' src={require(`./images/square-fill.jpg`)} alt='placeholder' />
                            <p className='blog-feed__title'>Blog Post Title</p>
                            <p className='blog-feed__written'>Written by David Pinedo on May 25, 2020</p>
                        </div>
                    </div>
                    
                    <div className='blog-feed__container-right'>
                        <div className='blog-feed__card'>
                            <img className='blog-feed__container-img' src={require(`./images/square-fill.jpg`)} alt='placeholder' />
                            <p className='blog-feed__title'>Blog Post Title</p>
                            <p className='blog-feed__written'>Written by David Pinedo on May 25, 2020</p>
                        </div>

                        <div className='blog-feed__card'>
                            <img className='blog-feed__container-img' src={require(`./images/square-fill.jpg`)} alt='placeholder' />
                            <p className='blog-feed__title'>Blog Post Title</p>
                            <p className='blog-feed__written'>Written by David Pinedo on May 25, 2020</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Blog;