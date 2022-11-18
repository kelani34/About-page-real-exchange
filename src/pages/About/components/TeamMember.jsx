import React from "react";
import styled from "styled-components";
const TeamMember = (props) => {
  return (
    <>
      <StyledTeam>
        <img src={props.image} alt="" />
        <h2>{props.name}</h2>
        <span>{props.designation}</span>
      </StyledTeam>
    </>
  );
};

export default TeamMember;

const StyledTeam = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 225px;
  align-items: center;
  gap: 15px;
`;
