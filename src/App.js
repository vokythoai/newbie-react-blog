import './App.css';
import { Container } from '@chakra-ui/react';
import MenuHeader from './components/header/menu_header';
import Categories from './components/categories/category';
import NewFeed from './components/new_feed/new_feed';
import Footer from './components/footer/footer';

function App() {
  return (
    <Container className="App">
      <MenuHeader />
      <Categories />
      <NewFeed />
      <Footer />
    </Container>
  );
}

export default App;
