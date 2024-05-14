import { Container, VStack, HStack, Box, Text, Avatar, Input, Button, IconButton, Divider } from "@chakra-ui/react";
import { FaTwitter, FaRegComment, FaRetweet, FaHeart, FaShareSquare } from "react-icons/fa";

const tweets = [
  {
    id: 1,
    user: {
      name: "John Doe",
      username: "@johndoe",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE1NjQ2ODIzfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    content: "This is my first tweet!",
    timestamp: "2h",
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      username: "@janesmith",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTU2NDY4MjR8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    content: "Hello Twitter!",
    timestamp: "3h",
  },
];

const Tweet = ({ tweet }) => (
  <Box w="100%" p={4} borderBottom="1px" borderColor="gray.200">
    <HStack align="start" spacing={4}>
      <Avatar src={tweet.user.avatar} />
      <VStack align="start" spacing={1}>
        <HStack spacing={2}>
          <Text fontWeight="bold">{tweet.user.name}</Text>
          <Text color="gray.500">{tweet.user.username}</Text>
          <Text color="gray.500">· {tweet.timestamp}</Text>
        </HStack>
        <Text>{tweet.content}</Text>
        <HStack spacing={6} pt={2}>
          <IconButton aria-label="Comment" icon={<FaRegComment />} variant="ghost" />
          <IconButton aria-label="Retweet" icon={<FaRetweet />} variant="ghost" />
          <IconButton aria-label="Like" icon={<FaHeart />} variant="ghost" />
          <IconButton aria-label="Share" icon={<FaShareSquare />} variant="ghost" />
        </HStack>
      </VStack>
    </HStack>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.md" p={0}>
      <VStack spacing={0} align="stretch">
        <HStack p={4} borderBottom="1px" borderColor="gray.200" justify="space-between">
          <FaTwitter color="#1DA1F2" size="32px" />
          <Text fontSize="2xl" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <Box p={4} borderBottom="1px" borderColor="gray.200">
          <HStack spacing={4}>
            <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNTU5NDMxNXww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Input placeholder="What's happening?" variant="unstyled" />
          </HStack>
          <HStack justify="flex-end" pt={2}>
            <Button colorScheme="twitter">Tweet</Button>
          </HStack>
        </Box>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
