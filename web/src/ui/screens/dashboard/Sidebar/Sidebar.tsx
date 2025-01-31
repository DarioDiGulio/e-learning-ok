import React, {useState} from "react";
import {ChevronDown, ChevronRight, Menu as MenuIcon, X} from 'lucide-react';
import {
    IconWrapper,
    Logo,
    MenuButton,
    NavItem,
    NavItemContent,
    NavList,
    SidebarContainer,
    SidebarHeader,
    Submenu,
    SubmenuItem,
    Title
} from "./Sidebar.styles";
import {sidebarItems} from "@/ui/screens/dashboard/Sidebar/SidebarItems";
import {SidebarItem} from "@/ui/screens/dashboard/Sidebar/SidebarItem";

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    const toggleSubmenu = (title: string) => {
        setExpandedItems(prev =>
            prev.includes(title)
                ? prev.filter(item => item !== title)
                : [...prev, title]
        );
    };

    return (
        <>
            <MenuButton onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={20}/> : <MenuIcon size={20}/>}
            </MenuButton>

            <SidebarContainer isopen={isOpen}>
                <SidebarHeader>
                    <Logo>Dashboard</Logo>
                </SidebarHeader>

                <NavList>
                    {sidebarItems.map((item) => (
                        <React.Fragment key={item.title}>
                            <NavItem onClick={() => item.submenu && toggleSubmenu(item.title)}>
                                <NavItemContent>
                                    <IconWrapper>{item.icon}</IconWrapper>
                                    <Title>{item.title}</Title>
                                    {item.submenu && (
                                        expandedItems.includes(item.title)
                                            ? <ChevronDown size={16}/>
                                            : <ChevronRight size={16}/>
                                    )}
                                </NavItemContent>
                            </NavItem>

                            {item.submenu && expandedItems.includes(item.title) && (
                                <Submenu>
                                    {item.submenu.map((subItem: SidebarItem) => (
                                        <SubmenuItem key={subItem.title}>
                                            {subItem.title}
                                        </SubmenuItem>
                                    ))}
                                </Submenu>
                            )}
                        </React.Fragment>
                    ))}
                </NavList>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;