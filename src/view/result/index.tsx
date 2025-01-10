import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import iconExport from '../../assets/icons/export.svg';
import iconCutlery from '../../assets/icons/cutlery.svg';
import iconClock from '../../assets/icons/clock.svg';
import imgLogo from '../../assets/pdfImage/logo.png';
import Button from '../../components/button';
import jsPDF from 'jspdf';

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
    margin-bottom: 1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
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
    
    const exportToPdf = () => {
        const doc = new jsPDF();
        const resultDiet = location.state;
        const img = new Image();
        img.src = imgLogo;

        img.onload = () => {
            const imgWidth = 50; 
            const imgHeight = (img.height * imgWidth) / img.width;
            const pageWidth = doc.internal.pageSize.width;
            const centerX = (pageWidth - imgWidth) / 2;
            doc.addImage(img, 'PNG', centerX, 10, imgWidth, imgHeight);
            doc.setFontSize(18);
            doc.setFont('helvetica', 'bold');
            doc.text("Minha Dieta", 10, 20);
            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.text(`Foco: ${resultDiet.data.objetivo}`, 20, 30);
            doc.setFont('helvetica', 'bold');
            doc.text("Refeições:", 20, 40);            
            let yPosition = 50;

            resultDiet.data.refeicoes.forEach((snack: any, index: number) => {
                if (yPosition > 270) {
                    doc.addPage();
                    yPosition = 20;
                }

                doc.setFont('helvetica', 'bold');
                doc.text(`${snack.nome}`, 20, yPosition);
                yPosition += 10;
                doc.setFont('helvetica', 'bold');
                doc.text(`Horário: ${snack.horario}`, 20, yPosition);
                yPosition += 10;

                snack.alimentos.forEach((food: string, foodIndex: number) => {
                    doc.setFont('helvetica', 'normal');
                    doc.text(`- ${food}`, 20, yPosition);
                    yPosition += 10;
                });
                yPosition += 10;
            });        
            doc.save(`dieta${resultDiet.data.nome}.pdf`);
        };
    };

    const goHome = () => {
        navigate('/');
    };    

    return(
        <ContainerMain>
            <ContainerBegin>                
                <h1>Minha dieta</h1>
                <ButtonExport onClick={exportToPdf}>Exportar<img src={iconExport} alt="Exportar"/></ButtonExport>
            </ContainerBegin>

            <ContainerInformations>
                <h1>{resultDiet.data.nome}</h1>
                <p>Foco: {resultDiet.data.objetivo}</p>
                
                <h2>Refeições</h2>
            </ContainerInformations>

            <ContainerDiet>
                {resultDiet.data.refeicoes.map((snack: any, index: string) => (                    
                    <ContainerMeals key={index}>
                        <Title>
                            <h3>{snack.nome}</h3> 
                            <img src={iconCutlery} alt="Talheres"/>
                        </Title>
                        <HourMeal>
                            <img src={iconClock} alt="Relógio" />
                            <strong>Horário: {snack.horario}</strong>
                        </HourMeal>
                        <h3>Alimentos</h3>
                        {snack.alimentos.map((food: any, index: string) => (
                            <p key={index}>{food}</p>
                        ))}
                    </ContainerMeals>                  
                ))}
                
                <Button onClick={goHome}>Nova dieta</Button>
            </ContainerDiet>

        </ContainerMain>
    )
}

export default Result;
