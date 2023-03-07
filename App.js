import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import DatePicker from 'react-native-modern-datepicker';


const App = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const colors = ['aqua', '#00ffad', '#9faf00', '#fa490a']
  const [color, setColor] = useState(1)
  const [curColor, setCurCollor] = useState('#00ffad')


  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };
  const wint = /\ 12|\ 01|\ 02/gm
  const sprin = /\ 03|\ 04|\ 05/gm
  const summ = /\ 06|\ 07|\ 08/gm
  const fall = /\ 09|\ 10|\ 11/gm
  
  const [date, setDate] = useState('');

  useEffect(() => {
    if(wint.test(date)){
      setColor('#aafffff')
    }
    if(sprin.test(date)){
      setCurCollor('#00ffad')
    }
    if(summ.test(date)){
      setCurCollor('#9faf00')
    }
    if(fall.test(date)){
      setCurCollor('#fa490a')
    }
    else setColor(0)
  }, [date])

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, { backgroundColor: curColor}]}>
        <Text style={styles.titleStyle}>Calendar</Text>
        <DatePicker
          mode="monthYear"
          selectorStartingYear={2000}
          onMonthYearChange={selectedDate => setDate(selectedDate)}
        />
        {
          !!date && (
            <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={new Date(2018, 1, 1)}
          maxDate={new Date(2050, 6, 3)}
          weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
          months={[
            'January',
            'Febraury',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]}
          initialDate={Date.parse(date.replace(/ /ig, '-'))}
          previousTitle=" "
          nextTitle=" "
          todayBackgroundColor="#e6ffe6"
          selectedDayColor="#ffffff"
          selectedDayTextColor="#000000"
          scaleFactor={375}
          textStyle={{
            fontFamily: 'revert',
            fontWeight: 'bold',
            color: '#fff',
          }}
          onDateChange={onDateChange}
        />
          )
        }
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    // backgroundColor: '#5ed4f8',
    padding: 16,
    fontFamily: 'revert',
  },
  textStyle: {
    marginTop: 10,
  },
  titleStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    margin: 10,
  },
});
