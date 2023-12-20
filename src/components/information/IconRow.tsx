import { Flex, Link } from '@chakra-ui/react'
import { socials } from '@utils/consts'
import { Github, Linkedin, Mail } from 'iconoir-react'
import { FC, ReactNode } from 'react'

const IconRow: FC = () => {
  const socialIcons: { icon: ReactNode; href: string }[] = [
    { icon: <Mail />, href: socials.email },
    { icon: <Linkedin />, href: socials.linkedIn },
    { icon: <Github />, href: socials.github },
  ]

  return (
    <Flex alignItems='center' justifyContent='center' gap={6}>
      {socialIcons.map((social) => (
        <Link
          key={social.href}
          href={social.href}
          target='_blank'
          rel='noreferrer'
        >
          {social.icon}
        </Link>
      ))}
    </Flex>
  )
}

export default IconRow
