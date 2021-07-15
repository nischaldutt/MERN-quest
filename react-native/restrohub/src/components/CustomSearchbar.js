import React from "react";
import { Searchbar } from "react-native-paper";
import { SearchBar } from "react-native-elements";

const CustomSearchbar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [value, setValue] = React.useState("");

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    // <SearchBar
    //   platform="default"
    //   containerStyle={{}}
    //   inputContainerStyle={{}}
    //   inputStyle={{}}
    //   leftIconContainerStyle={{}}
    //   rightIconContainerStyle={{}}
    //   lightTheme
    //   loadingProps={{}}
    //   onChangeText={newVal => setValue(newVal)}
    //   onClearText={() => console.log(onClearText())}
    //   placeholder="Type query here..."
    //   placeholderTextColor="#888"
    //   cancelButtonTitle="Cancel"
    //   cancelButtonProps={{}}
    //   onCancel={() => console.log(onCancel())}
    //   value={value}
    // />
  );
};

export default CustomSearchbar;
