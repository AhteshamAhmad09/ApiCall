import React, { useEffect, useState } from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native';


export function LearnFlatlist() {
    //   const users=[
    //     {id:1,name:"dilip"},
    //     {id:2,name:"kumar"},
    //     {id:3,name:"srk"},
    //   ]
    const [data, setData] = useState([]);

    useEffect(() => {
        getApiData();
    }, []);

    const getApiData = async () => {
        const url = `https://ksrtc.in/api/resource/searchRoutesV4?fromCityID=368&toCityID=30&fromCityName=Bangalore&toCityName=Mangalore&journeyDate=2025-06-28&mode=oneway&IsSingleLady=0`;
        const result1 = await fetch(url);
        const result = await result1.json();
        console.log('qhcqwegqued', result);

        setData(result);
    };

    const firstItem = data[0];
    console.log('lokr', firstItem?.RouteScheduleId);

    const renderItem = ({ item }) => (
        <View style={styles.box}>
            <Text style={styles.title}>RouteScheduleId: {item.RouteScheduleId}</Text>
            <Text>Email: {item.CompanyId}</Text>
            <Text>Phone: {item.AmenitiesType}</Text>
        </View>
    );


    // function extractFirstAndRest(array) {
    //     const [first, ...rest] = array;
    //     return { first, rest };
    // }

    // const { first, rest } = extractFirstAndRest(data);
    // console.log("First Item:", first);
    // console.log("Remaining Items:", rest);



    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center',fontSize:18}}>Flatlist with api data</Text>
            <FlatList
                data={data}
                // renderItem={({ item }) => <Text style={{ textAlign: 'center', fontSize: 30, marginTop: 40 }}>{item.name}</Text>}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  box: {
    // backgroundColor: '#f8f8f8',
    backgroundColor:'#D3D3D3',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    // elevation: 2, // Android shadow
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
  },

   title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  
});


