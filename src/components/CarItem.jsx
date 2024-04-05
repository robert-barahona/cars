import { StyleSheet, Text, View } from "react-native"

export const CarItem = ({ model, year, price }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.model}>Modelo: {model}</Text>
      <Text style={styles.year}>Año: {year}</Text>
      <Text style={styles.price}>Precio: ${price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  model: {
    fontSize: 18,
    fontWeight: "bold",
  },
  year: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    color: "green",
  },
})
