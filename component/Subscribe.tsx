import * as React from 'react';
import { FormControl, Input, InputGroup, InputRightAddon, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { useEmailSubscription } from '@/hooks/useEmailSubcription';

export default function Subscribe() {
    const { email, handleEmailChange, handleSubmit, subscriptionStatus } = useEmailSubscription();
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Stack as={FormControl} mx={'auto'} direction={'column'}>
                    <InputGroup size={'lg'}>
                        <Input
                            type="email"
                            isRequired
                            value={email}
                            onChange={handleEmailChange}
                            bg={useColorModeValue('gray.200', '#211f1ff0')}
                            _placeholder={{ color: 'gray.500' }}
                            placeholder="Your email"
                            focusBorderColor='transparent'
                            _focus={{ outline: 0 }}
                            borderWidth={0}
                            rounded={'full'}
                        />
                        {/* eslint-disable-next-line react/no-children-prop */}
                        <InputRightAddon fontWeight={'bold'} as={'button'} _hover={{ bgColor: useColorModeValue('goldenrod', '#34a853') }} rounded={'full'} textAlign={'center'} bgColor={useColorModeValue('#34a853', 'goldenrod')} type={'submit'} color={'black'} children={'Subscribe'} />
                    </InputGroup>
                    {subscriptionStatus && <Text fontSize={'12px'} textAlign={'center'} color={'teal.400'} fontWeight={'bold'}>{subscriptionStatus}</Text>}
                </Stack>
            </form>
        </>
    );
}