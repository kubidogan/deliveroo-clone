import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItems } from '../features/basketSlice';
import { XCircleIcon } from "react-native-heroicons/outline";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [gropuedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();


  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[items.id] || []).push(item);
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items])

  return (
    <SafeAreaView>
      <View>
         <View>
            <View>
              <Text className="text-lg font-bold text-center">Basket</Text>
              <Text className="text-center text-gray-400">{restaurant.title}</Text>
            </View>
            <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
            >
             <XCircleIcon color="#00CCBB" height={50} width={50}/>
            </TouchableOpacity>
         </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen
