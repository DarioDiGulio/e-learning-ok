import styled from "styled-components";

export const SidebarContainer = styled.aside<{ isopen: boolean }>`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: var(--sidebar-width);
    background: white;
    border-right: 1px solid var(--border-color);
    transform: translateX(${props => props.isopen ? '0' : '-100%'});
    transition: transform 0.3s ease-in-out;
    z-index: 1000;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const SidebarHeader = styled.div`
    height: var(--header-height);
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    border-bottom: 1px solid var(--border-color);
`;

export const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-color);
`;

export const MenuButton = styled.button`
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 1001;
    background: white;
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
    padding: 0.5rem;
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const NavList = styled.nav`
    padding: 1rem 0;
    overflow-y: auto;
    height: calc(100% - var(--header-height));
`;

export const NavItem = styled.div`
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: var(--text-secondary);
    transition: all 0.2s ease;

    &:hover {
        background: var(--background);
        color: var(--primary-color);
    }
`;

export const NavItemContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const IconWrapper = styled.span`
    margin-right: 0.75rem;
    display: flex;
    align-items: center;
`;

export const Title = styled.span`
    flex: 1;
`;

export const Submenu = styled.div`
    padding-left: 2.5rem;
    background: var(--background);
`;

export const SubmenuItem = styled.div`
    padding: 0.5rem 1rem;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        color: var(--primary-color);
    }
`;