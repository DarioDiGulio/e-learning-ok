import styled from "styled-components";

const Container = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: #f3f4f6;
`;

const Sidebar = styled.div<{ isOpen: boolean }>`
    width: 25%;
    background-color: #1f2937;
    color: white;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease-in-out;

    @media (max-width: 768px) {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 200px;
        transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(-100%)")};
        z-index: 10;
    }
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding: 2rem;

    @media (max-width: 768px) {
        margin-top: 4rem;
    }
`;

const Button = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    text-align: left;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background-color: #374151;
        border-radius: 8px;
    }
`;

const Main = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const Header = styled.header`
    background-color: #ffffff;
    border-bottom: 1px solid #e5e7eb;
    padding: 1rem 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Hamburger = styled.button`
    background: none;
    border: none;
    color: #1f2937;
    font-size: 1.5rem;
    cursor: pointer;

    @media (min-width: 769px) {
        display: none;
    }
`;

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    color: #1f2937;
`;

const Content = styled.div`
    flex: 1;
    padding: 2rem;
    background-color: white;
`;

export const DashboardStyles = {
    Container,
    Sidebar,
    Hamburger,
    Nav,
    Button,
    Main,
    Header,
    Title,
    Content,
}