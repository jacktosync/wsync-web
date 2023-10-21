import { HStack, Tag, TagLabel } from '@chakra-ui/react';
import React from 'react';

type Props = {
  content: string;
  tags: string[];
};

const PostBody = ({ content, tags }: Props) => {
  return (
    <>
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="markdown-content" />
        <style>
          {`
          .markdown-content p, li {
            color: #718096;
          }
          .markdown-content a {
            font-weight: bold;
            color: #769d1b;
            text-decoration: underline;
          }
          .markdown-content img {
            margin: 30px 0 0;
          }
          .markdown-content h1 {
            font-size: 2rem;
            line-height: 1.6;
            margin: 30px 0 0;
            font-weight: bold;
          }
          .markdown-content h2 {
            font-size: 1.875rem;
            line-height: 1.6;
            margin: 30px 0 0;
            font-weight: bold;
          }
          .markdown-content h3 {
            font-size: 1.5rem;
            line-height: 1.6;
            margin: 30px 0 0;
            font-weight: bold;
          }
          .markdown-content p, li {
            font-size: 1.25rem;
            margin: 10px 0 0;
            line-height: 1.6;
          }
          .markdown-content ol {
            counter-reset: item;
            list-style-type: decimal;
            margin: 15px;
            padding-left: 20px;
          }
          .markdown-content ul {
            counter-reset: item;
            list-style-type: disc;
            margin: 15px;
            padding-left: 20px;
          }
          .markdown-content li {
            position: relative;
            margin-bottom: 7px;
            padding-left: 7px;
            line-height: 1.6;
          }
          .markdown-content code {
            color: #fdb141;
          }
          .markdown-content pre {
            margin: 30px 0 0;
            background: #161515;
            border-radius: 10px;
            padding: 20px;
            display: block;
            position: relative;
            letter-spacing: 0.5px;
            overflow: auto;
          }
          .markdown-content blockquote {
            background: #161515;
            border-left: 10px solid #FFC107;
            margin: 1.5em;
            padding: 1em;
          }

          /* Add styles for other heading levels as needed */
        `}
        </style>
      </div>
      <HStack spacing={4} mt={10} flexWrap={'wrap'} mx={'auto'}>
        {tags.map((tag) => (
          <Tag
            key={tag}
            size={'md'}
            as={'a'}
            href={`/topic/${tag}`}
            bgColor={'#34a853'}
            color={'black'}
            _hover={{
                bgColor: '#ea4335'
            }}
            p={{base: 2, md: 4}}
            borderRadius='full'
            variant='solid'
            flexShrink="0" 
            whiteSpace="nowrap"
          >
            <TagLabel fontWeight={'bold'} fontSize={'lg'}>
              #{tag}
            </TagLabel>
          </Tag>
        ))}
      </HStack>
    </>
  );
};

export default PostBody;