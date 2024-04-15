import styled from "styled-components";
import { Button } from "./Button";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 6rem 0 4rem 0;
    text-align: center;

    .container {
      margin-top: 3rem;

      .contact-form {
        max-width: 40rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            color: white;
            max-width: 15px;
               border-radius: 21px;



            &:hover {
              background-color: black;
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: white;
              transform: scale(0.9);
            }
          }
        }
      }
    }
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Work Sans", sans-serif;
  }
  
  
  html {
    font-size: 62.5%;
    /* scroll-behavior: smooth; */
    /* 1rem = 10px */
    overflow-x: hidden;
  }
  
  body {
    overflow-x: hidden;
     scrollbar-color: rgb(98 84 243);
      scrollbar-width: thin;
  }
  
  body::-webkit-scrollbar {
    width: 1.rem;
  }
  
  body::-webkit-scrollbar-track {
     background-color: rgb(24 24 29);
  }
  
  body::-webkit-scrollbar-thumb {
   
    background: #black;
      border: 5px solid transparent;
      border-radius: 9px;
      background-clip: content-box;
  }
  
  h1,
  h2,
  h3,
  h4 {
     font-family: "Work Sans", sans-serif;
    
  
  
  }
  
  h1 {
    color: ${({ theme }) => theme.colors.heading};
    font-size: 8rem;
    font-weight: 900;
  }
  
   h2 {
     color: ${({ theme }) => theme.colors.heading};
     font-size: 4.4rem;
     font-weight: 300;
     white-space: normal;
    
    }
  
  h3 {
    font-weight: 600;
    font-size: 4rem;
  }
  
  p, button {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.65rem;
    line-height: 1.5;
    font-weight:400;
  }
  
  a {
    text-decoration: none;
  }
  
  li {
    list-style: none;
  }
  
  
  ${"" /* resuable code section  */}
  
  .container {
    max-width: 1500px
    margin: 0 auto;
  }
  
  .grid {
    display: grid;
    gap: 9rem;
  }
  
  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  
  }
  
  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .grid-four-column{
     grid-template-columns: 1fr 1.2fr .5fr .8fr ;
  }
  
  .grid-five-column{
    grid-template-columns: repeat(5, 1fr);
  }
  
    .common-heading {
        font-size: 3.8rem;
        font-weight: 600;
        margin-bottom: 6rem;
        text-transform: capitalize;
      }
  
       .intro-data {
        margin-bottom: 0;
        text-transform: uppercase;
        color: #5138ee;
      }
  
     .caption {
        position: absolute;
        top: 15%;
        right: 10%;
        text-transform: uppercase;
        background-color: ${({ theme }) => theme.colors.bg};
        color: ${({ theme }) => theme.colors.helper};
        padding: 0.8rem 2rem;
        font-size: 1.2rem;
        border-radius: 2rem;
      }
  
  input, textarea{
    min-width: 14rem;
  
      max-width: 40rem;
      color: ${({ theme }) => theme.colors.black};
      padding: 1.6rem 2.4rem;
      border: 1px solid ${({ theme }) => theme.colors.border};
      text-transform: uppercase;
     box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  }
      input[type="submit"]{
      max-width: 12rem;
      margin-top: 2rem;
      background-color: black;
      color: ${({ theme }) => theme.colors.white};
      padding: 1.4rem 2.2rem;
      border-style: solid;
      border-width: .1rem;
      text-transform: uppercase;
      font-size: 1.5rem;
      cursor: pointer;
      }
  // .logo{
  //   width: 295px;
  //   height: 66px;
  //   margin-left: -100px;
  
  // }
  .main-logo{
    // width: 66px;
    // height: 66px;
    // padding-left: 20rem;
  
  }
  
  @media (max-width: ${({ theme }) => theme.media.tab}) {
      .container {
          max-width: 1280px;
      padding: 0 3.2rem;
    }
    }
  
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      html {
        font-size: 50%;
      }
    
      .grid {
        gap: 3.2rem;
      }
    
      .grid-two-column,
      .grid-three-column,
      .grid-four-column {
        grid-template-columns: 1fr;
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact us</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xrgnqapw"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
