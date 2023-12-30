import { NavigationContainer } from '@react-navigation/native'
import AppRoutes from './routes'

import * as S from './styles'

export default function Routes() {
  return (
    <S.Container>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </S.Container>
  )
}
