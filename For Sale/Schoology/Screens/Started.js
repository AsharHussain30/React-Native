import {
  Button,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, {createContext, useContext, useRef, useState} from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Select, SelectProvider} from '@mobile-reality/react-native-select-pro';
const {height, width} = Dimensions.get('window');

export const Started = () => {
  const [value, setValue] = useState(false);
  const [showHomePage, setShowHomePage] = useState(true);

  const items = [
    {label: 'Afghanistan', value: 'AF'},
    {label: 'land Islands', value: 'AX'},
    {label: 'Albania', value: 'AL'},
    {label: 'Algeria', value: 'DZ'},
    {label: 'American Samoa', value: 'AS'},
    {label: 'AndorrA', value: 'AD'},
    {label: 'Angola', value: 'AO'},
    {label: 'Anguilla', value: 'AI'},
    {label: 'Antarctica', value: 'AQ'},
    {label: 'Antigua and Barbuda', value: 'AG'},
    {label: 'Argentina', value: 'AR'},
    {label: 'Armenia', value: 'AM'},
    {label: 'Aruba', value: 'AW'},
    {label: 'Australia', value: 'AU'},
    {label: 'Austria', value: 'AT'},
    {label: 'Azerbaijan', value: 'AZ'},
    {label: 'Bahamas', value: 'BS'},
    {label: 'Bahrain', value: 'BH'},
    {label: 'Bangladesh', value: 'BD'},
    {label: 'Barbados', value: 'BB'},
    {label: 'Belarus', value: 'BY'},
    {label: 'Belgium', value: 'BE'},
    {label: 'Belize', value: 'BZ'},
    {label: 'Benin', value: 'BJ'},
    {label: 'Bermuda', value: 'BM'},
    {label: 'Bhutan', value: 'BT'},
    {label: 'Bolivia', value: 'BO'},
    {label: 'Bosnia and Herzegovina', value: 'BA'},
    {label: 'Botswana', value: 'BW'},
    {label: 'Bouvet Island', value: 'BV'},
    {label: 'Brazil', value: 'BR'},
    {label: 'British Indian Ocean Territory', value: 'IO'},
    {label: 'Brunei Darussalam', value: 'BN'},
    {label: 'Bulgaria', value: 'BG'},
    {label: 'Burkina Faso', value: 'BF'},
    {label: 'Burundi', value: 'BI'},
    {label: 'Cambodia', value: 'KH'},
    {label: 'Cameroon', value: 'CM'},
    {label: 'Canada', value: 'CA'},
    {label: 'Cape Verde', value: 'CV'},
    {label: 'Cayman Islands', value: 'KY'},
    {label: 'Central African Republic', value: 'CF'},
    {label: 'Chad', value: 'TD'},
    {label: 'Chile', value: 'CL'},
    {label: 'China', value: 'CN'},
    {label: 'Christmas Island', value: 'CX'},
    {label: 'Cocos (Keeling) Islands', value: 'CC'},
    {label: 'Colombia', value: 'CO'},
    {label: 'Comoros', value: 'KM'},
    {label: 'Congo', value: 'CG'},
    {label: 'Congo, The Democratic Republic of the', value: 'CD'},
    {label: 'Cook Islands', value: 'CK'},
    {label: 'Costa Rica', value: 'CR'},
    {label: "Cote D'Ivoire", value: 'CI'},
    {label: 'Croatia', value: 'HR'},
    {label: 'Cuba', value: 'CU'},
    {label: 'Cyprus', value: 'CY'},
    {label: 'Czech Republic', value: 'CZ'},
    {label: 'Denmark', value: 'DK'},
    {label: 'Djibouti', value: 'DJ'},
    {label: 'Dominica', value: 'DM'},
    {label: 'Dominican Republic', value: 'DO'},
    {label: 'Ecuador', value: 'EC'},
    {label: 'Egypt', value: 'EG'},
    {label: 'El Salvador', value: 'SV'},
    {label: 'Equatorial Guinea', value: 'GQ'},
    {label: 'Eritrea', value: 'ER'},
    {label: 'Estonia', value: 'EE'},
    {label: 'Ethiopia', value: 'ET'},
    {label: 'Falkland Islands (Malvinas)', value: 'FK'},
    {label: 'Faroe Islands', value: 'FO'},
    {label: 'Fiji', value: 'FJ'},
    {label: 'Finland', value: 'FI'},
    {label: 'France', value: 'FR'},
    {label: 'French Guiana', value: 'GF'},
    {label: 'French Polynesia', value: 'PF'},
    {label: 'French Southern Territories', value: 'TF'},
    {label: 'Gabon', value: 'GA'},
    {label: 'Gambia', value: 'GM'},
    {label: 'Georgia', value: 'GE'},
    {label: 'Germany', value: 'DE'},
    {label: 'Ghana', value: 'GH'},
    {label: 'Gibraltar', value: 'GI'},
    {label: 'Greece', value: 'GR'},
    {label: 'Greenland', value: 'GL'},
    {label: 'Grenada', value: 'GD'},
    {label: 'Guadeloupe', value: 'GP'},
    {label: 'Guam', value: 'GU'},
    {label: 'Guatemala', value: 'GT'},
    {label: 'Guernsey', value: 'GG'},
    {label: 'Guinea', value: 'GN'},
    {label: 'Guinea-Bissau', value: 'GW'},
    {label: 'Guyana', value: 'GY'},
    {label: 'Haiti', value: 'HT'},
    {label: 'Heard Island and Mcdonald Islands', value: 'HM'},
    {label: 'Holy See (Vatican City State)', value: 'VA'},
    {label: 'Honduras', value: 'HN'},
    {label: 'Hong Kong', value: 'HK'},
    {label: 'Hungary', value: 'HU'},
    {label: 'Iceland', value: 'IS'},
    {label: 'India', value: 'IN'},
    {label: 'Indonesia', value: 'ID'},
    {label: 'Iran, Islamic Republic Of', value: 'IR'},
    {label: 'Iraq', value: 'IQ'},
    {label: 'Ireland', value: 'IE'},
    {label: 'Isle of Man', value: 'IM'},
    {label: 'Israel', value: 'IL'},
    {label: 'Italy', value: 'IT'},
    {label: 'Jamaica', value: 'JM'},
    {label: 'Japan', value: 'JP'},
    {label: 'Jersey', value: 'JE'},
    {label: 'Jordan', value: 'JO'},
    {label: 'Kazakhstan', value: 'KZ'},
    {label: 'Kenya', value: 'KE'},
    {label: 'Kiribati', value: 'KI'},
    {label: "Korea, Democratic People'S Republic of", value: 'KP'},
    {label: 'Korea, Republic of', value: 'KR'},
    {label: 'Kuwait', value: 'KW'},
    {label: 'Kyrgyzstan', value: 'KG'},
    {label: "Lao People'S Democratic Republic", value: 'LA'},
    {label: 'Latvia', value: 'LV'},
    {label: 'Lebanon', value: 'LB'},
    {label: 'Lesotho', value: 'LS'},
    {label: 'Liberia', value: 'LR'},
    {label: 'Libyan Arab Jamahiriya', value: 'LY'},
    {label: 'Liechtenstein', value: 'LI'},
    {label: 'Lithuania', value: 'LT'},
    {label: 'Luxembourg', value: 'LU'},
    {label: 'Macao', value: 'MO'},
    {label: 'Macedonia, The Former Yugoslav Republic of', value: 'MK'},
    {label: 'Madagascar', value: 'MG'},
    {label: 'Malawi', value: 'MW'},
    {label: 'Malaysia', value: 'MY'},
    {label: 'Maldives', value: 'MV'},
    {label: 'Mali', value: 'ML'},
    {label: 'Malta', value: 'MT'},
    {label: 'Marshall Islands', value: 'MH'},
    {label: 'Martinique', value: 'MQ'},
    {label: 'Mauritania', value: 'MR'},
    {label: 'Mauritius', value: 'MU'},
    {label: 'Mayotte', value: 'YT'},
    {label: 'Mexico', value: 'MX'},
    {label: 'Micronesia, Federated States of', value: 'FM'},
    {label: 'Moldova, Republic of', value: 'MD'},
    {label: 'Monaco', value: 'MC'},
    {label: 'Mongolia', value: 'MN'},
    {label: 'Montenegro', value: 'ME'},
    {label: 'Montserrat', value: 'MS'},
    {label: 'Morocco', value: 'MA'},
    {label: 'Mozambique', value: 'MZ'},
    {label: 'Myanmar', value: 'MM'},
    {label: 'Namibia', value: 'NA'},
    {label: 'Nauru', value: 'NR'},
    {label: 'Nepal', value: 'NP'},
    {label: 'Netherlands', value: 'NL'},
    {label: 'Netherlands Antilles', value: 'AN'},
    {label: 'New Caledonia', value: 'NC'},
    {label: 'New Zealand', value: 'NZ'},
    {label: 'Nicaragua', value: 'NI'},
    {label: 'Niger', value: 'NE'},
    {label: 'Nigeria', value: 'NG'},
    {label: 'Niue', value: 'NU'},
    {label: 'Norfolk Island', value: 'NF'},
    {label: 'Northern Mariana Islands', value: 'MP'},
    {label: 'Norway', value: 'NO'},
    {label: 'Oman', value: 'OM'},
    {label: 'Pakistan', value: 'PK'},
    {label: 'Palau', value: 'PW'},
    {label: 'Palestinian Territory, Occupied', value: 'PS'},
    {label: 'Panama', value: 'PA'},
    {label: 'Papua New Guinea', value: 'PG'},
    {label: 'Paraguay', value: 'PY'},
    {label: 'Peru', value: 'PE'},
    {label: 'Philippines', value: 'PH'},
    {label: 'Pitcairn', value: 'PN'},
    {label: 'Poland', value: 'PL'},
    {label: 'Portugal', value: 'PT'},
    {label: 'Puerto Rico', value: 'PR'},
    {label: 'Qatar', value: 'QA'},
    {label: 'Reunion', value: 'RE'},
    {label: 'Romania', value: 'RO'},
    {label: 'Russian Federation', value: 'RU'},
    {label: 'RWANDA', value: 'RW'},
    {label: 'Saint Helena', value: 'SH'},
    {label: 'Saint Kitts and Nevis', value: 'KN'},
    {label: 'Saint Lucia', value: 'LC'},
    {label: 'Saint Pierre and Miquelon', value: 'PM'},
    {label: 'Saint Vincent and the Grenadines', value: 'VC'},
    {label: 'Samoa', value: 'WS'},
    {label: 'San Marino', value: 'SM'},
    {label: 'Sao Tome and Principe', value: 'ST'},
    {label: 'Saudi Arabia', value: 'SA'},
    {label: 'Senegal', value: 'SN'},
    {label: 'Serbia', value: 'RS'},
    {label: 'Seychelles', value: 'SC'},
    {label: 'Sierra Leone', value: 'SL'},
    {label: 'Singapore', value: 'SG'},
    {label: 'Slovakia', value: 'SK'},
    {label: 'Slovenia', value: 'SI'},
    {label: 'Solomon Islands', value: 'SB'},
    {label: 'Somalia', value: 'SO'},
    {label: 'South Africa', value: 'ZA'},
    {label: 'South Georgia and the South Sandwich Islands', value: 'GS'},
    {label: 'Spain', value: 'ES'},
    {label: 'Sri Lanka', value: 'LK'},
    {label: 'Sudan', value: 'SD'},
    {label: 'Suriname', value: 'SR'},
    {label: 'Svalbard and Jan Mayen', value: 'SJ'},
    {label: 'Swaziland', value: 'SZ'},
    {label: 'Sweden', value: 'SE'},
    {label: 'Switzerland', value: 'CH'},
    {label: 'Syrian Arab Republic', value: 'SY'},
    {label: 'Taiwan, Province of China', value: 'TW'},
    {label: 'Tajikistan', value: 'TJ'},
    {label: 'Tanzania, United Republic of', value: 'TZ'},
    {label: 'Thailand', value: 'TH'},
    {label: 'Timor-Leste', value: 'TL'},
    {label: 'Togo', value: 'TG'},
    {label: 'Tokelau', value: 'TK'},
    {label: 'Tonga', value: 'TO'},
    {label: 'Trinidad and Tobago', value: 'TT'},
    {label: 'Tunisia', value: 'TN'},
    {label: 'Turkey', value: 'TR'},
    {label: 'Turkmenistan', value: 'TM'},
    {label: 'Turks and Caicos Islands', value: 'TC'},
    {label: 'Tuvalu', value: 'TV'},
    {label: 'Uganda', value: 'UG'},
    {label: 'Ukraine', value: 'UA'},
    {label: 'United Arab Emirates', value: 'AE'},
    {label: 'United Kingdom', value: 'GB'},
    {label: 'United States', value: 'US'},
    {label: 'United States Minor Outlying Islands', value: 'UM'},
    {label: 'Uruguay', value: 'UY'},
    {label: 'Uzbekistan', value: 'UZ'},
    {label: 'Vanuatu', value: 'VU'},
    {label: 'Venezuela', value: 'VE'},
    {label: 'Viet Nam', value: 'VN'},
    {label: 'Virgin Islands, British', value: 'VG'},
    {label: 'Virgin Islands, U.S.', value: 'VI'},
    {label: 'Wallis and Futuna', value: 'WF'},
    {label: 'Western Sahara', value: 'EH'},
    {label: 'Yemen', value: 'YE'},
    {label: 'Zambia', value: 'ZM'},
    {label: 'Zimbabwe', value: 'ZW'},
  ];

  const [Country ,setCountry] = useState('');

  const [Number, setNumber] = useState('');

  const navigation = useNavigation();

  const MyView = () => {
    return (
      <>
          <Text
            style={{
              fontSize: heightPercentageToDP('2.1%'),
              paddingLeft: 45,
              padding:10,
              color: 'white',
              top: height / 2,
            }}>
            COUNTRY.
          </Text>
        <View
          style={{
            justifyContent: 'flex-start',
            marginHorizontal: 30,
            alignItems: 'center',
            top: height / 2,
            zIndex: 6,
          }}>
          <Select
            styles={
              (SelectStyles = {
                select: {
                  clear: {
                    icon: {
                      tintColor: 'white',
                      right: 4,
                    },
                  },
                  text: {
                    paddingLeft: 10,
                    color: 'white',
                    fontSize: widthPercentageToDP('4'),
                  },
                  container: {
                    backgroundColor: '#2D9CDB',
                    alignItems: 'center',
                    marginHorizontal: 30,
                    height: heightPercentageToDP('8'),
                    borderColor:"white",
                    borderRadius: 10,
                    zIndex: 7,
                    elevation:15,
                  },
                  arrow: {
                    icon: {
                      tintColor: 'white',
                    },
                  },
                },
              })
            }
            optionButtonProps={{
              marginTop: 20,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.8,
              justifyContent: 'center',
            }}
            options={items}
            searchable={true}
            onSelect={e => setCountry(e.label)}
            placeholderText={Country != "" ? Country : "Select Country"}
            placeholderTextColor="white"
          />
        </View>
      </>
    );
  };

  return (
    <View style={{backgroundColor: '#1A73E8', flex: 1, alignItems: 'center'}}>
      <StatusBar hidden />

      {/* Sign In */}
      <View style={{backgroundColor: '#1A73E8', flex: 1, alignItems: 'center'}}>
        <Image
          source={require('../assets/schoology.png')}
          style={{height: 200, resizeMode: 'contain', top: 90}}
        />
      </View>
        <>
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}>
              <SelectProvider>
                <MyView />
              </SelectProvider>
            <View style={{marginTop:height/1.9}}>
              <Text
                style={{
                  fontSize: heightPercentageToDP('2.1%'),
                  paddingLeft: 45,
                  padding: 10,
                  color: 'white',
                  zIndex: -1,
                }}>
                MOBILE NO.
              </Text>
              <View style={MobileNoStyle.Container}>
                <TextInput
                  placeholder="Enter Your Number"
                  placeholderTextColor="white"
                  keyboardAppearance="dark"
                  keyboardType="number-pad"
                  autoCapitalize="none"
                  value={value}
                  onChangeText={setValue}
                  style={MobileNoStyle.TextInputStyle}
                />
              </View>
            </View>
          </View>
        </>
     
      <TouchableOpacity
        style={{right: 0, position: 'absolute', bottom: 0}}
        onPress={() => {
            navigation.navigate('Verification');
          }}>
        <View
          style={{
            backgroundColor: '#2D9CDB',
            width: height / 15,
            height: height / 15,
            alignSelf: 'flex-end',
            justifyContent: 'center',
            borderRadius: 100,
            bottom: 26,
            right: 15,
          }}>
          <Text style={{textAlign: 'center', color: 'white'}}>
            <MaterialCommunityIcons name="arrow-right" size={height / 35} />
          </Text>
        </View>
      </TouchableOpacity>
      {/* </TouchableOpacity> */}
    </View>
  );
};

const MobileNoStyle = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    backgroundColor: '#2D9CDB',
    borderWidth:1,
    borderColor:"white",
    elevation:15,
    alignItems: 'center',
    marginHorizontal: 30,
    height: heightPercentageToDP('8'),
    borderRadius: 10,
    zIndex: -1,
  },
  TextInputStyle: {
    flex: 1,
    paddingLeft: 10,
    color: 'white',
    fontSize: widthPercentageToDP('4'),
    marginHorizontal: 30,
  },
  eye: {
    textAlign: 'right',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 12,
  },
});
