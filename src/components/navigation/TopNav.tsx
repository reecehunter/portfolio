import {
  Box,
  BoxProps,
  List,
  Link,
  Flex,
  Icon,
  Collapse,
  useBreakpointValue,
  Fade,
} from '@chakra-ui/react'
import { pagePaths } from '@utils/consts'
import { FC, useState } from 'react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

interface TopNavProps extends BoxProps {}

type NavLink = {
  label: string
  href: string
}

const TopNav: FC<TopNavProps> = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const navLinks: NavLink[] = [
    // { label: 'HOME', href: pagePaths.home },
    { label: 'CONTACT', href: pagePaths.contact },
  ]

  const toggleOpen = () => {
    setOpen((prev) => !prev)
  }

  const closeNav = () => {
    setOpen(false)
  }

  return (
    <>
      <Fade in={isOpen} unmountOnExit>
        <Box
          pos='absolute'
          top='0'
          left='0'
          w='100vw'
          h='100vh'
          bgColor='black'
          opacity='0.8'
          zIndex={900}
        ></Box>
      </Fade>

      <Box
        as='nav'
        pos='absolute'
        width='100%'
        // backgroundColor='gray.500'
        paddingX={{ base: 4, md: 10 }}
        paddingY={{ base: 8, md: 5 }}
        pb={{ base: isOpen ? 5 : 1, md: 5 }}
        borderBottom={'1px solid transparent'}
        zIndex={1000}
      >
        <Flex
          mx='auto'
          maxWidth='8xl'
          flexDir={{ base: 'column', md: 'row' }}
          alignItems='center'
          justifyContent='space-between'
        >
          <Flex flexDir={{ base: 'column', md: 'row' }} gap={6} w='100%'>
            <Icon
              as={isOpen ? CloseIcon : HamburgerIcon}
              display={{ base: 'block', md: 'none' }}
              cursor='pointer'
              color='gray.300'
              boxSize={isOpen ? 5 : 30}
              ml='auto'
              onClick={toggleOpen}
            />

            <Collapse
              in={useBreakpointValue({ base: isOpen, md: true })}
              startingHeight={1}
            >
              <List
                display='flex'
                flexDir={{ base: 'column', md: 'row' }}
                alignItems='center'
                gap={{ base: 0, md: 6 }}
                listStyleType='none'
                h='100%'
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.label + Math.random()}
                    href={link.href}
                    fontSize={{ base: 'xl', md: 'lg' }}
                    borderBottom='1px solid transparent'
                    borderColor={{ base: 'gray.200', md: 'transparent' }}
                    w='100%'
                    py={{ base: 8, md: 0 }}
                    color={
                      window.location.pathname === link.href.toLowerCase()
                        ? 'gray.100'
                        : 'whiteAlpha.700'
                    }
                    onClick={closeNav}
                    _hover={{ color: 'gray.100' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </List>
            </Collapse>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default TopNav
