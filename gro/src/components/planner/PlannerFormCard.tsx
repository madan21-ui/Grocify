import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { GroceryCategory, GroceryPriority } from '@/store/grocery-store';

const categories:GroceryCategory[] = ["produce", "dairy", "snacks", "bakery", "pantry", "meat", "beverages", "household"];
const priorities:GroceryPriority[] = ["low","medium","high"];
export default function PlannerFormCard() {

    const [ name, setName ] = useState("");
    const [ quantity, setQuantity ] = useState("1");
    const categoryIcon ={
        produce: "leaf",
        dairy: "cow",
        snacks: "cookie-bite",
        bakery: "bread-slice",
        pantry: "boxx-open"
    }



  return (
    <View>
      <Text>PlannerFormCard</Text>
    </View>
  )
}