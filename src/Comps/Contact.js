import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        margin-top:8px

     
      }
    }
  }
`;

function ContactForm() {
  const [state, handleSubmit] = useForm("xoqzekod");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="contact-inputs"><label htmlFor="username"> Name</label>
      <input required id="username" type="text" name="username"  autoComplete="off"/></div>
     <div className="contact-inputs">
     <label htmlFor="email">Email Address</label>
      <input id="email" required type="email" name="email" autoComplete="off" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
     </div>
      <div className="contact-inputs">
      <label htmlFor="message">Message</label>
      <textarea id="message" required name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <div className="contact-inputs">
      <button type="submit" disabled={state.submitting} >
        Submit
      </button>
      </div>
    </form>
  );
}

const Contact = () => {
  return (
    <Wrapper>
      <h2>Contact us</h2>
      <iframe
      title="myFrame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58391.465243121806!2d78.71360705867536!3d23.83756025436337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978d14a2cf591af%3A0xf446eaa2b5281370!2sSagar%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1676205636181!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="">
          <ContactForm />
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
