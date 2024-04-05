import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native"

export const Account = ({ navigation }) => {
  // Va a la pantalla de historial
  const handleHistory = () => navigation.navigate("History")

  // Va a la pantalla de información
  const handleInformation = () => navigation.navigate("Information")

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/100" }}
        style={{ width: 100, height: 100 }}
      />
      <View style={styles.descriptionWrapper}>
        <Text style={styles.title}>Empresa pepito</Text>
        <Text>Concesionario de autos</Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <Button title="Historial" onPress={handleHistory} />
        <Button title="Información" onPress={handleInformation} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 48,
    padding: 24,
  },
  buttonsWrapper: {
    width: "100%",
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  descriptionWrapper: {
    width: "100%",
    gap: 8,
    alignItems: "center",
  },
})
