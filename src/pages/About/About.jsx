import React from "react";
import styled from "styled-components";
import mobileImage from "./assets/mobile-image.png";
import missionImage from "./assets/mission-image.png";
import visionImage from "./assets/vision-image.png";

const About = () => {
  return (
    <>
      <StyledPage>
        <AboutSection>
          <AboutContent>
            <AboutHead>About Us</AboutHead>
            <AboutText>
              Bankstreet is a platform that allows User to recieve/veiw instant
              conversion rates using customized areas real-time charts that fit
              the Ecomony value and a historical conversion record from one to
              one year and to enhance the customer experience{" "}
            </AboutText>
          </AboutContent>
          <AboutImage>
            <Img src={mobileImage} alt="mobileimage" />
          </AboutImage>
        </AboutSection>

        <MissionVisionSection>
          <MissionSection>
            <MissionImage src={missionImage} alt="mission" />
            <MissionContent>
              <MissionHead>Our Mission</MissionHead>
              <MissionText>
                To create a onestop platform that allow user to view their
                current and standard economic money rate in other currencies
              </MissionText>
            </MissionContent>
          </MissionSection>
          <MissionSection vision>
            <MissionImage vision src={visionImage} alt="mission" />
            <MissionContent>
              <MissionHead>Our Vision</MissionHead>
              <MissionText>
                To prepare the users mindset for any expenditure in any country
                of thier chioce
              </MissionText>
            </MissionContent>
          </MissionSection>
        </MissionVisionSection>
      </StyledPage>
    </>
  );
};

export default About;

const sizes = {
  mobile: "490px",
  tablet: "650px",
  laptop: "1280px",
};

const devices = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
};
const StyledPage = styled.div``;

const AboutSection = styled.div`
  background-color: #00296b;
  display: flex;
  color: #fff;
  padding: 4rem 177px;

  @media ${devices.laptop} {
    flex-direction: column;
    padding: 42px 224px;
    align-items: center;
  }
  @media ${devices.tablet} {
    flex-direction: column;
    padding: 42px 24px;
    align-items: center;
  }
  @media ${devices.mobile} {
    flex-direction: column;
    padding: 42px 24px;
    align-items: center;
  }
`;

const AboutContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 5rem;
  font-family: var(--font-family);
  /* max-width: 490px; */

  @media ${devices.laptop} {
    margin: 0;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }
  @media ${devices.tablet} {
    margin: 0;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }
  @media ${devices.mobile} {
    margin: 0;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }
`;

const AboutImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: var(--font-family);
`;
const AboutHead = styled.h1`
  margin: 1.5rem 0;
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
`;
const AboutText = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;

  @media ${devices.mobile} {
    /* font-size: 16px; */
  }
`;

const Img = styled.img`
  @media ${devices.laptop} {
    width: 144px;
  }
  @media ${devices.tablet} {
    width: 105px;
  }
  @media ${devices.mobile} {
    width: 95px;
  }
`;

const MissionVisionSection = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  color: #202020;
  font-family: var(--font-family);
  padding: 100px 177px;
  @media ${devices.laptop} {
    flex-direction: column;
    padding: 42px 224px;
    align-items: center;
  }
  @media ${devices.tablet} {
    flex-direction: column;
    padding: 42px 24px;
    align-items: center;
  }
  @media ${devices.mobile} {
    /* flex-direction: column; */
    padding: 42px 24px;
    /* align-items: center; */
  }
`;

const MissionSection = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.vision ? "row-reverse" : "row")};
  align-items: center;
  @media ${devices.laptop} {
    flex-direction: column;
  }
`;
const MissionContent = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${devices.laptop} {
    max-width: 530px;
    margin: 50px 0 38px 0;
  }
`;
const MissionImage = styled.img`
  margin: ${(props) => (props.vision ? "0 0 50px 4rem" : "0 2rem 50px 0")};

  @media ${devices.laptop} {
    margin: 0;
  }
  @media ${devices.tablet} {
    width: 300px;
  }
  @media ${devices.mobile} {
    width: 250px;
  }
`;
const MissionHead = styled.h2`
  font-size: 32px;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  margin-bottom: 10px;
`;
const MissionText = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
`;
