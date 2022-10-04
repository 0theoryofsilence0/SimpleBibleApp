import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import bComp from './bible-json/books-compilation.json';

const BooksView = ({route}) => {
  
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
        await new Promise((r) => setTimeout(r, 1000))
        setLoading((loading) => !loading)
        }
        loadData()
    }, [])

    if (loading) {
        return (
            <View style={styles.ActivityIndicator}>
                <ActivityIndicator size="large" color="#008080" animating={loading} />
            </View>
        )
    }


  let name = route.params.name;

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            {bComp.find(b => b.book == name).chapters.map((b,i) => {
                return (
                    <View key={i}>
                        <View>
                            <Text style={styles.chapter}>Chapter {b.chapter}</Text>
                            <View>
                                {b.verses.map((v,i) => {
                                    return (
                                        <View style={styles.versesContainer} key={i}>
                                            <Text style={styles.verses}>{v.verse}</Text> 
                                            <Text style={styles.text}>{v.text}</Text>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                    </View>
                )
            })}
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    padding: 20,
    height: 'auto',
  },
  chapter: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  verses: {
    color: 'red',
    marginRight: 5,
  },
  versesContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    width: 'auto',
    flex: 1,
  },
  text: {
    width: 330,
    textAlign: 'justify'
  },
  ActivityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default BooksView