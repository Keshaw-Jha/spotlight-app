import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/auth.styles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Native seems beautiful</Text>
      <Link href={"/notifications"}> visit notifications screen</Link>
    </View>
  );
}
