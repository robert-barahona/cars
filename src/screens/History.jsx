import { FlatList, SafeAreaView, Text } from "react-native"
import { CarItem } from "../components/CarItem"

import cars from "../data/cars.json"

export const History = () => (
  <SafeAreaView>
    <FlatList
      data={cars}
      renderItem={({ item }) => <CarItem {...item} />}
      keyExtractor={(item) => item.id}
    />
  </SafeAreaView>
)
