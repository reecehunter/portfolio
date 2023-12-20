import { Box, Flex, Link, Text } from '@chakra-ui/react'
import { FC } from 'react'
import IconRow from '@components/information/IconRow'
import { pagePaths } from '@utils/consts'

const Footer: FC = () => {
  return (
    <Box as='footer' w='100%' p={6} bgColor='gray.500'>
      <Flex
        maxW='4xl'
        flexDir={{ base: 'column', md: 'row' }}
        alignItems='center'
        justifyContent='space-between'
        gap={4}
        mx='auto'
      >
        <Link href={pagePaths.home} _hover={{ underline: 'none' }}>
          <Text fontSize='3xl' fontWeight='bold' color='gray.300'>
            reece hunter
          </Text>
        </Link>
        <IconRow />
      </Flex>
    </Box>
  )
}

export default Footer
