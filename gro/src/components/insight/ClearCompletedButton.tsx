import { useGroceryStore } from "@/store/grocery-store";
import { Pressable, Text , View } from "react-native";

export default function ClearCompletedButton() {
  const { clearPurchased } = useGroceryStore();

  return (
    <View className='w-60 h-13 rounded-3xl flex-row items-center justify-center self-center bg-primary    '>
    <Pressable className="rounded-3xl bg-primary py-3   " onPress={clearPurchased}>
      <Text className="text-center text-base font-semibold text-primary-foreground">
        Clear completed items
      </Text>
    </Pressable>
    </View>
  );
}