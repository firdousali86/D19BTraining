import React,{memo} from "react";
import { FlatList } from "react-native";
import ListCellView from "./ListCellView";
import { useUserContext } from "../../../master/contextApi/userContext";

const ListView = props => {
    console.log('List render');

    const userObject = useUserContext();
    return (
        <FlatList data={userObject?.favCars} renderItem={ ({ item, index }) => {
            return (
                <ListCellView item={item} />
            );
        }}
        />
    );
}
export default memo(ListView);