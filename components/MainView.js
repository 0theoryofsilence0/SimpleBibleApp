import React from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Books from './bible-json/Books.json';

const MainView = ({navigation}) => {
    return (
        <View style={styles.container}>
            {Books.map((b,i) => {
                return (
                    <TouchableOpacity 
                        key={i}
                        onPress = { () => 
                            navigation.navigate('SectionView', {
                                books: b.books,
                                testament: b.testament
                            })
                        } 
                        style={styles.button}
                    >
                        <Text style={styles.text}>{b.section}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#000'
    },
    button: {
        margin: 5,
        padding: 10,
        backgroundColor: '#008080'
    },
    text: {
        color: '#fff'
    }
  })

export default MainView