import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import styled from "styled-components"
import UserContext from "../../contexts"
import Footer from "../footer"
import FormHabito from "../formHabito"
import Header from "../header"
import NovoHabito from "../novoHabito"

const Habitos = () => {
  const {userData, setUserData} = useContext(UserContext);
  const [habitos, setHabitos] = useState([]);
  const [form, setForm] = useState(false);
  
  const retrievedData = JSON.parse(localStorage.getItem('dados'));
  const userToken = retrievedData.data.token;
  const urlGet = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

  useEffect(()=>{
    const getReq = axios.get(urlGet,{
      headers: {
        "Authorization": `Bearer ${userToken}`
      }
    });
    getReq.then(response =>{
      setUserData(response.data)
    })

  },[]);

  function deleteHabito(id){
    const urlDelete = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
    axios.delete(urlDelete, {
      headers: {
        "Authorization": `Bearer ${userToken}`
      }
    }).then(() => {
      const updatedUserData = userData.filter(habit => habit.id !== id);
      setUserData(updatedUserData);
    })
  }

  return (
    <>
      <Header profileImage={retrievedData.data.image}/>
      <Habito>
        <Topo>
          <Texto color={"titulo"} font={"titulo"}>Meus hábitos</Texto>
          <AddButton onClick={() => setForm(true)}>+</AddButton>
        </Topo>
        <Main>
          {form && <FormHabito cancel={() => setForm(false)}/>}
          {userData.length > 0 ? userData.map((habito, index)=> (
            <NovoHabito key={index} delete={() => deleteHabito(habito.id)} diasSelecionados={habito.days} habito={habito.name} />)) :
            <Texto color={"sub"} font={"sub"}> 
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear! 
            </Texto>
          }
        </Main>
      </Habito>
      <Footer/>
    </>

  )
  


}
export default Habitos

const Main = styled.div`
  margin-top: 30px;
`
const Habito = styled.div`

padding: 100px 18px 100px;
`;

const Topo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;


`

const Texto = styled.div`
  font-size: ${props => props.font === "titulo" ? "23px" : "17px"};
  color: ${props => props.color === "titulo" ? "#126BA5" : "#666666"};
`;

const AddButton = styled.button`
  width: 40px;
  height: 35px;
  border-radius: 5px;
  background-color: #52B6FF;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding-bottom: 3px;
  font-size: 27px;
`

    



