import styled from "styled-components";

const NovoHabito = (props) => {
  
  const dias = [
    {dia: "D", indexDoDia: 0},
    {dia: "S", indexDoDia: 1},
    {dia: "T", indexDoDia: 2},
    {dia: "Q", indexDoDia: 3},
    {dia: "Q", indexDoDia: 4},
    {dia: "S", indexDoDia: 5},
    {dia: "S", indexDoDia: 6}
  ]
  
  return (
    <Corpo>
      <Texto>
        {props.habito}
      </Texto>
      <CenterBoxDias> 
        {dias.map(dia => (
          <BoxDias $color={props.diasSelecionados.includes(dia.indexDoDia)} key={dia.indexDoDia}>
            {dia.dia}
          </BoxDias> 
        ))}
      </CenterBoxDias>
      <Lixeira onClick={props.delete} src="src/assets/Group.png"></Lixeira>
    </Corpo>
  )
}



export default NovoHabito;

const Corpo = styled.div`
  max-width: 340px;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 0 auto;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  margin-bottom: 8px;
`;

const CenterBoxDias = styled.div`
display: flex;
width: 100%;
gap: 5px;
`

const Lixeira = styled.img`
  width: 13px;
  height: 15px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`

const Texto = styled.div`
  font-size: 20px;
  color: #666666;

`;

const BoxDias = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: ${props => props.$color ? "#cfcfcf" : "white"};
  border: 1px solid #d4d4d4;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.$color ? "white" : "#dbdbdb"};
`