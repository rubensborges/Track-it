import { styled } from "styled-components";
const Botao = (props) => {
  return (
    <Button onClick={props.onclick}>
      {props.children}
    </Button>
  )
}

export default Botao;

const Button = styled.button`
  max-width: 303px;
  width: 90%;
  border-radius: 5px;
  background-color: #52B6FF;
  color: white;
  height: 45px;
  font-size: 20px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`