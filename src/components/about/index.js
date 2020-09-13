import React from 'react';

class About extends React.Component{
    render(){
        return(
            <section className='about'>
                <h1 className='about__main-title'>ABOUT</h1>

                <div className='about__intro'>
                    <h3 className='about__intro-title'>
                        What we believe
                    </h3>
                    <div className='about__intro-info'>
                        <p>
                            viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis
                        </p>
                        <p>
                            viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis
                        </p>
                    </div>
                </div>

                <div>
                    <div className='about__team'>
                        <h3 className='about__team-title'>Our Team</h3>
                        <p>{ '<-- -->' } </p>
                    </div>

                    <div className='about__team'>
                        <div>
                            <img className='about__team-img' src={require(`./images/rocky-wallpaper.jpg`)} alt='placeholder' />
                            <h5 className='about__team-member-name'>Anshika Kala</h5>
                            <p className='about__team-member-job'>Product Designer</p>
                            <p className='about__team-member-phone'>+1 (773) 123-1231</p>
                            <p className='about__team-member-email'>kala.anshika@cwd.com</p>
                        </div>
                        <div>
                            <img className='about__team-img' src={require(`./images/rocky-wallpaper.jpg`)} alt='placeholder' />
                            <h5 className='about__team-member-name'>Anshika Kala</h5>
                            <p className='about__team-member-job'>Product Designer</p>
                            <p className='about__team-member-phone'>+1 (773) 123-1231</p>
                            <p className='about__team-member-email'>kala.anshika@cwd.com</p>
                        </div>
                    </div>
                </div>

                <hr />

                <div>
                    <h3>Services</h3>
                    <div>
                        <div>
                            <h5>Strategy & Organization</h5>
                            <p>lorem this is the description la lorem i dont have it for react lorem</p>
                            <p>Read More</p>
                        </div>
                        <div>
                            <h5>Brand & Advertising</h5>
                            <p>lorem this is the description la lorem i dont have it for react lorem</p>
                            <p>Read More</p>
                        </div>
                        <div>
                            <h5>Design & Technology</h5>
                            <p>lorem this is the description la lorem i dont have it for react lorem</p>
                            <p>Read More</p>
                        </div>
                        <div>
                            <h5>Lotem Ipsum & Sit</h5>
                            <p>lorem this is the description la lorem i dont have it for react lorem</p>
                            <p>Read More</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h1>Contact Us</h1>
                    <div>
                        <p>
                            lorem this is the description la lorem i dont have it for react lorem.lorem this is the description la lorem i dont have it for react lorem
                        </p>
                        <ul>
                            <li>lorem ipsum dolor sit amet</li>
                            <li>lorem ipsum dolor sit amet</li>
                            <li>lorem ipsum dolor sit amet</li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;