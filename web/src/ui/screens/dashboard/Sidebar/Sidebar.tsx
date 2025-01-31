import React from "react";
import {Menu as MenuIcon, X} from 'lucide-react';
import {
    IconWrapper,
    Logo,
    MenuButton,
    NavItem,
    NavItemContent,
    NavList,
    SidebarContainer,
    SidebarHeader,
    Title
} from "./Sidebar.styles";
import {sidebarItems} from "@/ui/screens/dashboard/Sidebar/SidebarItems";
import {SidebarItem} from "@/ui/screens/dashboard/Sidebar/SidebarItem";
import {usePresenter} from "@/ui/react/hooks/usePresenters";

const Sidebar: React.FC = () => {
    const presenter = usePresenter().sidebarPresenter;

    return (
        <>
            <MenuButton onClick={presenter.toggle}>
                {presenter.model.isOpen ? <X size={20}/> : <MenuIcon size={20}/>}
            </MenuButton>

            <SidebarContainer isopen={presenter.model.isOpen}>
                <SidebarHeader>
                    <Logo>Dashboard</Logo>
                </SidebarHeader>

                <NavList>
                    {sidebarItems.map((item: SidebarItem) => (
                        <React.Fragment key={item.title}>
                            <NavItem onClick={() => presenter.itemClicked(item)}>
                                <NavItemContent>
                                    <IconWrapper>{item.icon}</IconWrapper>
                                    <Title>{item.title}</Title>
                                </NavItemContent>
                            </NavItem>
                        </React.Fragment>
                    ))}
                </NavList>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;