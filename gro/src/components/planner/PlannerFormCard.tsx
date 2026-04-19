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

    //reset form as initial state
    setName("");
    setQuantity("1");
    setCategory("produce");
    setPriority("medium");
    };



  return (
    <View className="rounded-3xl   border-border bg-card p-4">
      <Text className='text-sm font-semibol text-foreground'>Item name</Text>
      <View className='mt-2 flex-row items-center rounded-2xl border border-input bg-muted px-4 py-3'></View>
    </View>
  )
}