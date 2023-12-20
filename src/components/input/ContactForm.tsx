import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  StackProps,
  Textarea,
} from '@chakra-ui/react'
import { ChangeEvent, FC, FormEvent, useState } from 'react'
import axios from 'axios'
import { apiEndpoint } from '@utils/consts'
import useModal from '@hooks/useModal'

interface ContactFormProps extends StackProps {}

type FormData = {
  first_name: string
  email: string
  message: string
}

const ContactForm: FC<ContactFormProps> = ({ ...props }) => {
  const modal = useModal()

  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState<boolean>(false)

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post(`${apiEndpoint}/contact`, formData)
      modal.setModalData({
        title: '🎉 Success!',
        description:
          'Your message was sent. I will get back to you as soon as possible.',
        onClose: () => window.location.reload(),
      })
      modal.setOpen(true)
    } catch (err) {
      console.error(err)
      modal.setModalData({
        title: '❌ Error',
        description: 'There was an error sending your message.',
      })
      modal.setOpen(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {modal.element}

      <Stack as='form' gap={6} onSubmit={onSubmit} {...props} color='blue.800'>
        <Flex flexDir={{ base: 'column', md: 'row' }} gap={{ base: 6, md: 16 }}>
          <FormControl>
            <FormLabel fontSize='xl'>First Name</FormLabel>
            <Input
              type='text'
              name='first_name'
              placeholder='Enter your first name'
              size='lg'
              fontSize='xl'
              borderColor='gray.300'
              _hover={{ borderColor: 'gray.400' }}
              onChange={onChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize='xl'>Email</FormLabel>
            <Input
              type='text'
              name='email'
              placeholder='Enter your email'
              size='lg'
              fontSize='xl'
              borderColor='gray.300'
              _hover={{ borderColor: 'gray.400' }}
              onChange={onChange}
              required
            />
          </FormControl>
        </Flex>
        <FormControl>
          <FormLabel fontSize='xl'>Message</FormLabel>
          <Textarea
            name='message'
            placeholder='Enter your message'
            minH='200px'
            size='lg'
            fontSize='xl'
            borderColor='gray.300'
            _hover={{ borderColor: 'gray.400' }}
            onChange={onChange}
            required
          />
        </FormControl>
        <Button
          type='submit'
          colorScheme='blue'
          size='lg'
          fontSize='xl'
          color='gray.100'
          isLoading={loading}
          loadingText='Sending...'
        >
          Send Message
        </Button>
      </Stack>
    </>
  )
}

export default ContactForm
