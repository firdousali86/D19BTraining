import {memo, useEffect} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import {PersistanceHelper} from '../../helpers';
// import PropTypes from 'prop-types';

//itemList, addToCart

type ItemObjectType = {
  name: string;
  details: string;
  price: number;
};

type MyListProps = {
  itemList: ItemObjectType[];
  addToCart: () => void;
  backgroundColor: string;
};

const MyList: React.FC<MyListProps> = memo(props => {
  useEffect(() => {
    PersistanceHelper.getValue('myname')
      .then(success => {
        console.log(success);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <FlatList
      style={{backgroundColor: props.backgroundColor}}
      data={props.itemList}
      renderItem={({item, index}) => {
        console.log('list is rerendered');
        return (
          <View
            style={{
              backgroundColor: 'pink',
              marginVertical: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              alignItems: 'center',
            }}>
            <View>
              <Text>{item.name}</Text>
              <Text>{item.details}</Text>
              <Text>{item.price}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                // dispatch(addToCart(item));
                props.addToCart(item);
              }}
              style={{backgroundColor: 'grey', padding: 10, borderRadius: 5}}>
              <Text>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
});

export default MyList;

// MyList.propTypes = {
//   itemList: PropTypes.array,
//   addToCart: PropTypes.func,
//   backgroundColor: PropTypes.oneOf('red', 'blue', 'green', 'brown', 'yellow'),
// };

// MyList.defaultProps = {
//   itemList: [],
//   addToCart: () => {},
//   backgroundColor: 'red',
// };
