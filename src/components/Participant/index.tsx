import { Text, TouchableOpacity, View } from "react-native";
import ParticipantProps from "./props";

import styles from "./styles";

export default function Participant ({ name, onRemove, ...rest }: ParticipantProps) {
  return <View style={styles.container} {...rest}>
    <Text style={styles.name}>
      {name}
    </Text>

    <TouchableOpacity onPress={onRemove} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
    </TouchableOpacity>
  </View>
}
