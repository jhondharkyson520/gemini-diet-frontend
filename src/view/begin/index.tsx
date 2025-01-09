import styled from 'styled-components';
import iconBack from '../../assets/icons/back.svg';
import iconUpdate from '../../assets/icons/update.svg';
import Button from '../../components/button';
import { useNavigate } from 'react-router-dom';
import InputComponent from '../../components/input';
import { useState } from 'react';
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    border-radius: 0 0 3rem 3rem;
`;

const ContainerOptions = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    
    img{
        padding-left: 1rem;
        padding-right: 1rem;
    }

    button{
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`;

const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;

    p{
        color: #FFFFFF;
    }

    button{
        margin-top: 1rem;
    }
`;

function Begin() {
    const navigate = useNavigate(); 
    const {dietData, setDietData} = useDiet();

    const goFinish = () => { 
        if(dietData.name === '' || dietData.weight === '' || dietData.height === '' || dietData.age === ''){
            alert('Preencha todos os campos!');
            return;
        } 
        navigate('/finish');
    };
    const goBack = () => {        
        navigate('/');
    };

    const cleanInputs = () => {
        setDietData({
            name: '',
            weight: '',
            height: '',
            age: '',
            gender: dietData.gender,
            level: dietData.level,
            objective: dietData.objective
        });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setDietData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };    

    return(
        <ContainerMain>
            <ContainerBegin>
                <ContainerOptions>
                    <button onClick={goBack}><img src={iconBack} alt="Voltar" /></button>
                    <p>Passo 1</p>
                    <button onClick={cleanInputs}><img src={iconUpdate} alt="Atualizar" /></button>
                </ContainerOptions>
                <h1>Vamos começar</h1>
            </ContainerBegin>

            <ContainerInputs>
                <p>Nome:</p>
                <InputComponent type="text" name='name' value={dietData.name} onChange={handleInputChange} placeholder="Nome completo" />

                <p>Seu peso atual:</p>
                <InputComponent type="text" name='weight' value={dietData.weight} onChange={handleInputChange} placeholder="Peso atual" />

                <p>Altura:</p>
                <InputComponent type="text" name='height' value={dietData.height} onChange={handleInputChange} placeholder="Sua altura" />

                <p>Idade:</p>
                <InputComponent type="text" name='age' value={dietData.age} onChange={handleInputChange} placeholder="Sua idade" />

                <Button onClick={goFinish}>Avançar</Button>
            </ContainerInputs>
        </ContainerMain>
    )
}

export default Begin;
