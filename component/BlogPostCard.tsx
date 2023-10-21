import React from 'react';
import {
    Box,
    HStack,
    VStack,
    Link,
    Text,
    Avatar,
    useColorModeValue,
    SimpleGrid,
    Image,
    Heading,
    Flex,
    Spacer,
    IconButton,
} from '@chakra-ui/react';
import type Post from '@/interfaces/post'
import DateFormatter from './DateFormatter';
import XIcon from './Icon/x-icon';

type Props = {
    posts: Post[]
}

const BlogPostCard = ({ posts }: Props) => {
    return (
        <Box p={{base: 4, md: 6}} bg={useColorModeValue('gray.100', '#181717')}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
                {posts.map((post, index) => (
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    <Box bgColor={useColorModeValue('gray.50', 'blackAlpha.200')} key={index} p={5} rounded="md">
                        <Image mb={5} maxHeight={'100px'} rounded={'lg'} width={'100%'} src={post.coverImage} alt={post.title} />
                        <VStack spacing={2} mb={5} textAlign="left">
                            <Heading as={Link} href={`/blog/${post.slug}`} _hover={{ textDecoration: 'none' }} mb={2} fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
                                {post.title}
                            </Heading>
                        </VStack>
                        <HStack as={Flex} gap={2} spacing={5} alignItems="center">
                            <Avatar size="md" title={post.author.name} src={post.author.picture} />
                            <Box>
                                <Text as={'a'} href={`/${post.author.handle}`} _hover={{ textDecoration: 'none', color: 'goldenrod'}} fontWeight="bold">{post.author.name}</Text>
                                <Text fontSize="sm" color="gray.500">
                                    <DateFormatter dateString={post.date} />
                                </Text>
                            </Box>
                            <Spacer />
                            <IconButton href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${post.title}\n\nBy @wsync_xyz`)}&url=${encodeURIComponent(`\n\nhttps://wsync.xyz/blog/${post.slug}`)}`} as={'a'} target={'_blank'} bg={'unset'} _hover={{ bg: 'none', textDecoration: 'none' }} aria-label='Share to X' icon={<XIcon height={'30'} width={'30'} />} />
                        </HStack>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default BlogPostCard;