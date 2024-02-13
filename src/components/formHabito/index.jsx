import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import UserContext from "../../contexts";


import Input from "../input";

const FormHabito = (props) => {
  
  const {userData, setUserData} = useContext(UserContext);
  const {diaSelecionado, setDiaSelecionado} = useContext(UserContext)
  const [nomeHabito, setNomeHabito] = useState("");

  const retrievedData = JSON.parse(localStorage.getItem('dados'));

  
  const userToken = retrievedData.data.token
  
  const dias = [
    {dia: "D", indexDoDia: 0},
    {dia: "S", indexDoDia: 1},
    {dia: "T", indexDoDia: 2},
    {dia: "Q", indexDoDia: 3},
    {dia: "Q", indexDoDia: 4},
    {dia: "S", indexDoDia: 5},
    {dia: "S", indexDoDia: 6}
  ]
  
  const handleDiaClick = (diaId) => {
    if (diaSelecionado.includes(diaId)) {
      setDiaSelecionado(diaSelecionado.filter((id) => id !== diaId));
    } else {
      setDiaSelecionado([...diaSelecionado, diaId]);
    }
  };
  
  function criarHabito(){
    
    const config = {
      headers: {
        "Authorization": `Bearer ${userToken}`
      }
    };
    const urlPost = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const urlGet = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    
    const postReq = axios.post(urlPost, {name: nomeHabito, days: diaSelecionado}, config)
    postReq.then(()=>{
      axios.get(urlGet,config).then(response =>{
        setUserData(response.data)
      })
    })
  }
    
  return (
    <>
      <Corpo>
        <Center>
          <Input onchange={setNomeHabito} value={nomeHabito} placeholder={"nome do hábito"} type={"text"}/>
          <CenterBoxDias>
            {dias.map((dia,index) => (
              <BoxDias 
              onClick={()=> handleDiaClick(dia.indexDoDia)}
              color={diaSelecionado.includes(dia.indexDoDia)? "selecionado" : ""} 
              key={index}> 
                {dia.dia} 
              </BoxDias>
            ))} 
          </CenterBoxDias>
        </Center>
        <Menus>
          <Cancelar onClick={props.cancel}>Cacenlar</Cancelar>
          <Botao onClick={criarHabito}>Salvar</Botao>
        </Menus>
      </Corpo>
    </>
  )
}

export default FormHabito;

const Botao = styled.div`
width: 84px;
height: 35px;
background-color: #52B6FF;
color: white;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
`
const Cancelar = styled.div`
color: #52B6FF;
font-size: 16px;
`
const Menus = styled.div`
display: flex;
align-items: center;
gap: 25px;
bottom: 18px;
right: 18px;
position: absolute;
`

const BoxDias = styled.div`
width: 30px;
height: 30px;
border-radius: 5px;
background-color: ${props => props.color === "selecionado" ? "#cfcfcf" : "white"};
border: 1px solid #d4d4d4;
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
color: ${props => props.color === "selecionado" ? "white" : "#dbdbdb"};
`
const CenterBoxDias = styled.div`
display: flex;
width: 100%;
gap: 5px;
`

const Center = styled.div`
display: flex;
flex-direction: column;
gap: 10px;  
`

const Corpo = styled.div`
max-width: 340px;
height: 180px;
margin: 30px auto;
background-color: #fff;
border-radius: 5px;
padding: 18px;
position: relative;

`


    
    
  
    



    






  
