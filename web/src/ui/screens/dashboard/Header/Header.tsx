import React from "react";
import {
    Actions,
    HeaderContainer,
    IconButton,
    SearchBar,
    SearchInput
} from "@/ui/screens/dashboard/Header/Header.styles";
import { Bell, Search, User } from 'lucide-react';


const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <SearchBar>
                <Search size={20} color="var(--text-secondary)" />
                <SearchInput placeholder="Search..." />
            </SearchBar>
            <Actions>
                <IconButton>
                    <Bell size={20} />
                </IconButton>
                <IconButton>
                    <User size={20} />
                </IconButton>
            </Actions>
        </HeaderContainer>
    );
};

export default Header;