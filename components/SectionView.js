import { getStateFromPath } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';


const SectionView = ({ navigation, route }) => {

  let bookLists = route.params.books;

  const navigationProcess = (n) => {

    navigation.navigate('BooksView', {
      testament: route.params.testament,
      title: n,
      name: n
    })

  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {bookLists.map((b, i) => {
            return (
              <View key={i}>
                <TouchableOpacity
                  onPress={() =>
                    navigationProcess(b)
                  }
                  style={styles.button}
                >
                  <Text style={styles.text}>{b}</Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 3,
    padding: 10,
    backgroundColor: '#008080',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    textAlign: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 20
  }
})

export default SectionView