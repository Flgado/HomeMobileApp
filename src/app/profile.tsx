import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from './hooks/store';
import { fetchAuthSession, JWT } from 'aws-amplify/auth';
import { signOut } from 'aws-amplify/auth';

const handleSignOut = async () => {
  try {
    await signOut();
    Alert.alert('Success', 'You have been signed out');
  } catch (error) {
    Alert.alert('Error', 'Failed to sign out');
  }
};

const EditProfileView = () => {
  const profileImagePath = useSelector((state: RootState) => state.imageReducer.profileImagePath);
  const [idToken, setIdToken] = useState<JWT | undefined>(undefined);
  signOut.apply
  const [name, setName] = useState('Joao Folgado');
  const [avatar, setAvatar] = useState(profileImagePath);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await fetchAuthSession();
        const idToken = session?.tokens?.idToken;
        setIdToken(idToken);
      } catch (error) {
        console.error('Error fetching auth session:', error);
      }
    };

    fetchSession();
  }, []);

  const handleSubmit = () => {
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={avatar}
        />
        <TouchableOpacity style={styles.changeAvatarButton} onPress={() => {}}>
          <Text style={styles.changeAvatarButtonText}>Change Avatar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={idToken?.payload.email?.toString()}
        />
        <Text style={styles.label}>Phone number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          value={idToken?.payload.phone_number?.toString()}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '80%',
  },
  label: {
    marginTop: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  avatarContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  changeAvatarButton: {
    marginTop: 10,
  },
  changeAvatarButtonText: {
    color: '#1E90FF',
    fontSize: 18,
  },
});

export default EditProfileView;
