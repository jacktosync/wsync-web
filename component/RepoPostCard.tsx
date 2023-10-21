import React from 'react';
import {
    Box,
    HStack,
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
    Stack,
} from '@chakra-ui/react';
import type Repo from '@/interfaces/repo'
import DateFormatter from './DateFormatter';
import XIcon from './Icon/x-icon';

type Props = {
    repos: Repo[]
}

const RepoPostCard = ({ repos }: Props) => {
    return (
        <Box p={{base: 4, md: 6}} bg={useColorModeValue('gray.100', '#181717')}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
                {repos.map((repo, index) => (
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    <Box bgColor={useColorModeValue('gray.50', 'blackAlpha.200')} key={index} p={5} rounded="md">
                        <Image mb={5} maxHeight={'100px'} rounded={'lg'} width={'100%'} src={repo.ogImage} alt={repo.title} />
                        <Stack spacing={2} direction={'column'} mb={5} textAlign="left">
                            {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
                            <Text fontWeight={'bold'} color={useColorModeValue('#34a853', 'goldenrod')}>Est Price: ${repo.price} USD</Text>
                            <Heading as={Link} href={`/portfolio/${repo.slug}`} _hover={{ textDecoration: 'none' }} mb={2} fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
                                {repo.title}
                            </Heading>
                        </Stack>
                        <HStack as={Flex} gap={2} spacing={5} alignItems="center">
                            <Avatar size="md" title={repo.author.name} src={repo.author.picture} />
                            <Box>
                                <Text as={'a'} href={`/${repo.author.handle}`} _hover={{ textDecoration: 'none', color: 'goldenrod'}} fontWeight="bold">{repo.author.name}</Text>
                                <Text fontSize="sm" color="gray.500">
                                    <DateFormatter dateString={repo.date} />
                                </Text>
                            </Box>
                            <Spacer />
                            <IconButton href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${repo.title}\n\nBy @wsync_xyz`)}&url=${encodeURIComponent(`\n\nhttps://wsync.xyz/blog/${repo.slug}`)}`} as={'a'} target={'_blank'} bg={'unset'} _hover={{ bg: 'none', textDecoration: 'none' }} aria-label='Share to X' icon={<XIcon height={'30'} width={'30'} />} />
                        </HStack>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default RepoPostCard;