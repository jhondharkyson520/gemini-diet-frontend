import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';

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

function Home() {
  const navigate = useNavigate();
  const goDiet = () => {
    navigate("/begin");
  };

  return (
    <ContainerMain>
      <img src={logo} alt="Logo" />
      <Title>Dieta com IA</Title>
      <Description>Sua dieta personalizada com inteligência artificial 🍴</Description>
      <Button onClick={goDiet}>Gerar dieta</Button>
    </ContainerMain>
  )
}

export default Home;

