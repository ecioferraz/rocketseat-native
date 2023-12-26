import { Alert, FlatList, GestureResponderEvent, Text, TextInput, TouchableOpacity, View } from "react-native";
import Participant from "../../components/Participant";

import styles from "./styles";
import { useState } from "react";

export default function Home () {
  const [newParticipant, setNewParticipant] = useState('')

  const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Ana', 'Isa', 'Jack', 'Mayk', 'João']

  const handleParticipantAdd = (name: string) => {
    if (participants.includes(name)) return Alert.alert('Participante já existe!', 'Já existe um participante na lista com esse nome.')
  }
  const handleParticipantRemove = (name: string) => {
    Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
      {
        onPress: () => Alert.alert('Deletado!'),
        style: 'destructive',
        text: 'Sim'
      },
      {
        style: 'cancel',
        text: 'Não'
      }
    ])
  }

  return <View style={styles.container}>
    <View>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>
    </View>

    <View style={styles.form}>
      <TextInput
        placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b"
        style={styles.input}
        onChangeText={setNewParticipant}
      />

      <TouchableOpacity onPress={() => handleParticipantAdd(newParticipant)} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>

    <FlatList
      contentContainerStyle={styles.participantsContainer}
      data={participants}
      ListEmptyComponent={() => <Text style={styles.emptyListText}>
        Ninguém chegou ao evento ainda? Adicione participantes à sua lista de presença.
      </Text>}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <Participant
        name={item}
        onRemove={() => handleParticipantRemove(item)}
      />}
    />
  </View>
}