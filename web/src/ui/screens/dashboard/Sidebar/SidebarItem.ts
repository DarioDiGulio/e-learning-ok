import React from "react";

export interface SidebarItem {
    title: string;
    icon: React.ReactNode;
    submenu?: SubmenuItem[];
}

export interface SubmenuItem {
    title: string;
    path: string;
}
