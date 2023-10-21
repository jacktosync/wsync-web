import React, { useEffect, useState } from 'react';
import { Tab, TabList, Tabs, IconButton, Flex, Box } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export default function BlogTagsCard() {
  const [tags, setTags] = useState<string[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    fetch('/api/tags')
      .then((response) => response.json())
      .then((data) => setTags(data.tags))
      .catch((error) => console.error('Error fetching tags:', error));
  }, []);

  const handleScrollLeft = () => {
    const tabList = document.getElementById('tag-list');
    if (tabList) {
      const newScrollPosition = scrollPosition - tabList.offsetWidth;
      tabList.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
      setScrollPosition(newScrollPosition);
    }
  };

  const handleScrollRight = () => {
    const tabList = document.getElementById('tag-list');
    if (tabList) {
      const newScrollPosition = scrollPosition + tabList.offsetWidth;
      tabList.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
      setScrollPosition(newScrollPosition);
    }
  };

  return (
    <Box p={4} my={4}>
      <Tabs size={'lg'} variant={'unstyled'}>
        <Flex alignItems="center" justifyContent="space-between">
          <IconButton
            aria-label="Scroll Left"
            fontSize={'6xl'}
            bg={'unset'}
            _hover={{ bg: 'none' }}
            icon={<ChevronLeftIcon />}
            onClick={handleScrollLeft}
          />
          <TabList
            id="tag-list"
            overflowY={'hidden'}
            sx={{
              scrollbarWidth: 'none',
              '::-webkit-scrollbar': {
                display: 'none',
              },
            }}
            style={{ overflowX: 'scroll' }}
          >
            {tags.map((tag) => (
              <Tab
                key={tag}
                flexShrink="0"
                mx={2}
                as={'a'}
                href={`/topic/${tag}`}
                rounded={'full'}
                bgColor={'#34a853'}
                color={'black'}
                fontWeight={'bold'}
              >
                #{tag}
              </Tab>
            ))}
          </TabList>
          <IconButton
            aria-label="Scroll Right"
            fontSize={'6xl'}
            bg={'unset'}
            _hover={{ bg: 'none' }}
            icon={<ChevronRightIcon />}
            onClick={handleScrollRight}
          />
        </Flex>
      </Tabs>
    </Box>
  );
}