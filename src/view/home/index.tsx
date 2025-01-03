import styled from 'styled-components';
import logo from '../../assets/logo.svg';

const ContainerMain = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #FFFFFF;
`;

const Description = styled.p`
  color: #FFFFFF;
  font-size: 20px;
  text-align: center;
`;

const ButtonContainer = styled.button`
  cursor: pointer;
  width: 350px;
  height: 44px;
  background-color: #009AD6;
  border: none;
  color: #FFFFFF;
  border-radius: 8px;
  transition: 1s;

  &:hover{
    background-color: #0880af;
    transform: scale(1.05);
  }
`;

function Home() {
  
  return (
    <ContainerMain>
      <img src={logo} alt="Logo" />
      <Title>Dieta com IA</Title>
      <Description>Sua dieta personalizada com inteligência artificial 🍴</Description>
      <ButtonContainer>Gerar dieta</ButtonContainer>
    </ContainerMain>
  )
}

export default Home;

