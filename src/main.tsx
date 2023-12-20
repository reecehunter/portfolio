import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { IconoirProvider } from 'iconoir-react'
import Footer from '@components/navigation/Footer.tsx'

const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <IconoirProvider
        iconProps={{
          color: '#CBD5E0',
          strokeWidth: 1.5,
          width: '2.25em',
          height: '2.25em',
        }}
      >
        <App />
        <Footer />
      </IconoirProvider>
    </ChakraProvider>
  </BrowserRouter>
)
