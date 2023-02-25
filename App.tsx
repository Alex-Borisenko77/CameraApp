import {RootNavContainer} from "./src/navigation";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
      <RootNavContainer/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
