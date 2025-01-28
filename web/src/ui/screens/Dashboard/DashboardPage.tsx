import React, {useState} from "react";
import {DashboardStyles} from "@/ui/screens/Dashboard/DashboardPageStyles";
import {usePresenter} from "@/ui/react/hooks/usePresenters";
import {CursosPage} from "@/ui/screens/Sections/Cursos/CursosPage";
import {MediosDePagoPage} from "@/ui/screens/Sections/MediosDePago/MediosDePagoPage";

const DashboardPage: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const presenter = usePresenter().dashboardPresenter;

    return (
        <DashboardStyles.Container>
            <DashboardStyles.Sidebar isOpen={isSidebarOpen}>
                <DashboardStyles.Hamburger onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    ☰
                </DashboardStyles.Hamburger>
                <DashboardStyles.Nav>
                    <DashboardStyles.Button onClick={() => presenter.changeSection('cursos')}>Cursos</DashboardStyles.Button>
                    <DashboardStyles.Button onClick={() => presenter.changeSection('medios-de-pago')}>Medios de Pago</DashboardStyles.Button>
                    <DashboardStyles.Button onClick={presenter.logout}>Cerrar Sesión</DashboardStyles.Button>
                </DashboardStyles.Nav>
            </DashboardStyles.Sidebar>
            <DashboardStyles.Main>
                <DashboardStyles.Header>
                    <DashboardStyles.Hamburger onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
                        ☰
                    </DashboardStyles.Hamburger>
                    <DashboardStyles.Title>Título de la Sección</DashboardStyles.Title>
                </DashboardStyles.Header>
                <DashboardStyles.Content>
                    {presenter.model.section === "cursos" && <CursosPage/>}
                    {presenter.model.section === "medios-de-pago" && <MediosDePagoPage/>}
                </DashboardStyles.Content>
            </DashboardStyles.Main>
        </DashboardStyles.Container>
    );
};

export default DashboardPage;
