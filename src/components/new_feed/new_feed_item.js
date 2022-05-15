import { Box, Container, Heading, Image } from '@chakra-ui/react';

function NewFeedItem(props) {
  return (
    <Container className="new-feed-item" p={6}>
      <Box borderRadius="lg" backdropBlur="lg" backgroundColor="tomato">
        <Image borderRadius="lg" src={props.image} />
        <Heading>{props.title}</Heading>
        <Heading>{props.short_description}</Heading>
      </Box>
    </Container>
  );
}

export default NewFeedItem;
