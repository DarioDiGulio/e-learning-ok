import {Home, LogOutIcon} from 'lucide-react';
import {SidebarItem} from "@/ui/screens/dashboard/Sidebar/SidebarItem";

export const sidebarItems: SidebarItem[] = [
    {
        title: 'Dashboard',
        icon: <Home/>,
        path: '/dashboard',
    },
    // {
    //     title: 'Analytics',
    //     icon: <BarChart2 size={20}/>,
    //     submenu: [
    //         {title: 'Reports', path: '/analytics/reports'},
    //         {title: 'Statistics', path: '/analytics/statistics'},
    //     ],
    // },
    {
        title: 'Cerrar Sesión',
        icon: <LogOutIcon />,
        path: '/logout',
    },
];