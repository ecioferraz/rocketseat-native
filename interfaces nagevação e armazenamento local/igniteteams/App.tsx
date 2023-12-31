import { ThemeProvider } from 'styled-components/native'
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { StatusBar } from 'expo-status-bar'
import Loading from '@components/Loading'
import Routes from '@routes/index'
import theme from '@theme/index'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" style="light" translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  )
}
