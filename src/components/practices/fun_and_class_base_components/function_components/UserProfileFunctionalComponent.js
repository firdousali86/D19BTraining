import React from 'react';
import {View} from 'react-native';
import CarBasicInfo from './CarBasicInfo';
import ChoiceInfo from './ChoiceInfo';

const UserProfileFunctionalComponent = props => {
  const {carObject} = props;
  const {basicInfo, colorAndPriceInfo} = carObject;
  console.log(colorAndPriceInfo)
  renderBasicCarInfo = basicInfo => {
    return <CarBasicInfo basicInfo={basicInfo} />;
  }; 
  renderChoiceInfo = colorAndPriceInfo => {
    return <ChoiceInfo colorAndPriceInfo={colorAndPriceInfo} />;
  };
  return (
    <View>
      {renderBasicCarInfo(basicInfo)}
      {renderChoiceInfo(colorAndPriceInfo)}
    </View>
  );
};

export default UserProfileFunctionalComponent;
