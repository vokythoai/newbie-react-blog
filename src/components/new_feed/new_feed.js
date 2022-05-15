// import './new_feed/new_feed.css';
import { VStack, HStack, Container } from '@chakra-ui/react';
import NewFeedItem from './new_feed_item';

function NewFeed() {
  return (
    <Container>
      <VStack>
        <HStack>
          <NewFeedItem
            image="https://media.istockphoto.com/photos/closeup-portrait-of-funny-ginger-cat-wearing-sunglasses-isolated-on-picture-id1188445864?k=20&m=1188445864&s=612x612&w=0&h=0vuJeOxJr8Lu3Q1VdT1z7t6HcM8Oj7EVJe3CexGnH_8="
            title="Thoai title"
            short_description="Thoai short short_description"
          />
        </HStack>
        <HStack>
          <NewFeedItem
            image="https://media.istockphoto.com/photos/closeup-portrait-of-funny-ginger-cat-wearing-sunglasses-isolated-on-picture-id1188445864?k=20&m=1188445864&s=612x612&w=0&h=0vuJeOxJr8Lu3Q1VdT1z7t6HcM8Oj7EVJe3CexGnH_8="
            title="Thoai title"
            short_description="Thoai short short_description"
          />
        </HStack>
        <HStack>
          <NewFeedItem
            image="https://media.istockphoto.com/photos/closeup-portrait-of-funny-ginger-cat-wearing-sunglasses-isolated-on-picture-id1188445864?k=20&m=1188445864&s=612x612&w=0&h=0vuJeOxJr8Lu3Q1VdT1z7t6HcM8Oj7EVJe3CexGnH_8="
            title="Thoai title"
            short_description="Thoai short short_description"
          />
        </HStack>
      </VStack>

      <VStack>
        <HStack>
          <NewFeedItem
            image="https://media.istockphoto.com/photos/closeup-portrait-of-funny-ginger-cat-wearing-sunglasses-isolated-on-picture-id1188445864?k=20&m=1188445864&s=612x612&w=0&h=0vuJeOxJr8Lu3Q1VdT1z7t6HcM8Oj7EVJe3CexGnH_8="
            title="Thoai title"
            short_description="Thoai short short_description"
          />
        </HStack>
        <HStack>
          <NewFeedItem
            image="https://media.istockphoto.com/photos/closeup-portrait-of-funny-ginger-cat-wearing-sunglasses-isolated-on-picture-id1188445864?k=20&m=1188445864&s=612x612&w=0&h=0vuJeOxJr8Lu3Q1VdT1z7t6HcM8Oj7EVJe3CexGnH_8="
            title="Thoai title"
            short_description="Thoai short short_description"
          />
        </HStack>
        <HStack>
          <NewFeedItem
            image="https://media.istockphoto.com/photos/closeup-portrait-of-funny-ginger-cat-wearing-sunglasses-isolated-on-picture-id1188445864?k=20&m=1188445864&s=612x612&w=0&h=0vuJeOxJr8Lu3Q1VdT1z7t6HcM8Oj7EVJe3CexGnH_8="
            title="Thoai title"
            short_description="Thoai short short_description"
          />
        </HStack>
      </VStack>
    </Container>
  );
}

export default NewFeed;
