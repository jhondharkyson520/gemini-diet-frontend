import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import iconExport from '../../assets/icons/export.svg';
import iconCutlery from '../../assets/icons/cutlery.svg';
import iconClock from '../../assets/icons/clock.svg';
import Button from '../../components/button';
import { useDiet } from '../../context/DietContext';

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ContainerBegin = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;    
    border-radius: 0 0 3rem 3rem;
`;

const ButtonExport = styled.button`
    border: none;
    width: 121px;
    height: 29px;
    color: #FFFFFF;
    background-color: #009AD6;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 0.5rem;
    transition: 1s;

    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
`;

const ContainerInformations = styled.div`
    width: 358px;
    color: #FFFFFF;
`;

const ContainerDiet = styled.div`
    background-color: #FFFFFF;
    width: 358px;
    padding: 1rem;
    border-radius: 1rem;
`;

const ContainerMeals = styled.div`
    background-color: #D0D0D066;
    padding: 1rem;
    border-radius: 0.5rem;
`;

const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const HourMeal = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    
    img{
        margin-right: 1rem;
    }
`;

function Result() {
    const navigate = useNavigate();
    const location = useLocation();
    const resultDiet = location.state;
    const goHome = () => {
        navigate('/');
    };    

    return(
        <ContainerMain>
            <ContainerBegin>                
                <h1>Minha dieta</h1>
                <ButtonExport>Exportar<img src={iconExport} alt="Exportar"/></ButtonExport>
            </ContainerBegin>

            <ContainerInformations>
                <h1>{resultDiet.data.nome}</h1>
                <p>Foco: {resultDiet.data.objetivo}</p>
                
                <h2>Refeições</h2>
            </ContainerInformations>

            <ContainerDiet>
                <ContainerMeals>
                    <Title>
                        <h3>{resultDiet.data.refeicoes[0].nome}</h3> 
                        <img src={iconCutlery} alt="Talheres"/>
                    </Title>
                    <HourMeal>
                        <img src={iconClock} alt="Relógio" />
                        <strong>Horário: {resultDiet.data.refeicoes[0].horario}</strong>
                    </HourMeal>
                    <h3>Alimentos</h3>
                    <p>{resultDiet.data.refeicoes[0].alimentos[0]}</p>
                    <p>{resultDiet.data.refeicoes[0].alimentos[1]}</p>
                    <p>{resultDiet.data.refeicoes[0].alimentos[2]}</p>
                    <p>{resultDiet.data.refeicoes[0].alimentos[3]}</p>
                </ContainerMeals>
                <br />
                <ContainerMeals>
                    <Title>
                        <h3>{resultDiet.data.refeicoes[1].nome}</h3> 
                        <img src={iconCutlery} alt="Talheres"/>
                    </Title>
                    <HourMeal>
                        <img src={iconClock} alt="Relógio" />
                        <strong>Horário: {resultDiet.data.refeicoes[1].horario}</strong>
                    </HourMeal>
                    <h3>Alimentos</h3>
                    <p>{resultDiet.data.refeicoes[1].alimentos[0]}</p>
                    <p>{resultDiet.data.refeicoes[1].alimentos[1]}</p>
                    <p>{resultDiet.data.refeicoes[1].alimentos[2]}</p>
                    <p>{resultDiet.data.refeicoes[1].alimentos[3]}</p>
                </ContainerMeals>
                <br />
                <Button onClick={goHome}>Nova dieta</Button>
            </ContainerDiet>

        </ContainerMain>
    )
}

export default Result;
