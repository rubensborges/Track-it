import styled  from "styled-components";
const Input = (props) => {
  return (
    <Inputs value={props.value} onChange={(e) => props.onchange(e.target.value)} type={props.type} placeholder={props.placeholder} />
  )
}
export default Input;

const Inputs = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgba(212, 212, 212, 1);
  background-color: rgba(255, 255, 255, 1);
  height: 45px;
  padding: 12px;
  font-size: 20px;
  &::placeholder{
    font-size: 20px;
    color: #DBDBDB;
    font-family: Lexend Deca;
  }


`