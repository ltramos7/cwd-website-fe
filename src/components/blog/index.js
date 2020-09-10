import React from 'react';

class Blog extends React.Component{
    render(){
        return(
            // need to make the body in the main.scss to include the same website theme such as background color. 
            <body>
                <div className="blog-tiles-container">
                    <img src={require('../../images/chicago-narrow.jpg')}/>
                    <img src={require('../../images/chicago-narrow.jpg')}/>
                    <img src={require('../../images/chicago-narrow.jpg')}/>
                    <img src={require('../../images/chicago-narrow.jpg')}/>

                </div>

            </body>
        )
    }
}

export default Blog;