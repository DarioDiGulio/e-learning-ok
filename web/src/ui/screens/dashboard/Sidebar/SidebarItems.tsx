import {Home, Users, Settings, BarChart2, Mail} from 'lucide-react';

export const sidebarItems: SidebarItem[] = [
    {
        title: 'Dashboard',
        icon: <Home size={20}/>,
    },
    {
        title: 'Analytics',
        icon: <BarChart2 size={20}/>,
        submenu: [
            {title: 'Reports', path: '/analytics/reports'},
            {title: 'Statistics', path: '/analytics/statistics'},
        ],
    },
    {
        title: 'Users',
        icon: <Users size={20}/>,
    },
    {
        title: 'Messages',
        icon: <Mail size={20}/>,
    },
    {
        title: 'Settings',
        icon: <Settings size={20}/>,
    },
];