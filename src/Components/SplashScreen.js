import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import {AiFillFacebook, AiFillHome, AiFillInstagram} from "react-icons/all";
import "./SplashScreen.css";

const Toggle = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;   
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .7s ease;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.pageBackground};
  transition: all .7s ease;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    color: ${props => props.theme.titleColor};
    transition: all .7s ease;
`;

const TagLine = styled.span`
    color: ${props => props.theme.tagLineColor};
    font-size: 18px;
    transition: all .7s ease;
`;


const SociIcon = styled.a`
    font-size: 50px;
    color: ${props => props.theme.iconColor}; 
`;

function Splash(props) {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };

    const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

    return (
        <Page>
            <Container>
                <Toggle onClick={changeTheme}>
                  {icon}
                </Toggle>
                <Title>MyWebProfi</Title>
                <TagLine>www.mywebprofi.net</TagLine>
                <SociIcon> <AiFillHome/>  <AiFillInstagram/> <AiFillFacebook/>
                </SociIcon>

            </Container>
        </Page>
    );
};

export default Splash;