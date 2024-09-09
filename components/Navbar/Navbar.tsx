"use client";

// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import { useState } from "react";

// const pages = ["Bookings", "Availability", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// const Navbar = () => {
//   const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static" color="transparent">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             BookMe
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: "block", md: "none" } }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography
//                     sx={{ textAlign: "center" }}
//                     className="text-slate-950"
//                   >
//                     {page}
//                   </Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography sx={{ textAlign: "center" }}>
//                     {setting}
//                   </Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// import { Menu } from 'antd';

// type MenuItem = Required<MenuProps>['items'][number];

// const items: MenuItem[] = [
//   {
//     label: 'Navigation One',
//     key: 'mail',
//     icon: <MailOutlined />,
//   },
//   {
//     label: 'Navigation Two',
//     key: 'app',
//     icon: <AppstoreOutlined />,
//     disabled: true,
//   },
//   {
//     label: 'Navigation Three - Submenu',
//     key: 'SubMenu',
//     icon: <SettingOutlined />,
//     children: [
//       {
//         type: 'group',
//         label: 'Item 1',
//         children: [
//           { label: 'Option 1', key: 'setting:1' },
//           { label: 'Option 2', key: 'setting:2' },
//         ],
//       },
//       {
//         type: 'group',
//         label: 'Item 2',
//         children: [
//           { label: 'Option 3', key: 'setting:3' },
//           { label: 'Option 4', key: 'setting:4' },
//         ],
//       },
//     ],
//   },
//   {
//     key: 'alipay',
//     label: (
//       <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//         Navigation Four - Link
//       </a>
//     ),
//   },
// ];

// const Navbar: React.FC = () => {
//   const [current, setCurrent] = useState('mail');

//   const onClick: MenuProps['onClick'] = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);
//   };

//   return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
// };

// export default Navbar;

import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
type MenuItem = Required<MenuProps>['items'][number];

const { Header, Content, Footer } = Layout;

// const items = new Array(15).fill(null).map((_, index) => ({
//   key: index + 1,
//   label: `nav ${index + 1}`,
// }));

const items: MenuItem[] = [
  {
    label: 'Bookings',
    key: 'bookings',
    icon: <MailOutlined />,
  },
  {
    label: 'Availability',
    key: 'availability',
    icon: <AppstoreOutlined />,
    // disabled: true,
  },
  {
    label: 'Contacts',
    key: 'contacts',
    icon: <AppstoreOutlined />,
    // disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          { label: 'Option 1', key: 'setting:1' },
          { label: 'Option 2', key: 'setting:2' },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          { label: 'Option 3', key: 'setting:3' },
          { label: 'Option 4', key: 'setting:4' },
        ],
      },
    ],
  },

];

// style={{ padding: '0 48px' }}
const App: React.FC = () => {
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();

  return (

      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
    
    
  );
};

export default App;