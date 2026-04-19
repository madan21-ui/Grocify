import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { GroceryCategory, GroceryPriority, useGroceryStore } from '@/store/grocery-store';

const categories:GroceryCategory[] = ["produce", "dairy", "snacks", "bakery", "pantry", "meat", "beverages", "household"];
const priorities:GroceryPriority[] = ["low","medium","high"];

const categoryIcon ={
        produce: "leaf",
        dairy: "cow",
        snacks: "cookie-bite",
        bakery: "bread-slice",
        pantry: "boxx-open"
    };
export default function PlannerFormCard() {
    const { error, addItem } = useGroceryStore();

    const [ name, setName ] = useState("");
    const [ quantity, setQuantity ] = useState("1");
    const [ category, setCategory ] = useState<GroceryCategory>("produce");
    const [ priority, setPriority ] = useState<GroceryPriority>("medium");

    const canCreate = name.trim().length > 0 ;
    const handleQuantityChang = (value:string) =>{
        // this regex is used to remove all non-numeric characters from the input
        setQuantity(value.replace(/[^0-9]/g, ""));
    };

    const createItem = async () => {
    await addItem({
      name: name.trim(),
      category,
      priority,
      quantity: Number(quantity),
    });



  return (
    <View>
      <Text>PlannerFormCard</Text>
    </View>
  )
}