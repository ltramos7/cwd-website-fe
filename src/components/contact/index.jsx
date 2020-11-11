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
                <div className='contact-container'>
                    <h1>Let's work together</h1>
                    <p>We told you our names, now tell us yours!</p>
                </div>

                <div>
                    <form>
                        <input type='text' placeholder='My name is' />
                        <input type='text' placeholder='You can email me at' />
                        <textarea type='text' placeholder="I've got something to say" />
                        <button>Send now --></button>
                    </form>
                </div>
            </section>
        )
    }
}

export default Contact;