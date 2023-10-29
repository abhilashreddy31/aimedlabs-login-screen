import React from 'react';
import styled from 'styled-components';
import icon from './asserts/icon1.svg';
import icon1 from './asserts/icon2.svg';
import google from './asserts/google 1.png'
import facebook from './asserts/facebook 1.png'
import image1 from './asserts/photo.png'
const SplitContainer = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 850px) {
    isplay: flex;
    flex-direction: column;
    
  }
`;

const LeftPanel = styled.div`
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    width: 65%; 
    
  }
  @media (max-width: 850px) {
    width: 100%;
    
  }
`;

const LoginText = styled.h2`
  color: #000;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  
`;
const Paratext = styled.h2`
  color: #000;

  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  margin-top:-4%;
`;


const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  margin-top:2%;
`;

const Input1 = styled.input`
  width: 350px;
  height: 25px;
  flex-shrink: 0;
  border-radius: 16px;
  background: rgba(240, 237, 255, 0.80);
  background-image: url(${icon});
  background-repeat: no-repeat;
  background-size: 20px; 
  background-position: 10px center; 
  margin: 10px 0;
  padding: 10px;
  outline: none;
  border: none;
  padding-left: 40px;
  @media (max-width: 500px) {
    width: 300px;
   
  }
  @media (max-width: 400px) {
    width: 250px;
   
  }
`;
const Input2 = styled.input`
  width: 350px;
  height: 25px;
  flex-shrink: 0;
  border-radius: 16px;
  background: rgba(240, 237, 255, 0.80);
  background-image: url(${icon1});
  background-repeat: no-repeat;
  background-size: 20px; 
  background-position: 10px center; 
  margin: 10px 0;
  padding: 10px;
  outline: none;
  border:none;
  padding-left:40px;
  margin-top:10px;
  @media (max-width: 500px) {
    width: 300px;
   
  };
  @media (max-width: 400px) {
    width: 250px;
   
  }

  
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 364px;
  margin-bottom: 20px;
  margin-top:-3%;
  @media (max-width: 500px) {
    width: 300px;
   
  };
  @media (max-width: 400px) {
    display:none;
   
  }
`;

const RememberMe = styled.label`
  color: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
`;

const ForgotPassword = styled.a`
  color: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
`;

const OrSeparator = styled.div`
  text-align: center;
  margin: 20px 0;
  position: relative;

 
`;

const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 364px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #F0EDFF;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #1C1C1C;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.3s;

  img {
    width: 20px;
    height: 20px; 
    margin-right: 10px; 
  };
  @media (max-width: 500px) {
    width: 300px;
   
  };
  @media (max-width: 400px) {
    width: 250px;
   
  }
`;
const FacebookButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 364px;
  height: 45px;
  margin-top:20px;
  
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #F0EDFF;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #1C1C1C;
  background: transparent;
  
  cursor: pointer;
  transition: background-color 0.3s;

  img {
    width: 20px; 
    height: 20px; 
    margin-right: 10px; 
  };
  @media (max-width: 500px) {
    width: 300px;
   
  };
  @media (max-width: 400px) {
    width: 250px;
   
  }
`;

const StyledText = styled.p`
  color: #1C1C1C;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;


const LoginButton = styled.button`
  width: 124px;
  height: 40px;
  flex-shrink: 0;
  color:#FFF;
  font-weight: 700;
  font-size: 12px;
  border-radius: 16px;
  background: linear-gradient(100deg, #9181F4 -5.85%, #5038ED 109.55%);
  box-shadow: 0px 8px 21px 0px rgba(0, 0, 0, 0.16);
  border: none;
`;

const RightPanel = styled.div`
  width: 50%;
  background: rgba(229, 229, 229, 0.41);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 850px) {
    width: 100%;
    margin-top:20px
    
  }
`;

const CenteredImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-top:-10%;
  @media (max-width: 850px) {
    margin:50px
  }
`;

const LoginForm = () => {
  return (
    <SplitContainer>
      <LeftPanel>
        <LoginText>Login</LoginText>
        <Paratext>Welcome  back! Please login to your account.</Paratext>
        <InputsContainer>
          <Input1 type="text" placeholder="Username" />
          <Input2 type="password" placeholder="Password" />
        </InputsContainer>
        <ButtonsContainer>
          <RememberMe>
            <input type="checkbox" />
            Remember me
          </RememberMe>
          <ForgotPassword href="#">Forgot password?</ForgotPassword>
        </ButtonsContainer>
        <LoginButton>Login Now</LoginButton>
        <OrSeparator>Or</OrSeparator>
        <GoogleButton>
          <img src={google} alt="Google Icon" />
          <StyledText>Login with Google</StyledText>
        </GoogleButton>
        <FacebookButton>
          <img src={facebook} alt="Facebook Icon" />
          <StyledText>Login with Facebook</StyledText>
        </FacebookButton>
      </LeftPanel>
      <RightPanel>
        <CenteredImage src={image1} alt="Your Image" />
      </RightPanel>
    </SplitContainer>
  );
};

export default LoginForm;
