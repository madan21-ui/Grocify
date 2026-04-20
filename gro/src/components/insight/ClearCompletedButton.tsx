import { useGroceryStore } from "@/store/grocery-store";
import { Pressable, Text, View } from "react-native";
import { BlurView } from "expo-blur";

export default function ClearCompletedButton() {
  const { clearPurchased } = useGroceryStore();

  return (
    <View className="overflow-hidden rounded-2xl">
      <BlurView
        intensity={50}
        tint="light"
        className="rounded-2xl"
      >
        <Pressable
          onPress={clearPurchased}
          className="py-3 px-4 items-center justify-center"
          style={{
            backgroundColor: "rgba(255,255,255,0.2)", // transparency
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.3)", // subtle glass border
          }}
        >
          <Text className="text-base font-semibold text-white">
            Clear completed items
          </Text>
        </Pressable>
      </BlurView>
    </View>
  );
}