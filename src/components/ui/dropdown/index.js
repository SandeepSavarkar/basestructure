import { useState, Component } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react';
import { Color, ThemeUtils } from '../../../utils';
import { Alert } from 'react-native';
import { responsiveWidth } from '../../../utils/themeUtils';
const DropDown = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(props.data);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      multiple={false}
      min={1}
      max={5}
      style={{ width: responsiveWidth(80), height: 40, borderColor: 'white', borderWidth: 2, borderColor: Color.BLACK }}
      containerStyle={{
        width: responsiveWidth(80)
      }}

    />
  );
}
export default DropDown;