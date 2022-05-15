import { Box, Container, Heading, Image } from '@chakra-ui/react';

function NewFeedItem(props) {
  return (
    <Container className="new-feed-item">
      <Box>
        <Image src={props.image} />
        <Heading>{props.title}</Heading>
        <Heading>{props.short_desciprtion}</Heading>
      </Box>
    </Container>
  );
}

export default NewFeedItem;
