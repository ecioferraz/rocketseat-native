import { ComponentProps } from "react";
import { View } from "react-native";

export default interface ParticipantProps extends ComponentProps<typeof View> {
  name: string,
  onRemove: () => void
}