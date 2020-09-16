import React from 'react';

class Home extends React.Component{
    render(){
        return(
            <div className='home'>
                                
                <div className='intro'>
                    <h1>Better Products, Faster.</h1>
                </div>

                <div className='intro'>
                {/* need to figure out better class name or combine the div above with the one I'm making a comment in. */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim eget tortor mi congue malesuada condimentu</p>
                </div>

                <div className='jumbotron'>
                    <p>I'm guessing an image belongs here.</p>
                </div>

                <div className='hello'>
                    <h1>Hello, Lorem Ipsum sit amet</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim eget tortor mi congue malesuada condimentum sed vulputate. Dictum ipsum condimentum malesuada quisque sit lectus nunc feugiat. Leo, lacus eleifend vitae eget tortor hac habitasse. Lectus consectetur tempor, sit.</p>

                    <p>Check out some of our favourite projects below.</p>
                </div>
               

                
            </div>
        )
    }
}

export default Home;