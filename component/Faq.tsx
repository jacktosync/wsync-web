import { Text, Heading, Flex, Stack, SimpleGrid, useColorModeValue } from '@chakra-ui/react';

export const faqData = [
    {
        question: 'Currencies are accepted?',
        answer: 'For payments, we only use cryptocurrency because we like simple processes and you should trust us first.'
    },
    {
        question: 'What About Custom Orders?',
        answer: 'Simply select a sample portfolio and pay for your order with additional information that we have to modify to suit your project.'
    },
    {
        question: 'What about price?',
        answer: 'The price will depend on the level of difficulty we have to complete.'
    },
    {
        question: `Don't have crypto?`,
        answer: 'Buy from market such as Binance.com or others available in your country.'
    }
]

const Faq: React.FC = () => {

    return (
        <>
            <Heading
                fontSize={{ base: '4xl', sm: '5xl' }}
                fontWeight="bold"
                textAlign="center"
                maxW="600px"
                mx={'auto'}
                mt={20}
            >
                For Question and Answer!
            </Heading>
            <Text maxW="550px" mx={'auto'} fontSize="xl" mb={20} textAlign="center" color="gray.500">
            Some people often ask the important questions below.
            </Text>
            <SimpleGrid id='faq' mt={20} columns={{base: 1, md: 2}} spacing={5}>
                    {faqData.map((faq, index) => (
                        <Stack as={Flex} maxW={{ lg: 'lg' }} spacing={5} direction={'column'} my={{ base: 2, md: 5 }} p={2} key={index} >
                            {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
                            <Heading fontSize={'2xl'} mb={2} color={useColorModeValue('#34a853', 'goldenrod')}>{faq.question}</Heading>
                            <Text fontSize="xl" color="gray.500">{faq.answer}</Text>
                        </Stack>
                    ))}
            </SimpleGrid>
        </>
    );
};

export default Faq