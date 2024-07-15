import React from 'react';
import GroceryItem from './GroceryItem';

function GroceryList({groceries}) {
    // const groceryItems = [];
    // groceries.forEach((grocery) => {
    //     groceryItems.push(<GroceryItem name={grocery.name} count={grocery.count} />);
    // }); -> forEach를 사용하여 각배열의 요소를 변경, forEach 자체는 반환값이 없고 원본 배열 변경


    // map 사용시 제공된 함수 호출 및 각 요소에 대한 새로운 값으로 이루어진 새 배열을 반환.
    // 원본 배열을 변경하지 않고 새로운 배열은 반환. 함수형 프로그래밍 스타일에 더 적합
    return (
        <ol className={'grocery-list'}>
            { 
                groceries.map(e => <GroceryItem
                                     key={e.no} 
                                     name={e.name}
                                     count={e.count} />)
            }
        </ol>
    );
}

export default GroceryList;