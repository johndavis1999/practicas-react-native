import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather'

export default function App() {
  const [form, setForm] = useState({
    idioma: 'Español',
    modoOscuro: true,
    wifi: false,
  });

  const sections = [
    {
      header: 'Preferencias',
      items: [
        { id: 'idioma', icon: 'globe', label: 'Idioma', type: 'select' },
        { id: 'modoOscuro', icon: 'moon', label: 'Modo Oscuro', type: 'toggle' },
        { id: 'wifi', icon: 'wifi', label: 'Wi-Fi', type: 'toggle' },
      ],
    },
    {
      header: 'Ayuda',
      items: [
        { id: 'bug', icon: 'flag', label: 'Reportar Errores', type: 'link' },
        { id: 'soporte', icon: 'mail', label: 'Soporte', type: 'link' },
      ],
    },
    {
      header: 'Contenido',
      items: [
        { id: 'save', icon: 'save', label: 'Guardado', type: 'link' },
        { id: 'download', icon: 'download', label: 'Descargas', type: 'link' },
      ],
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor: '#f6f6f6' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Configuraciones</Text>
          <Text style={styles.subtitle}>Actualiza tus preferencias aquí</Text>
        </View>
        {sections.map(( { header, items } ) => (
          <View style={styles.section} key={header}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{header}</Text>
            </View>

            <View style={styles.sectionBody}>
              {items.map(({ label, id, type, icon }, index) => (
                <View
                  style={[
                    styles.rowWrapper,
                    index === 0 && { borderTopWidth: 0 },
                  ]}
                  key={id}
                >
                  <TouchableOpacity onPress={() => console.log(`Presionaste ${label}`)}>
                    <View style={styles.row}>
                      <FeatherIcon name={icon} color="#616161" size={22} style={{ marginRight: 12 }} />
                      <Text style={styles.rowLabel}>{label}</Text>
                      <View style={styles.rowSpacer} />
                      { type === 'select' && (
                        <Text style={styles.rowValue}>{form[id]}</Text>
                      )}
                      {type === 'toggle' &&
                        <Switch 
                          value={form[id]} 
                          onValueChange={value => 
                            setForm({...form, [id]: value})
                          } 
                        />
                      }
                      {['select', 'link'].includes(type) && (
                        <FeatherIcon name="chevron-right" color='#ababab' size={22} />
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </View>

          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  header: {
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  section: {
    paddingTop: 12,
  },
  sectionHeader: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#a7a7a7',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  rowWrapper: {
    paddingLeft: 24,
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
    backgroundColor: '#fff',
  },
  row: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 24,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000'
  },
  rowSpacer: {
    flex: 1,
  },
  rowValue: {
    fontSize: 17,
    color: '#616161',
    marginRight: 4,
  },
});
