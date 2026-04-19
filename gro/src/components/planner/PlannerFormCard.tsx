import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { GroceryCategory, GroceryPriority, useGroceryStore } from '@/store/grocery-store';
import { FontAwesome6 } from '@expo/vector-icons';
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

    console.log(name);

  return (
    <View className="rounded-3xl border  border-border bg-card p-4">
      <Text className='text-sm font-semibol text-foreground'>Item name</Text>
      <View className='mt-2 flex-row items-center rounded-2xl border border-input bg-muted px-4 py-3'>
        <FontAwesome6 name="bag-shopping" size={13} color="#5b7567" />
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Ex: Strawberries"
        className='ml-2 flex-1 text-base text-foreground'
        placeholderTextColor="#8aa397"
      />
     
      
      </View>
    </View>
  )
}