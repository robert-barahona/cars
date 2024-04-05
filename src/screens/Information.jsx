import { Button, Image, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export const Information = ({ navigation }) => {
  const handleLogout = () => navigation.navigate("Login")

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: "https://i.pravatar.cc/100" }}
        style={{ width: 100, height: 100 }}
      />
      <View style={styles.informationWrapper}>
        <Text>Nombre: John Doe</Text>
        <Text>Correo: johndoe@example.com</Text>
      </View>
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    gap: 32,
    padding: 24,
  },
  informationWrapper: {
    width: "100%",
    gap: 12,
    alignItems: "center",
  },
})
