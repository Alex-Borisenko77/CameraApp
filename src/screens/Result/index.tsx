import { useNavigation, useRoute } from '@react-navigation/native'
import { Image, Pressable, Text, View } from 'react-native'
import ArrowLeft from '../../assets/svg/arrow-left.svg'
import CheckMark from '../../assets/svg/check-mark.svg'
import styles from './styles'
import { RouteProps } from "../../../types";
const ResultScreen = () => {
  const { params } = useRoute<RouteProps>()
  const { goBack } = useNavigation()
  return (
    <View style={styles.container}>
      <Image
        style={styles.container}
        source={{ uri: params?.image }}
      />
      <View style={styles.btnContainer}>
        <Pressable style={styles.button} onPress={goBack}>
          <ArrowLeft />
          <Text style={styles.text}>Retake</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <CheckMark/>
          <Text style={styles.text}>Use photo</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ResultScreen;
