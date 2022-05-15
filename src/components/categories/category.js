import './categories.css';
import { 
  HStack
} from '@chakra-ui/react';
import CategoryItem from './items/category_item';

function Categories() {
  return (
    <HStack spacing='24px' className="categories" >
      <CategoryItem
        title='Data Structure'>
      </CategoryItem>
      <CategoryItem
        title='Algorithm'>
      </CategoryItem>
      <CategoryItem
        title='Database'>
      </CategoryItem>
   </HStack>
  )
}

export default Categories;
