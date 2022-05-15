import './App.css';
import { Container } from '@chakra-ui/react';
import MenuHeader from './components/header/menu_header';
import Categories from './components/categories/category';
import NewFeed from './components/new_feed/new_feed';

function App() {
  return (
    <Container className="App">
      <MenuHeader />
      <Categories />
      <NewFeed />
    </Container>
  );
}

export default App;
