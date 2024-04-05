import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export const Login = ({ navigation }) => {
  // Aquí es replace en lugar de navigate para que
  // no se pueda regresar a la pantalla de login
  const handleLogin = () => navigation.replace("Account")

  // Va a la pantalla de registro
  const handleRegister = () => navigation.navigate("Register")

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hola de nuevo!</Text>
      <View style={styles.inputWrapper}>
        <TextInput placeholder="Usuario" style={styles.input} />
        <TextInput placeholder="Contraseña" style={styles.input} />
      </View>
      <View style={styles.buttonsWrapper}>
        <Button title="Iniciar sesión" onPress={handleLogin} />
        <Button title="Registrase" onPress={handleRegister} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputWrapper: {
    width: "100%",
    gap: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
  buttonsWrapper: {
    width: "100%",
    gap: 8,
  },
})
