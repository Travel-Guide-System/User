import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get("screen")

const ActionSheet = (props) => {
    return (
        <View>
            <View style={styles.lineStyle} />
        </View>
    );
}

const styles = StyleSheet.create({
    lineStyle: {
        position: 'absolute',
        top: 0,
        borderRadius: 10,
        width: width / 2,
        borderWidth: 2,
        borderColor: '#555',
        margin: 25,
    },
});

export default ActionSheet;