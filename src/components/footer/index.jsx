import { Link } from "react-router-dom";
import styled from "styled-components";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Footer = (props) => {
  return (
    <Foot>
      <Link to="/habitos">
        <Menu>Hábitos</Menu>
      </Link>
      <Link to="/hoje">
        <Progress>
          <CircularProgressbar
          value={props.progresso > 0 ? props.progresso : 0}
          text={`Hoje`}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#52B6FF",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
            textSize: '18px',
          })}
          />
      </Progress>
      </Link>
      <Link to="/">
        <Menu>Histórico</Menu>
      </Link>
    </Foot>
        
  )
}


export default Footer;
const Progress = styled.div`
  max-width: 91px;
  width: 91px;
  margin-top: -31px;
`
const Menu = styled.div`
  font-size: 18px;
  color: #52B6FF;
`;

const Foot = styled.footer`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 5;
  bottom: 0;
  height: 70px;
`