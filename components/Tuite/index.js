import { Text, View, TouchableOpacity } from "react-native"

export default function Tuite(props) {
    return (
        <TouchableOpacity>
            <View className="flex-1 gap-2">
                <Text className="text-bold text-white">{props.name}</Text>
                <Text className="text-white"> • </Text>
                <Text className="text-gray-400">@{props.username}</Text>
            </View>
            <Text className="text-white">{props.content}</Text>
        </TouchableOpacity>
    )
}