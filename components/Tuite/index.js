import { Text, TouchableOpacity } from "react-native"

export default function Tuite(props) {
    return (
        <TouchableOpacity>
            <Text className="text-bold">{props.name}</Text>
            <Text> - </Text>
            <Text>@{props.username}</Text>
            <Text>{props.content}</Text>
        </TouchableOpacity>
    )
}