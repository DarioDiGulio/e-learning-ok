import React from "react";
import {Card, CardTitle, DashboardGrid, Layout, Main, StatsValue} from "@/ui/screens/dashboard/Layout/Dashboard.styles";
import {usePresenter} from "@/pages/_hooks/usePresenters";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const DashboardPage: React.FC = () => {
    const presenter = usePresenter().dashboardPresenter;

    return (
        <Layout>
            <Sidebar />
            <Header />
            <Main>
                <DashboardGrid>
                    <Card>
                        <CardTitle>Total Users</CardTitle>
                        <StatsValue>12,345</StatsValue>
                    </Card>
                    <Card>
                        <CardTitle>Revenue</CardTitle>
                        <StatsValue>$45,678</StatsValue>
                    </Card>
                    <Card>
                        <CardTitle>Active Projects</CardTitle>
                        <StatsValue>23</StatsValue>
                    </Card>
                </DashboardGrid>

                <Card>
                    <CardTitle>Recent Activity</CardTitle>
                    <p>Your dashboard content goes here...</p>
                </Card>
            </Main>
        </Layout>
    );
};

export default DashboardPage;
