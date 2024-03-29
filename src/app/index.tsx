import { CategoryButton } from '@/components/category-button';
import { Header } from '@/components/header';
import { CATEGORIES } from "@/utils/data/products";
import { useState } from 'react';
import { FlatList, View } from 'react-native';

export default function Home(){
    const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

    function handleSelectCategory(selectedCategory: string) {
        return setSelectedCategory(selectedCategory);
    }

    return (
        <View className='flex-1 pt-8'>
            <Header title="Faça seu pedido" cartQuantityItems={8}/>

            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <CategoryButton 
                    title={item} 
                    isSelected={item === selectedCategory}
                    onPress={() => handleSelectCategory(item)} 
                    />
                )}
                horizontal
                className='max-h-10 mt-5'
                contentContainerStyle={{ gap: 12, paddingHorizontal: 20}}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
