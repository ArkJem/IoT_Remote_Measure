import {useState} from "react";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import HomeIcon from '@mui/icons-material/Home';
import LineChart from "../ChartsPg/LineChart";
import {Link} from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import ReadTempPage from "../ReadTempPg/ReadTempPage";
import Alert from "../Alerts/AlertPage";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ComaprePage from "../ComparePg/ComparePage";


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function DashboardPage() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [dash, setDash] = useState(true);
    const [chart, setChart] = useState(false);
    const [compare, setCompare] = useState(false);



    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const test = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('role');
        localStorage.removeItem('token');
        localStorage.removeItem('auth');
    };

    const handleDash = () =>{
        setDash(true);
        setChart(false);
        setCompare(false);

    };
    const handleChart = () =>{
        setChart(true);
        setDash(false);
        setCompare(false);

    };
    const handleCompare = () =>{
        setCompare(true);
        setChart(false);
        setDash(false);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Strona
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                        <ListItem onClick={() => handleDash()} disablePadding sx={{ display: 'block' }}>

                            <ListItemButton
                                sx={{
                                    color:'black',
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <HomeIcon />

                                </ListItemIcon>
                                <ListItemText primary={'Strona główna'}  sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>

                            <ListItem onClick={() => handleChart()} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    color:'black',
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <ShowChartIcon />

                                </ListItemIcon>
                                <ListItemText primary={'Wykresy'} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>

                    <ListItem onClick={() => handleCompare()} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                color:'black',
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <CompareArrowsIcon />

                            </ListItemIcon>
                            <ListItemText primary={'Wykresy'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem component={Link} to={'/'} onClick={() => test()} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                color:'black',
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <LogoutIcon />

                            </ListItemIcon>
                            <ListItemText primary={'Wyloguj się'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                </List>
                <Divider />

            </Drawer>
            <Box component="main" sx={{maxWidth:'80vw' ,marginTop:'5vh',marginLeft:'5vw',marginRight:'5vw', flexGrow: 1, p: 3 }}>
                {dash && <ReadTempPage/>}
                {chart && <LineChart/>}
                {compare && <ComaprePage/>}

            </Box>
        </Box>
    );
}