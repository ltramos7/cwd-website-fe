import React from 'react';

class Contact extends React.Component{
    constructor(){
        super()
        this.state = {
            form: {
                name: null,
                email: null,
                text: null
            }
        }
    }

    render(){
        return(
            <section classname='contact'>
                <div className='contact__heading'>
                    <h1>Let's work together</h1>
                    <p>We told you our names, now tell us yours!</p>
                </div>

                <div>
                    <form className='contact__form'>
                        <input className='contact__form-text' type='text' placeholder='My name is' />
                        <input className='contact__form-text' type='text' placeholder='You can email me at' />
                        <textarea className='contact__form-text-area' type='text' placeholder="I've got something to say" />
                        <button className='contact__form-btn'>Send now --></button>
                    </form>
                </div>
            </section>
        )
    }
}

export default Contact;