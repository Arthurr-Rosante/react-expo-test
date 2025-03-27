import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function HomePage() {
    return(
        <View>
            <Text>Homepage</Text>
            <Link href="./auth/login"><Button title="Login"/></Link>
        </View>
    )
}