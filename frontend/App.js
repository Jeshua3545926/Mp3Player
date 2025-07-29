import { StatusBar } from 'expo-status-bar';
import useState from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  /**
   * Maneja los cambios en el formulario de login, actualizando el estado de React
   * seg n sea necesario.
   * @param {object} e - Evento de cambio en el formulario
   */
  const [form, setForm] = useState({
    email: '',
    password: '',
    username: ''
  });


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return (
    <View style={styles.container}>
      {/*Login Screen */}


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
