declare module 'react-native-ico-flags' {
    import { ReactNode } from 'react';

    type iconNames = 'ethiopia' |
      'oman' |
      'tanzania' |
      'slovenia' |
      'puerto-rico' |
      'mozambique' |
      'iraq' |
      'lebanon' |
      'uganda' |
      'nigeria' |
      'italy' |
      'malta' |
      'tunisia' |
      'nicaragua' |
      'el-salvador' |
      'zambia' |
      'wales' |
      'dominican-republic' |
      'qatar' |
      'namibia' |
      'mauritius' |
      'european-union' |
      'luxembourg' |
      'hawaii' |
      'lithuania' |
      'jamaica' |
      'honduras' |
      'myanmar' |
      'kenya' |
      'cyprus' |
      'pakistan' |
      'latvia' |
      'japan' |
      'kazakhstan' |
      'serbia' |
      'scotland' |
      'north-korea' |
      'uruguay' |
      'syria' |
      'guatemala' |
      'iceland' |
      'jordan' |
      'monaco' |
      'spain' |
      'slovakia' |
      'united-nations' |
      'panama' |
      'new-zealand' |
      'ecuador' |
      'romania' |
      'chile' |
      'finland' |
      'hungary' |
      'belgium' |
      'south-korea' |
      'malaysia' |
      'venezuela' |
      'norway' |
      'saudi-arabia' |
      'israel' |
      'czech-republic' |
      'colombia' |
      'iran' |
      'argentina' |
      'ukraine' |
      'germany' |
      'hong-kong' |
      'united-arab-emirates' |
      'laos' |
      'ireland' |
      'greece' |
      'denmark' |
      'sweden' |
      'peru' |
      'south-africa' |
      'philippines' |
      'france' |
      'indonesia' |
      'egypt' |
      'taiwan' |
      'cook-islands' |
      'cocos-island' |
      'christmas-island' |
      'ceuta' |
      'american-samoa' |
      'morocco' |
      'anguilla' |
      'corsica' |
      'canary-islands' |
      'comoros' |
      'central-african-republic' |
      'cayman-islands' |
      'british-indian-ocean-territory' |
      'bhutan' |
      'chad' |
      'cape-verde' |
      'switzerland' |
      'benin' |
      'aruba' |
      'balearic-islands' |
      'andorra' |
      'burundi' |
      'antigua-and-barbuda' |
      'aland-islands' |
      'cameroon' |
      'brunei' |
      'poland' |
      'bonaire' |
      'belarus' |
      'barbados' |
      'british-virgin-islands' |
      'bosnia-and-herzegovina' |
      'bermuda' |
      'belize' |
      'bahrain' |
      'albania' |
      'burkina-faso' |
      'turkey' |
      'basque-country' |
      'armenia' |
      'afghanistan' |
      'british-columbia' |
      'angola' |
      'azerbaijan' |
      'algeria' |
      'botswana' |
      'bangladesh' |
      'cuba' |
      'australia' |
      'costa-rica' |
      'cambodia' |
      'bolivia' |
      'croatia' |
      'bulgaria' |
      'galapagos-islands' |
      'martinique' |
      'tonga' |
      'st-lucia' |
      'rapa-nui' |
      'singapore' |
      'palau' |
      'niue' |
      'macao' |
      'fiji' |
      'faroe-islands' |
      'dominica' |
      'vanuatu' |
      'sierra-leone' |
      'seychelles' |
      'kosovo' |
      'england' |
      'united-states-of-america' |
      'guinea' |
      'orkney-islands' |
      'turks-and-caicos' |
      'transnistria' |
      'tokelau' |
      'gambia' |
      'st-vincent-and-the-grenadines' |
      'south-sudan' |
      'somaliland' |
      'solomon-islands' |
      'vietnam' |
      'sint-maarten' |
      'sint-eustatius' |
      'saint-kitts-and-nevis' |
      'saba-island' |
      'pitcairn-islands' |
      'palestine' |
      'ossetia' |
      'northern-marianas-islands' |
      'nauru' |
      'portugal' |
      'montserrat' |
      'melilla' |
      'mauritania' |
      'kuwait' |
      'guernsey' |
      'guam' |
      'grenada' |
      'greenland' |
      'thailand' |
      'gibraltar' |
      'gabon' |
      'falkland-islands' |
      'virgin-islands' |
      'austria' |
      'vatican-city' |
      'tubalu' |
      'turkmenistan' |
      'togo' |
      'bahamas' |
      'netherlands' |
      'azores-islands' |
      'suriname' |
      'somalia' |
      'sicily' |
      'sardinia' |
      'sao-tome-and-principe' |
      'norfolk-island' |
      'niger' |
      'micronesia' |
      'marshall-island' |
      'canada' |
      'mali' |
      'kyrgyzstan' |
      'guinea-bissau' |
      'eritrea' |
      'djibouti' |
      'curacao' |
      'st-barts' |
      'san-marino' |
      'northen-cyprus' |
      'liechtenstein' |
      'india' |
      'liberia' |
      'yemen' |
      'uzbekistn' |
      'sudan' |
      'sahrawi-arab-democratic-republic' |
      'republic-of-macedonia' |
      'otan' |
      'libya' |
      'east-timor' |
      'tibet' |
      'russia' |
      'papua-new-guinea' |
      'montenegro' |
      'moldova' |
      'maldives' |
      'madeira' |
      'french-polynesia' |
      'trinidad-and-tobago' |
      'tajikistan' |
      'sri-lanka' |
      'mexico' |
      'republic-of-the-congo' |
      'equatorial-guinea' |
      'zimbabwe' |
      'rwanda' |
      'lesotho' |
      'ivory-coast' |
      'isle-of-man' |
      'haiti' |
      'samoa' |
      'nepal' |
      'brazil' |
      'mongolia' |
      'malawi' |
      'madagascar' |
      'jersey' |
      'ghana' |
      'georgia' |
      'estonia' |
      'democratic-republic-of-congo' |
      'senegal' |
      'paraguay' |
      'china' |
      'united-kingdom' |
      'ET' |
      'OM' |
      'TZ' |
      'SI' |
      'PR' |
      'MZ' |
      'IQ' |
      'LB' |
      'UG' |
      'NG' |
      'IT' |
      'MT' |
      'TN' |
      'NI' |
      'SV' |
      'ZM' |
      'WA' |
      'DO' |
      'QA' |
      'NA' |
      'MU' |
      'EU' |
      'LU' |
      'HI' |
      'LT' |
      'JM' |
      'HN' |
      'MM' |
      'KE' |
      'CY' |
      'PK' |
      'LV' |
      'JP' |
      'KZ' |
      'RS' |
      'SCT' |
      'KP' |
      'UY' |
      'SY' |
      'GT' |
      'IS' |
      'JO' |
      'MC' |
      'ES' |
      'SK' |
      'UN' |
      'PA' |
      'NZ' |
      'EC' |
      'RO' |
      'CL' |
      'FI' |
      'HU' |
      'BE' |
      'KR' |
      'MY' |
      'VE' |
      'NO' |
      'SA' |
      'IL' |
      'CZ' |
      'CO' |
      'IR' |
      'AR' |
      'UA' |
      'DE' |
      'HK' |
      'AE' |
      'LA' |
      'IE' |
      'GR' |
      'DK' |
      'SE' |
      'PE' |
      'ZA' |
      'PH' |
      'FR' |
      'ID' |
      'EG' |
      'TW' |
      'CK' |
      'CC' |
      'CX' |
      'CE' |
      'AS' |
      'MA' |
      'AI' |
      'CS' |
      'IC' |
      'KM' |
      'CF' |
      'KY' |
      'IO' |
      'BT' |
      'TD' |
      'CV' |
      'CH' |
      'BJ' |
      'AW' |
      'AB' |
      'IB' |
      'AD' |
      'BI' |
      'AG' |
      'AX' |
      'CM' |
      'BX' |
      'PL' |
      'BQ' |
      'BY' |
      'BB' |
      'VG' |
      'BA' |
      'BM' |
      'BZ' |
      'BH' |
      'AL' |
      'BF' |
      'TR' |
      'BC' |
      'AO' |
      'AZ' |
      'DZ' |
      'BW' |
      'BD' |
      'CU' |
      'AU' |
      'CR' |
      'KH' |
      'BO' |
      'HR' |
      'BG' |
      'GZ' |
      'MQ' |
      'TO' |
      'LC' |
      'RE' |
      'SG' |
      'PW' |
      'NU' |
      'MO' |
      'FJ' |
      'FO' |
      'DM' |
      'VU' |
      'SL' |
      'SC' |
      'KV' |
      'GB' |
      'US' |
      'GN' |
      'OR' |
      'TC' |
      'NS' |
      'TK' |
      'GM' |
      'VC' |
      'SS' |
      'SO' |
      'SB' |
      'VN' |
      'SX' |
      'SE' |
      'KN' |
      'SA' |
      'PN' |
      'PS' |
      'OS' |
      'MP' |
      'NR' |
      'PT' |
      'MS' |
      'ML' |
      'MR' |
      'KW' |
      'GG' |
      'GU' |
      'GD' |
      'GL' |
      'TH' |
      'GI' |
      'GA' |
      'FK' |
      'VI' |
      'AT' |
      'VA' |
      'TL' |
      'TM' |
      'TG' |
      'BS' |
      'NL' |
      'AC' |
      'SR' |
      'SO' |
      'SI' |
      'SA' |
      'ST' |
      'NF' |
      'NE' |
      'FM' |
      'MH' |
      'CA' |
      'ML' |
      'KG' |
      'GW' |
      'ER' |
      'DJ' |
      'CW' |
      'TB' |
      'SM' |
      'NC' |
      'LI' |
      'IN' |
      'LR' |
      'YE' |
      'UZ' |
      'SD' |
      'EH' |
      'MK' |
      'OT' |
      'LY' |
      'TP' |
      'TB' |
      'RU' |
      'PG' |
      'ME' |
      'MD' |
      'MV' |
      'MD' |
      'PF' |
      'TT' |
      'TJ' |
      'LK' |
      'MX' |
      'CG' |
      'GQ' |
      'ZW' |
      'RW' |
      'LS' |
      'CI' |
      'IM' |
      'HT' |
      'WS' |
      'NP' |
      'BR' |
      'MN' |
      'MW' |
      'MG' |
      'JE' |
      'GH' |
      'GE' |
      'EE' |
      'CD' |
      'SN' |
      'PY' |
      'CN' |
      'GB';    

    interface IconProps {
      name: iconNames;
      color: string;
      size: number;
    }

    const Icon: (props: IconProps) => ReactNode;

    export { iconNames };
    export default Icon;
}

