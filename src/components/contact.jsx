import React from 'react'
import './Contact.css'

function contact() {
  return (
    <div>
        <div class="contact-from">
            <div class="form-area">
                <div class="animated fadeInDown">
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente.</p>
                </div>
                
                <div class="contact">
                    <div class="map animated fadeInLeft">
                    </div>

                    <form class="form animated fadeInUp">
                        <label>
                            <input type="email" class="email" id="email" required/>
                            <div class="label email-text">E-mail</div>
                        </label>

                        <label>
                            <input type="text" class="subject" id="subject" required/>
                            <div class="label subject-text">Subject</div>
                        </label>

                        <label>
                            <textarea class="help-box" id="helpBox" cols="30" rows="10" required></textarea>
                            <div class="label help-text">How we can help?</div>
                        </label>

                        <div class="submit-area">
                            <input type="submit" id="submit" value="Submit"/>
                            <i class="far fa-paper-plane"></i>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default contact