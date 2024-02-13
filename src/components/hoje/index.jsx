import axios from "axios";
import dayjs from "dayjs";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Footer from "../footer";
import Header from "../header";
import 'dayjs/locale/pt-br'; 



const Hoje = () => {
  
  const [habitos, setHabitos] = useState([])
  const retrievedData = JSON.parse(localStorage.getItem('dados'));

  
  const userToken = retrievedData.data.token;
  let habitoMarcado = habitos.map(habito => habito.done);
  let habitoFiltrado = habitoMarcado.filter(habito => habito)
  const progresso = habitoFiltrado.length / habitos.length * 100;
  const progressoArredondado = progresso.toFixed()
  const dayjslib = dayjs().locale('pt-br')
  const dataAtual = dayjslib.format('dddd, D/M/YYYY');
  const dataAtualFormatada = dataAtual[0].toUpperCase() + dataAtual.slice(1);

  const config = {
    headers: {
      Authorization: `Bearer ${userToken}`
    }
  };
  useEffect(()=>{
    const urlGet = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const req = axios.get(urlGet,config);
    req.then(response => setHabitos(response.data))
  },[]);
  

  function marcarHabito(id,done){
    
    let urlAtual;
    if(done){
      urlAtual = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
    }else{
      urlAtual = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
    }
    const req = axios.post(urlAtual, {}, config);
    
    req.then(() =>{
      const urlGet = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
      axios.get(urlGet,config).then(response => {
        setHabitos(response.data)
      })
    })
  }

  return (
  <>
    <Header profileImage={retrievedData.data.image}/>
    <Main>
      <Texto>{dataAtualFormatada}</Texto>
      <Progresso color={progresso > 0 ? "check" : ""}>
        {progresso > 0 ? `${progressoArredondado}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}
      </Progresso>
      {habitos.map(habito => (
          <Habito>
            <DadosLeft>
              <NomeHabito>{habito.name}</NomeHabito>
              <DadosHabitos>Sequencia atual: {habito.currentSequence}</DadosHabitos>
              <DadosHabitos>Seu record: {habito.highestSequence}</DadosHabitos>
            </DadosLeft>
            <Botao onClick={() => marcarHabito(habito.id, habito.done)} color={habito.done}>
              <img src="src/assets/Group - cópia.png" alt="" />
            </Botao>
          </Habito>
      ))}
    </Main>
    <Footer progresso={progressoArredondado}/>
  </>
  )
}

    


export default Hoje;

const Texto = styled.div`
  font-size: 23px;
  color: #126ba5;
`

const Main = styled.div`
 padding: 100px 18px 100px;
`

const Progresso = styled.div`
  font-size: 18px;
  color: ${props => props.color === "check" ? "#8fc549" : "#bababa"};
  margin-bottom: 30px;
`

const Habito = styled.div`
  max-width: 340px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #e7e7e7;
  padding: 14px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`
const DadosLeft = styled.div`

`
const NomeHabito = styled.div`
  font-size: 20px;
  color: #666666;
  margin-bottom: 8px;
`

const DadosHabitos = styled.div`
  font-size: 13px;
  color: #666666;
`

const Botao = styled.div`
  width: 69px;
  height: 69px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color ? "#8fc549" : "#ebebeb"};
  border: 1px solid #e7e7e7;
  img{
    width: 35px;
  }
`
    

