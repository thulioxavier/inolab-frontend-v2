import styled from "styled-components";
import { COLORS } from "../../theme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  @media (max-width: 1100px) {
    justify-content: center;
    align-items: center;
  }
`;

export const LoginContent = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  position: relative;

  width: 1050px;
  height: 500px;

  background: linear-gradient(
    180deg,
    ${COLORS.green[900]} 0%,
    ${COLORS.green[800]} 100%
  );
  border-radius: 5px;

  @media (max-width: 1100px) {
    width: 100%;
    height: 80%;
    margin: 5px;
  }
`;

export const Transparent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const Header = styled.img`
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 1100px) {
    height: 320px;
  }
`;

export const LogoContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const FormContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 265px;
`;

export const Form = styled.form`
  width: 490px;
  height: 420px;
  border-radius: 5px;
  z-index: 99;

  background-color: #fff;
  padding: 15%;

  @media (max-width: 510px) {
    padding: 5%;
  }

  @media (max-width: 1100px) {
    width: 90%;
    height: 90%;
  }
`;

export const FormTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;
