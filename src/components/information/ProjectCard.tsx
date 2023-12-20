import { Flex, Link, Text } from '@chakra-ui/layout'
import { Project } from '@utils/types'
import { FC } from 'react'

const ProjectCard: FC<Project> = ({ logo, title, link, props }) => {
  return (
    <Link
      href={link}
      target='_blank'
      rel='noreferrer'
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Flex
        alignItems='center'
        justifyContent='center'
        gap={4}
        px={6}
        py={4}
        rounded='md'
        shadow='lg'
        {...props}
      >
        {logo}
        {title && (
          <Text fontSize='xl' fontWeight='bold' color='white'>
            {title}
          </Text>
        )}
      </Flex>
    </Link>
  )
}

export default ProjectCard
