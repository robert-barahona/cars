import { Button, SafeAreaView, StyleSheet, TextInput, View } from "react-native"

export const Register = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput style={styles.input} placeholder="Usuario" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Edad"
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
        />
      </View>
      <Button title="Registrarse" onPress={() => {}} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
  inputWrapper: {
    padding: 24,
    width: "100%",
    gap: 20,
  },
})
