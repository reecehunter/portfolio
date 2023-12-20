import { BoxProps } from '@chakra-ui/layout'
import { ReactNode } from 'react'

export type Project = {
  logo: ReactNode
  title?: string
  link: string
  props?: BoxProps
}
