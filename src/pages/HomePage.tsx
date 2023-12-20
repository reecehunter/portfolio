import { Image } from '@chakra-ui/image'
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout'
import { Button, Icon, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FC, useEffect } from 'react'
import ValetFlowLogo from '@assets/valet_flow_logo.png'
import ValetFlowWebsite from '@assets/valet_flow.png'
import { projectLinks } from '@utils/consts'
import ProjectCard from '@components/information/ProjectCard'
import HablaLogo from '@components/icons/HablaLogo'
import NostrCookingLogo from '@components/icons/NostrCookingLogo'
import { Project } from '@utils/types'
import {
  Code,
  CodeBracketsSquare,
  EthereumCircle,
  Mail,
  ViewGrid,
} from 'iconoir-react'
import CloudIcon from '@components/icons/Cloud'
import StripeLogo from '@assets/stripe_logo.png'
import SignstrLogo from '@assets/signstr_logo.png'
import BallerBearsWebsite from '@assets/baller_bears_website.png'
import SnippetManager from '@assets/snippet_manager.png'
import ContactForm from '@components/input/ContactForm'
import Hero from '@assets/hero.jpeg'

const HomePage: FC = () => {
  const openSourceProjects: Project[] = [
    {
      logo: <HablaLogo w='50px' h='50px' fill='white' />,
      title: 'Habla.News',
      link: 'https://habla.news',
      props: {
        bgColor: 'purple.300',
      },
    },
    {
      logo: <NostrCookingLogo w='182.75625' h='50' />,
      title: '',
      link: 'https://zap.cooking/recent',
      props: {
        bgColor: 'orange.100',
      },
    },
  ]

  const otherProjects: Project[] = [
    {
      logo: <EthereumCircle width='50px' height='50px' color='white' />,
      title: 'ERC-20 Price Bot',
      link: projectLinks.token_bot,
      props: {
        bgColor: 'orange.400',
      },
    },
    {
      logo: <Image src={SignstrLogo} w='50px' h='50px' />,
      title: 'Signstr Extension',
      link: projectLinks.signstr,
      props: {
        bgColor: '#00639a',
      },
    },
    {
      logo: <CodeBracketsSquare width='50px' height='50px' color='white' />,
      title: 'Snippet Manager',
      link: projectLinks.snippet_manager,
      props: {
        bgColor: '#2e3448',
      },
    },
    {
      logo: <CloudIcon w='50px' h='50px' fill='white' />,
      title: 'Cloud Client',
      link: projectLinks.cloud_client,
      props: {
        bgColor: 'blue.300',
      },
    },
    {
      logo: <Image src={StripeLogo} w='50px' h='50px' />,
      title: 'Stripe Demo',
      link: projectLinks.stripe_demo,
      props: {
        bgColor: '#635bff',
      },
    },
  ]

  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <>
      <Flex
        id='home'
        pos='relative'
        alignItems='center'
        justifyContent='center'
        h='100vh'
        bgImage={Hero}
        bgSize='cover'
        zIndex={80}
      >
        <Box
          pos='absolute'
          w='100%'
          h='100%'
          bgColor='#1c1c1c'
          opacity={0.95}
          zIndex={90}
        ></Box>
        <Stack gap={6} textAlign='center' zIndex={100}>
          <Heading
            as='h1'
            fontFamily='Rubik Doodle Shadow'
            size='3xl'
            color='gray.200'
          >
            Hello World!
          </Heading>
          <Text fontSize='2xl' color='gray.300'>
            I'm Reece. I build web applications.
          </Text>
          <Link href='#contact'>
            <Button
              variant='outline'
              colorScheme='gray'
              color='gray.200'
              w='80%'
              size='lg'
              fontSize='xl'
              _hover={{ bgColor: 'blackAlpha.500' }}
            >
              Contact Me
            </Button>
          </Link>
        </Stack>
      </Flex>

      <Box pt={16} bgGradient='linear(to-br, #A4D5FF, green.100)'>
        <Stack gap={6} textAlign='center' mb={16}>
          <Image
            src={ValetFlowLogo}
            w='60px'
            h='60px'
            mx='auto'
            rounded='full'
            shadow='lg'
          />
          <Text fontSize='3xl' color='blue.600'>
            My latest project is{' '}
            <Link
              href={projectLinks.valet_flow}
              target='_blank'
              rel='noreferrer'
              _hover={{ underline: 'none' }}
              fontWeight='bold'
            >
              Valet Flow
              <ExternalLinkIcon boxSize='15px' ml={1} mb='20px' />
            </Link>
          </Text>
          <Text fontSize='3xl' color='blue.600'>
            A management software for Valet Trash businesses
          </Text>
        </Stack>
        <Link href={projectLinks.valet_flow} target='_blank' rel='noreferrer'>
          <Image
            src={ValetFlowWebsite}
            mx='auto'
            roundedTop='md'
            shadow='lg'
            width={{ base: '90%', md: '65%' }}
          />
        </Link>
      </Box>

      <Box py={16} bgColor='blue.400'>
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          alignItems='center'
          gap={6}
        >
          <Stack flex={1} gap={6}>
            <Icon
              as={EthereumCircle}
              w='50px'
              h='50px'
              color='gray.100'
              mx='auto'
            />
            <Text fontSize='3xl' color='gray.100' textAlign='center'>
              I built decentralized web applications
              <br />
              for crypto startups from 2021 to 2023
            </Text>
          </Stack>
          <Link
            flex={1}
            href={projectLinks.baller_bears}
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src={BallerBearsWebsite}
              mx={{ base: 'auto', md: 0 }}
              ml={{ base: 0, md: 'auto' }}
              roundedLeft='md'
              shadow='lg'
              width='90%'
            />
          </Link>
        </Flex>
      </Box>

      <Box py={16} bgColor='blue.50'>
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          alignItems='center'
          gap={6}
        >
          <Link
            flex={1}
            href={projectLinks.snippet_manager}
            target='_blank'
            rel='noreferrer'
            order={{ base: 2, md: 1 }}
          >
            <Image
              src={SnippetManager}
              mx={{ base: 'auto', md: 0 }}
              mr={{ base: 0, md: 'auto' }}
              roundedRight='md'
              shadow='lg'
              width={{ base: '90%', md: '100%' }}
            />
          </Link>
          <Stack flex={1} gap={6} color='blue.700' order={{ base: 1, md: 2 }}>
            <Icon as={ViewGrid} w='50px' h='50px' mx='auto' />
            <Text fontSize='3xl' textAlign='center'>
              I have built a lot of side
              <br />
              projects throughout my career
            </Text>
          </Stack>
        </Flex>
        <Flex
          alignItems='center'
          justifyContent='center'
          flexWrap='wrap'
          gap={6}
          mt={16}
        >
          {otherProjects.map((project) => (
            <ProjectCard
              key={project.title}
              logo={project.logo}
              title={project.title}
              link={project.link}
              props={project.props}
            />
          ))}
        </Flex>
      </Box>

      <Box py={16} bgColor='green.400'>
        <Flex
          alignItems='center'
          justifyContent='space-between'
          gap={16}
          maxW='4xl'
          mx='auto'
        >
          <Stack gap={6} textAlign='center' color='gray.100'>
            <Icon as={Code} w='50px' h='50px' mx='auto' />
            <Text fontSize='3xl'>
              I also contribute to some
              <br />
              cool open-source projects
            </Text>
          </Stack>
          <Flex alignItems='center' justifyContent='flex-end' gap={6} h='100%'>
            {openSourceProjects.map((project) => (
              <ProjectCard
                key={project.title}
                logo={project.logo}
                title={project.title}
                link={project.link}
                props={project.props}
              />
            ))}
          </Flex>
        </Flex>
      </Box>

      <Box id='contact' py={16} bgColor='gray.100'>
        <Stack gap={6} textAlign='center' color='blue.700'>
          <Icon as={Mail} w='50px' h='50px' mx='auto' />
          <Text fontSize='3xl'>
            Want to contact me?
            <br />
            Shoot me a message
          </Text>
        </Stack>
        <ContactForm maxW='4xl' mx='auto' mt={16} px={6} />
      </Box>
    </>
  )
}

export default HomePage
