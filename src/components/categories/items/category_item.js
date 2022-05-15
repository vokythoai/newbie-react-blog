import { Box, Container, Image, Heading } from '@chakra-ui/react';

function CategoryItem(props) {
  return (
    <Container ml={6} mr={6}>
      <Box
        p={6}
        mb={6}
        mt={6}
        borderRadius="lg"
        align="center"
        bg="white"
        className="category_item"
      >
        <Image src="https://media.istockphoto.com/photos/closeup-portrait-of-funny-ginger-cat-wearing-sunglasses-isolated-on-picture-id1188445864?k=20&m=1188445864&s=612x612&w=0&h=0vuJeOxJr8Lu3Q1VdT1z7t6HcM8Oj7EVJe3CexGnH_8="></Image>
        <Heading>{props.title}</Heading>
        <Heading fontSize="x1">{props.content}</Heading>
      </Box>
    </Container>
  );
}

export default CategoryItem;
