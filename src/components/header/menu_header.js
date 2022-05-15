import './menu_header.css';
import { Container, Menu, MenuButton, MenuList, MenuItem, Button, Box, Image } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

function MenuHeader() {
  return (
    <Container className="menu-header">
      <Box className="menu-header__menu-icon">
        <Image src="" alt="" />
      </Box>
      <Box className="menu-header__menu-bar">
        
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Projects
          </MenuButton>

          <MenuList>
            <MenuItem> Project_1 </MenuItem>
            <MenuItem> Project 2 </MenuItem>
            <MenuItem> Project 3 </MenuItem>
            <MenuItem> Project 4 </MenuItem>
            <MenuItem> Project 5 </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}> 
            Blogs 
          </MenuButton>
          <MenuList>
            <MenuItem> Data Structure </MenuItem>
            <MenuItem> Algorithm </MenuItem>
            <MenuItem> Architecture Design </MenuItem>
            <MenuItem> Database </MenuItem>
            <MenuItem> Ultilities </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Box className="menu-header__menu-button">
        <Button> Sign In </Button>
        <Button> Get Started </Button>
      </Box>
    </Container>
  );
}

export default MenuHeader;
