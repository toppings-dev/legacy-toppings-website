import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import emailjs from 'emailjs-com';
import Header from "../headers/light.js";
import { Portal } from "react-portal";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/CommunityBlueBox.png";
import CustomersLogoStripImage from "../../images/customers-logo-strip.png";
import { NavLink } from "react-router-dom";



const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const CustomersLogoStrip = styled.div`
  ${tw`mt-12 lg:mt-20`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
  }
  img {
    ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
  }
`;

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_siolzuj', 'template_ny3an7k', e.target, 'user_EvvJTh5bb1VQKSEsvVn5W')
    .then((result) => {
      alert("Thank You for Signing Up! We will be in touch to get you onto the app soon!")
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    //https://docs.google.com/forms/d/1LcfXiqvYKopNI-cyrxQAswtOL5n22NzOFMWg2dRe27w
}

class ShowModal extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
}



export default ({ roundedHeaderButton }) => {
  
  return (
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              Free Food Delivery From Friends
            </Heading>
            <Paragraph>
            Using the power of social networks, get your favorite meals delivered to your doorstep with no delivery fees by delivering to friends! Best part? You’ll be rewarded for every pick-up and order!
            </Paragraph>
            <Actions>
              {/* <input type="text" placeholder="Your E-mail Address" ref ={email} />
              <button onclick = {signUp} style = {{backgroundColor:"#007bff"}}>Sign Up!</button> */}
              
               <form className="contact-form" onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder = "Email"/>
      
            <input type="submit" name = "submit" value="Sign Up!" style = {{backgroundColor: "#007bff", textAlign:"left",color:"white"}}/>
            </form>

             
            </Actions>
            
            {/* <CustomersLogoStrip>
              <p>Our TRUSTED Customers</p>
              <img src={CustomersLogoStripImage} alt="Our Customers" />
            </CustomersLogoStrip> */}
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" src={DesignIllustration} alt="Design Illustration" />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};
