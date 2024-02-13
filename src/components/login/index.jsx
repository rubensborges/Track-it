import axios from "axios";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { json, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts";
import Botao from "../botao";
import Input from "../input";
import TextoLink from "../textolink";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {userData,setUserData} = useContext(UserContext);
  const [loading, setLoading] = useState("");
  
  const navigate = useNavigate()
  
  function sendData(){
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
    setLoading("loaded")
    const request = axios.post(url, {
      email,
      password
    })
    request.then(response => {
      const dados = JSON.stringify(response);
      localStorage.setItem('dados',dados)
      setUserData(response)
      navigate("/hoje")
    })
  }



  return (
    <>
      <LogoCenter>
        <Logo>
          <img src="src/assets/Group 8.png" alt="" />
        </Logo>
      </LogoCenter>
      <InputsCenter>
        <Input onchange={setEmail} value={email} type={"text"} placeholder={"email"} />
        <Input onchange={setPassword} value={password} type={"password"} placeholder={"senha"}/>
        <Botao onclick={sendData}>
         {loading === "" ? "Entrar" :
          <ThreeDots
            height="13"
            width="51"
            radius="9"
            align
            color="#fff" 
            ariaLabel="three-dots-loading" 
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true} 
        />}
        </Botao>
      </InputsCenter>
      <Link to={"/cadastro"}>
        <TextoLink texto={"Não tem uma conta? Cadastre-se!"}/>
      </Link>
    </>

  )
}

const InputsCenter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  margin-top: 32px;

`
const LogoCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 68px;
`
const Logo = styled.div`
  max-width: 180px;
  height: 180px;
  img{
    width: 100%;
  }
`;

export default Login;

  
