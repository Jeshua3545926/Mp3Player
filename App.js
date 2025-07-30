import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

/**
 * Pantalla de inicio de sesión.
 * 
 * Esta pantalla permite al usuario iniciar sesión con su cuenta.
 * 
 * @returns Un JSX que representa la pantalla de inicio de sesión.
 */
export default function App() {
  const [form, setForm] = useState({ username: '', password: '' });
 
  /**
   * Maneja el evento de crear una cuenta.
   * 
   * Este método actualmente no hace nada, solo muestra un mensaje
   * en la consola y un alert que indica que pronto se podr  crear cuentas.
   * 
   * @todo Crear lógica para crear una cuenta de usuario
   */
  const handleCreateAccount = () => {
    console.log("Proximamente se puede crear la cuenta")
    alert("Proximamente se puede crear la cuenta")
  }

 

  /**
   * Actualiza el estado de formulario con el nuevo valor
   * @param {string} name - nombre del campo a actualizar
   * @param {string} value - nuevo valor para el campo
   */
  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  /**
   * Handles the login process by verifying the user's credentials.
   * It logs the current form data to the console.
   * This function is triggered when the login button is pressed.
   */

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

