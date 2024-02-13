import styled from "styled-components"

const TextoLink = (props) => {
  return (
    <Texto>{props.texto}</Texto>
  )
}
export default TextoLink;

const Texto = styled.div`
  color: #52B6FF;
  font-size: 14px;
  text-align: center;
  margin-top: 25px;
  font-weight: 300;
  text-decoration: underline;
  cursor: pointer;
`