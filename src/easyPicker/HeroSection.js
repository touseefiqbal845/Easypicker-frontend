import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {name} </h1>
            <p>
              Indulge in a realm of unparalleled sophistication at easypaisa.pk.
              Our digital emporium seamlessly blends innovation and curated
              elegance, promising a shopping experience that transcends the
              ordinary. Elevate your journey with us, where convenience meets
              style.
            </p>
            <Link to="/products">
              <Button>ORDER now</Button>
            </Link>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="/hero.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
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
 
  background: #fff;
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

 button {
  // color: white;
  // font-size: 1.40rem;
  // line-height: 1.5;
  // font-weight:400;

}
p {
  color: black;
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
  min-width: 20rem;

    max-width: 50rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
   box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
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

@media (max-width: ${({ theme }) => theme.media.lap}) {
    .container {
            max-width: 1079px;
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
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }
  .container {
    max-width: 1343px;
    margin: 12px auto;
    margin-top:3px;
}
  .hero-section-data {
    p {
      margin: 2rem 0;
      font-size: 17px;
    }

    h1 {
        text-transform: capitalize;
        font-weight: bold;
        font-size: 40px;
    }
//     button {
//       max-width: 8rem;
// min-width: 5rem;
// min-height: 3rem;
// border-radius: 21px;
    
//     }
    .intro-data {
      margin-bottom: 0;
      color: #000000;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom:-10px;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
 
 

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
