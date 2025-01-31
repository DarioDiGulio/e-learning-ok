import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: var(--header-height);
    background: white;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    position: fixed;
    top: 0;
    right: 0;
    left: var(--sidebar-width);
    z-index: 100;

    @media (max-width: 768px) {
        left: 0;
        padding: 0 1rem 0 4rem;
    }
`;

export const SearchBar = styled.div`
    display: flex;
    align-items: center;
    background: var(--background);
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    width: 300px;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const SearchInput = styled.input`
    border: none;
    background: none;
    margin-left: 0.5rem;
    outline: none;
    width: 100%;
    color: var(--text-primary);

    &::placeholder {
        color: var(--text-secondary);
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: auto;
`;

export const IconButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: var(--text-secondary);
    transition: all 0.2s ease;

    &:hover {
        background: var(--background);
        color: var(--primary-color);
    }
`;
