import './menu_header.css';
import {
  Flex,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Image
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FaFacebook, FaAirbnb, FaStackpath } from 'react-icons/fa';

function MenuHeader() {
  return (
    <Container className="menu-header" p={6} mt={6}>
      <Flex>
        <Button colorScheme="whiteAlpha" leftIcon={<FaStackpath />}></Button>

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
          <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
            Sign In
          </Button>
          <Button colorScheme="twitter" leftIcon={<FaAirbnb />}>
            Get Started
          </Button>
        </Box>
      </Flex>
    </Container>
  );
}

export default MenuHeader;
