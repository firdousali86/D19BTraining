import React,{memo} from "react";
import { FlatList } from "react-native";
import ListCellView from "./ListCellView";

const ListView = props => {
    console.log('List render');
    return (
        <FlatList data={props.userObject.favCars} renderItem={ ({ item, index }) => {
            return (
                <ListCellView item={item} />
            );
        }}
        />
    );
}
export default memo(ListView);