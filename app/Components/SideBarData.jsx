import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PublicIcon from '@mui/icons-material/Public';
import ApartmentIcon from '@mui/icons-material/Apartment';
//https://mui.com/material-ui/material-icons/?query=compan
export const SideBarData = [
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: "/dashboard"
    },
    {
        title: "Pedidos",
        icon: <InventoryIcon />,
        link: "/pedidos"
    },
    {
        title: "Reportes",
        icon: <AutoGraphIcon />,
        link: "/reportes"
    },
    {
        title: "Tienda Nacional",
        icon: <StorefrontIcon />,
        link: "/tienda-nacional"
    },
    {
        title: "Tienda Interancional",
        icon: <PublicIcon />,
        link: "/tienda-internacional"
    },
    {
        title: "Empresa",
        icon: <ApartmentIcon />,
        link: "/empresa"
    },
]