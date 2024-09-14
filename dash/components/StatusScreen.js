import {View, ScrollView, Button, Text, TextInput, Image, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {SpeedoMeterPlus} from 'react-native-speedometer-plus';

export default function StatusScreen(){

    const allLabels = [
        {
            name: 'Test1',
            labelColor: 'gray',
            activeBarColor: 'gray',
          },
          {
            name: 'Test2',
            labelColor: 'gray',
            activeBarColor: 'gray',
          },
          {
            name: 'Test3',
            labelColor: 'gray',
            activeBarColor: 'gray',
          },
    ]

    const [inputValue, setInputValue] = useState('');
    const [number, setNumber] = useState(0);

    const handlePress = () => {
        const parsedNumber = parseInt(inputValue, 10);
        if (!isNaN(parsedNumber)) {
            setNumber(parsedNumber);
        } else {
            alert('유효한 숫자를 입력하세요.');
        }
    }


    return (
        
            <ScrollView showsVerticalScrollIndicator={false}>

                <SafeAreaView style={{ flexDirection:'cols', justifyContent : 'space-between',}}>
                    <TextInput
                        value={inputValue}
                        onChangeText={setInputValue}
                    />
                    <Button title="적용" onPress={handlePress}/>

                    <SpeedoMeterPlus
                        value={number}
                        size={200}  
                        minValue={0}
                        maxValue={100}
                        innerLabelNoteValue="CLOCK"
                        labels = {allLabels}
                        innerLabelNoteStyle={{ color: 'black', fontSize: 23 }}
                        
                        
                    />
                    <SpeedoMeterPlus
                        value={50}
                        size={200}
                        minValue={0}
                        maxValue={100}
                        innerLabelNoteValue="TEMP"
                        labels = {allLabels}
                        innerLabelNoteStyle={{ color: 'black', fontSize: 23 }}
                    />
                    <SpeedoMeterPlus
                        value={50}
                        size={200}
                        minValue={0}
                        maxValue={100}
                        innerLabelNoteValue="POWER"
                        labels = {allLabels}
                        innerLabelNoteStyle={{ color: 'black', fontSize: 23 }}
                    />
                    <SpeedoMeterPlus
                        value={50}
                        size={200}
                        minValue={0}
                        maxValue={100}
                        innerLabelNoteValue="TDP"
                        labels = {allLabels}
                        innerLabelNoteStyle={{ color: 'black', fontSize: 23 }}
                    />
                </SafeAreaView>
            </ScrollView>
        
    );
}

