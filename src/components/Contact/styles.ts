import styled from "styled-components";

const ContactContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  width: 250px;
  height: 280px;
  background-color: antiquewhite;
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: center;
`;

const ContactID = styled.p`
  font-size: 22px;
  font-weight: bolder;
`;

const ContactName = styled.p`
  font-size: 20px;
`;

const ContactLastname = styled.p`
  font-size: 20px;
`;

const ContactPhone = styled.p`
  font-size: 20px;
`;

const ContactEmail = styled.p`
  font-size: 20px;
`;

export {
  ContactContainer,
  ContactID,
  ContactName,
  ContactLastname,
  ContactPhone,
  ContactEmail,
};
