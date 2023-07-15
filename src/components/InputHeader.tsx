import React, {useState} from 'react';
import CustomIcon from './CustomIcon';
import {
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {
    COLORS,
    SPACING,
    BORDERRADIUS,
    FONTFAMILY,
    FONTSIZE,
} from '../theme/theme';

const InputHeader = (props: any) => {
    const [searchText, setSearchText] = useState<string>('');
    return (
      <View style={styles.inputBox}>
        <TextInput
          style={styles.textInput}
          onChangeText={textInput => setSearchText(textInput)}
          value={searchText}
          placeholder="Search your Movies..."
          placeholderTextColor={COLORS.whiteRGBA32}
        />
        <TouchableOpacity
          style={styles.searchIcon}
          onPress={() => props.searchFunction(searchText)}>
          <CustomIcon
            name="search"
            color={COLORS.Red}
            size={FONTSIZE.size_20}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    inputBox: {
      display: 'flex',
      paddingVertical: SPACING.space_8,
      paddingHorizontal: SPACING.space_24,
      borderWidth: 2,
      borderColor: COLORS.whiteRGBA15,
      borderRadius: BORDERRADIUS.radius_25,
      flexDirection: 'row',
    },
    textInput: {
      width: '90%',
      fontFamily: FONTFAMILY.poppins_regular,
      fontSize: FONTSIZE.size_14,
      color: COLORS.White,
    },
    searchIcon: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: SPACING.space_10,
    },
  });

export default InputHeader;




