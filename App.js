import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleCreateAccount = () => {
    console.log("Proximamente se puede crear la cuenta")
  }

  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = () => {
    // Implement login logic here
    console.log('Login attempt:', form);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
      <TextInput
        style={[styles.input, {color: '#fff'}]}
        placeholder="Usuario"
        value={form.username}
        onChangeText={(text) => handleChange('username', text)}
      />
      <TextInput
        style={[styles.input, {color: '#fff'}]}
        placeholder="Contraseña"
        secureTextEntry
        value={form.password}
        onChangeText={(text) => handleChange('password', text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonAccount} onPress={handleCreateAccount}>
        <Text style={styles.buttonTextAccount}>Crear Cuenta</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1bff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    color:'#fff',
    fontSize: 24,
    marginBottom: 24,
  },
  input: {
    width: '80%',
    padding: 12,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#1b1b1bf',
  },
  button: {
    width: '80%',
    padding: 12,
    backgroundColor: '#2e2e2eff',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  buttonAccount: {
    marginTop: 10,
    width: '80%',
    padding: 12,
    backgroundColor: '#ffffffff',
    borderRadius: 10,
    color:'#000',
    alignItems: 'center',
  }
});

