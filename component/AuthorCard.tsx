import { Avatar, Box, Flex, HStack, Stack, Text, Spacer, IconButton, Button } from "@chakra-ui/react"
import XIcon from "./Icon/x-icon"
import Author from "@/interfaces/author"

type IAuthors = {
    authors: Author
    share: any
}

export default function AuthorCard({ authors, share }: IAuthors) {

    return (
        <Box mt={6}>
            <HStack mx={'auto'} maxWidth={'3xl'} py={8} as={Flex} gap={2} spacing={5}>
                <Avatar size={{ base: 'lg', md: '2xl' }} title={authors.name} src={authors.picture} />
                <Box mx={{ base: '5px', md: 2 }}>
                    <Text
                        _hover={{ color: 'goldenrod', textDecoration: 'none' }}
                        as={'a'}
                        href={`/${authors.handle}`}
                        fontSize={{ base: 'lg', md: '2xl' }}
                        fontWeight={'bold'}
                    >
                        {authors.name}
                    </Text>
                    <Stack direction={'row'}>
                        <Text
                            as={'a'}
                            href={`https://etherscan.io/address/${authors.wallet}`}
                            target={'_blank'}
                            _hover={{ textDecoration: 'none' }}
                            fontSize={{ base: 'md', md: 'lg' }}
                            color="gray.500">
                            @{authors.handle}
                        </Text>
                    </Stack>
                </Box>
                <Spacer />
                <IconButton
                    href={share}
                    as={'a'}
                    rel={'nofollow'}
                    target={'_blank'}
                    bg={'unset'}
                    _hover={{ bg: 'none', textDecoration: 'none' }}
                    aria-label='Share to X'
                    icon={<XIcon height={'30'} width={'30'} />}
                />
            </HStack>
            <Text fontSize={'20px'} mb={4} lineHeight={'1.6'} color={'gray.500'} maxWidth={'3xl'} mx={'auto'}>{authors.bio}</Text>
        </Box>
    )
}