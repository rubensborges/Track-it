import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts";
import Botao from "../botao";
import Input from "../input";
import TextoLink from "../textolink";

const Cadastro = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState("");
  const navigate = useNavigate()
 

  function sendData(){
  const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

    setLoading("loaded")
    axios.post(url, {
      email,
      name,
      image,
      password
    }).then(response => {
      navigate("/")
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
      <Input value={email} onchange={setEmail} type={"text"} placeholder={"email"} />
      <Input value={password} onchange={setPassword} type={"password"} placeholder={"senha"}/>
      <Input value={name} onchange={setName} type={"text"} placeholder={"nome"}/>
      <Input value={image} onchange={setImage} type={"text"} placeholder={"foto"}/>
      <Botao onclick={sendData}>
         {loading === "" ? "Cadastrar" :
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
    <Link to={"/"}>
      <TextoLink texto={"Já tem uma conta? Faça login!"}/>
    </Link>
  </>
)
}



export default Cadastro;




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








