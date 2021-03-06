import React from 'react';

class About extends React.Component{

    constructor(){
        super()
        this.state = {
            teamNum: 0,
            teamBios: [
                {
                    name: 'Anshika Kala',
                    title: 'Product Designer',
                    phone: '+1 (773) 123-1231',
                    email: 'kala.anshika@cwd.com',
                    image: './images/rocky-wallpaper.jpg'
                },
                {
                    name: 'David Pinedo',
                    title: 'Founder, Designer',
                    phone: '+1 (773) 123-1231',
                    email: 'kala.anshika@cwd.com',
                    image: './images/rocky-wallpaper.jpg'
                },
                {
                    name: 'Val Ubaldo',
                    title: 'Co Founder, Designer',
                    phone: '+1 (773) 123-1231',
                    email: 'kala.anshika@cwd.com',
                    image: './images/rocky-wallpaper.jpg'
                },
                {
                    name: 'Alejandro Linan',
                    title: 'Software Engineer, pleb',
                    phone: '+1 (773) 123-1231',
                    email: 'kala.anshika@cwd.com',
                    image: './images/rocky-wallpaper.jpg'
                }
            ]
        }
    }

    teamBio = () => {
        let index = this.state.teamNum
        let person = this.state.teamBios[index]

        return(
            <div className='about__team-middle'>
                <img className='about__team-img' src={require(`${person.image}`)} alt='placeholder' />
                <h5 className='about__team-member-name'>{person.name}</h5>
                <p className='about__team-member-job'>{person.title}</p>
                <p className='about__team-member-phone'>{person.phone}</p>
                <p className='about__team-member-email'>{person.email}</p>
            </div>
        )
    }

    teamLeftArrow = () => {
        if (this.state.teamNum === 0){
            this.setState(prevState => {
                return {
                    ...prevState,
                    teamNum: prevState.teamBios.length - 1
                }
            })
        } else {
            this.setState(prevState => {
                return {
                    ...prevState,
                    teamNum: prevState.teamNum - 1
                }
            })
        }
    }

    teamRightArrow = () => {
        if ((this.state.teamBios.length - 1) > this.state.teamNum ){
            this.setState(prevState => {
                return {
                    ...prevState,
                    teamNum: prevState.teamNum + 1
                }
            })
        } else{
            this.setState({
                ...this.state,
                teamNum: 0
            })
        }
    }

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
                    </div>

                    <div className='about__team'>
                        <p className='about__team-arrow about__team-left' onClick={this.teamLeftArrow}>{'<--'}</p>
                        { this.teamBio() }
                        <p className='about__team-arrow about__team-right' onClick={this.teamRightArrow}>{ '-->' }</p>

                    </div>
                </div>

                <div>
                    <div className='about__tools'>
                        <h3 className='about__tools-title'>Tools/Inspiration</h3>
                        <p className='about__tools-info'>
                            viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis
                        </p>
                    </div>
                    
                    <div className='about__tools_slides'>
                        <img className='about__tools_slides-one' src={require(`./images/rocky-wallpaper.jpg`)} alt='placeholder' />
                        <img className='about__tools_slides-two' src={require(`./images/rocky-wallpaper.jpg`)} alt='placeholder' />
                        <img className='about__tools_slides-three' src={require(`./images/rocky-wallpaper.jpg`)} alt='placeholder' />
                        <img className='about__tools_slides-four' src={require(`./images/rocky-wallpaper.jpg`)} alt='placeholder' />
                    </div>
                </div>

                <div>
                    <h3 className='about__services-title'>Services</h3>
                    <div className='about__services'>
                        <div className='about__services-one'>
                            <h5 className='about__services-name'>Strategy & Organization</h5>
                            <p className='about__services-description'>lorem this is the description la lorem i dont have it for react lorem</p>
                            <p className='about__services-read'>Read More</p>
                        </div>
                        <div className='about__services-two'>
                            <h5 className='about__services-name'>Brand & Advertising</h5>
                            <p className='about__services-description'>lorem this is the description la lorem i dont have it for react lorem</p>
                            <p className='about__services-read'>Read More</p>
                        </div>
                        <div className='about__services-three'>
                            <h5 className='about__services-name'>Design & Technology</h5>
                            <p className='about__services-description'>lorem this is the description la lorem i dont have it for react lorem</p>
                            <p className='about__services-read'>Read More</p>
                        </div>
                        <div className='about__services-four'>
                            <h5 className='about__services-name'>Lotem Ipsum & Sit</h5>
                            <p className='about__services-description'>lorem this is the description la lorem i dont have it for react lorem</p>
                            <p className='about__services-read'>Read More</p>
                        </div>
                    </div>
                </div>

                <div className='about__contact'>
                    <h1 className='about__contact-us'>Contact Us</h1>
                    <div className='about__contact-text'>
                        <p>
                            lorem this is the description la lorem i dont have it for react lorem.lorem this is the description la lorem i dont have it for react lorem
                        </p>
                        <ul className='about__contact-list'>
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