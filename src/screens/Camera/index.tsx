import {useIsFocused, useNavigation} from '@react-navigation/native'
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { TouchableOpacity, View} from 'react-native'
import TakePhotoIcon from '../../assets/svg/take-photo.svg'
import {Camera, CameraType} from "expo-camera";
import { ROUTES } from "../../navigation/routes";
import styles from './styles'
import { AppNavigationProp } from "../../../types";


const CameraScreen = () => {
  const nav = useNavigation<AppNavigationProp>()
  const cameraRef = useRef<Camera | null>(null)
  const isFocused = useIsFocused()
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [access, setAccess] = useState<string>('')
  const goToResult =(uri:string)=>nav.navigate(ROUTES.RESULT, {image: uri})
    const takePictureHandler =()=>{
      cameraRef.current.takePictureAsync().then((data)=>goToResult(data.uri))
    }

  useLayoutEffect(() => {
    requestPermission().then((data)=>setAccess(data.status))
    return ()=> cameraRef.current=null
  }, [])
  return (
    <View style={{flex:1}}>
      {isFocused && access && <Camera
        ref={cameraRef}
        style={styles.camera}
        type={CameraType.back}
        onMountError={(e) => console.error(e, "error")}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={takePictureHandler}>
            <TakePhotoIcon
              style={styles.button}
            />
          </TouchableOpacity>
        </View>
      </Camera>}
    </View>
  )
}

export default CameraScreen;
