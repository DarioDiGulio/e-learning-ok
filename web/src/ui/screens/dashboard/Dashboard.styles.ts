import styled from "styled-components";

export const Layout = styled.div`
    min-height: 100vh;
    background-color: var(--background);
`;

export const Main = styled.main`
    margin-left: var(--sidebar-width);
    padding: calc(var(--header-height) + 2rem) 2rem 2rem;

    @media (max-width: 768px) {
        margin-left: 0;
        padding: calc(var(--header-height) + 1rem) 1rem 1rem;
    }
`;

export const DashboardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 1.5rem;
`;

export const Card = styled.div`
    background: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const CardTitle = styled.h3`
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
`;

export const StatsValue = styled.div`
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-color);
`;