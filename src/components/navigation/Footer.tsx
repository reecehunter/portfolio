import { Box, Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'
import IconRow from '@components/information/IconRow'
import { Link } from 'react-router-dom'
import { pagePaths } from '@utils/consts'

const Footer: FC = () => {
  return (
    <Box as='footer' w='100%' p={6} bgColor='gray.500'>
      <Flex
        maxW='4xl'
        alignItems='center'
        justifyContent='space-between'
        mx='auto'
      >
        <Link to={pagePaths.home}>
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
