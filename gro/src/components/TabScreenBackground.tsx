import {View} from 'react-native';

export const TabScreenBackground = () => {
    return(
        <>
        <View
        pointerEvents='none'
        className='absolute -left-10 -top-10 h-64 w-64 rounded-full bg-accent'
        />
        <View/>
        </>

    );
}