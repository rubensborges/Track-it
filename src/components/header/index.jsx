import styled from "styled-components";

const Header = (props) => {
  return (
    <Head>
      <Logo>
        <img src="src/assets/TrackIt.png" alt="" />
      </Logo>
      <ProfilePic>
        <img src={props.profileImage} alt="" /> 
      </ProfilePic>
    </Head>
  )
}

export default Header;

const Head = styled.div`
  width: 100%;
  background-color: #126BA5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  position: fixed;
  top: 0;
  z-index: 3;
  padding: 18px;
  box-shadow: 0px 4px 4px 0px #00000026;

`;

const Logo = styled.div`
  max-width: 97px;
  img{
    width: 100%;
  }
`;

const ProfilePic = styled.div`
  width: 51px;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 100%;
    height: 100%;
    border-radius: 98px;

  }
`
  