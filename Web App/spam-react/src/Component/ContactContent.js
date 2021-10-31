import React from 'react'

const ContactContent = () => {
    var form = document.getElementById("my-form");

    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    return (
        <div>
            <div className="map-bg">
                <h1>Call me when you want, call me when you need<br />call be by your nameeee</h1>
                <div className="color-overlay"></div>
            </div>

            <div className="infos">
                <h1>Get in touch</h1>
                <div className="inputs">
                <form action="https://formspree.io/f/xayakpga" method="POST" id="my-form">

                <div className="container-contact">

                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" />
                </div>
                

                <div className ="form-group">
                    <label htmlFor="email">Email<span>*</span></label>
                    <input type="text" className="form-control" id="email" name="email" />
                </div>
                
                </div>

                <div className ="message">

                
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" className="form-control" id="message" cols="30" rows="10"></textarea>
                </div>

                <button id="submit-contact" type="submit" value="Submit" onSubmit={handleSubmit}>Submit</button>
                </div>
                </form>
                </div>
            </div>
            
            

            <section>
                <div className="address">
                <h2>College of Engineering | Anonas, Sta. Mesa, Maynila, 1008 Kalakhang Maynila </h2>
                </div>
            </section>
        </div>
    )
}

export default ContactContent
