import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, GestureResponderEvent } from 'react-native';

interface ControlGateButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  backgroundColor: string;
}

const ControlGateButton: React.FC<ControlGateButtonProps> = ({ onPress, title, backgroundColor }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ControlGateButton;
