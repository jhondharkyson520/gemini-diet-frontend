import styled from "styled-components";
import iconBack from '../../assets/icons/back.svg';
import iconUpdate from '../../assets/icons/update.svg';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/button";
import SelectComponent from "../../components/select";

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

const ContainerSelect = styled.div`
    display: flex;
    flex-direction: column;

    p{
        color: #FFFFFF;
    }

    button{
        margin-top: 1rem;
    }
`;

function Finish() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
            gender: '',
            level: '',
            objective: ''
    });

    const goBack = () => {
        navigate('/begin');
    };
    const goResult = () => {
        navigate('/result');
    };

    const cleanInputs = () => {
        setFormData({
            gender: '',
            level: '',
            objective: ''
        });
    };

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return(
        <ContainerMain>
            <ContainerBegin>
                <ContainerOptions>
                    <button onClick={goBack}><img src={iconBack} alt="Voltar" /></button>
                    <p>Passo 2</p>
                    <button onClick={cleanInputs}><img src={iconUpdate} alt="Atualizar" /></button>
                </ContainerOptions>
                <h1>Finalizando dieta</h1>
            </ContainerBegin>
            
            <ContainerSelect>
                <p>Sexo:</p>
                <SelectComponent name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="" disabled>Selecione</option>
                    <option value="male">Masculino</option>
                    <option value="female">Feminino</option>
                </SelectComponent>

                <p>Selecione o nível de atividade física:</p>
                <SelectComponent name="level" value={formData.level} onChange={handleChange}>
                    <option value="" disabled>Selecione</option>
                    <option value="sedentary">Sedentário (pouco ou nenhuma atividade física)</option>
                    <option value="mild">Levemente ativo (exercícios 1 a 3 vezes na semana)</option>
                    <option value="moderate">Moderadamente ativo (exercícios 3 a 5 vezes na semana)</option>
                    <option value="highly">Altamente ativo (exercícios 5 a 7 dias por semana)</option>
                </SelectComponent>

                <p>Selecione seu objetivo:</p>
                <SelectComponent name="objective" value={formData.objective} onChange={handleChange}>
                    <option value="" disabled>Selecione</option>
                    <option value="loseWeight">Emagrecer</option>
                    <option value="hypertrophy">Hipertrofia</option>
                    <option value="hypertrophyDefinition">Hipertrofia + Definição</option>
                    <option value="definition">Definição</option>
                </SelectComponent>

                <Button onClick={goResult}>Gerar dieta</Button>
            </ContainerSelect>
        </ContainerMain>
    )
}

export default Finish;
