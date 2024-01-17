import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ApiHelper } from "../../helper";
const Api = () => {
    const [data, setData] = useState([]);
    const getMovies = async () => {

        return fetch('https://reactnative.dev/movies.json')
            .then(response => response.json())
            .then(json => {
                setData(json.movies);
            })
            .catch(error => {
                console.error(error);
            });


    };

    useEffect(() => {
        ApiHelper.get('https://reactnative.dev/movies.json').then(data => {
            console.log(data)
            setData(data.movies);

        }).catch(err => { console.log(err) });
    }, []);

    return (
        <View style={styles.table}>
            <View style={styles.row}>
                <Text style={styles.header_cell}>
                    Title
                </Text>
                <Text style={styles.header_cell}>
                    Release
                </Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <Text style={styles.cell}>
                            {item.title}
                        </Text>
                        <Text style={styles.cell}>
                            {item.releaseYear}
                        </Text>
                    </View>
                )}
            />

        </View>
    )
}

export default Api

const styles = StyleSheet.create({
    table: {
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 10,
        marginTop: 30,
        flex: 1,
        padding: 24
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    header_cell: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        width: 200,
        height: 50,
        textAlign: "center",
        fontSize: 18,
        color: "black",
        borderColor: "black",
        fontWeight: "600"
    },
    cell: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        width: 200,
        height: 50,
        textAlign: "center",
        fontSize: 18,
        color: "black",
        borderColor: "black",
    }
})