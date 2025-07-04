

export interface User {
  email: string;
  token: string;
  firstName: string;
  lastName: string;
  id: string;
  sect: "Shia" | "Sunni";
  countryOfOrigin: Country;
  preferredMadhab?: 'Hanafi' | "Shafi'i" | 'Maliki' | 'Hanbali' | "Salafi" | 'Ja\'fari' | 'Ismaili' | 'Zaydi';
  facebookUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  websiteUrl: string;
  accessLevel?: AccessLevel;
  status?: ClientStatus;
  dateCreated: Date;  
  forcePasswordReset: boolean;
  isDeleted: boolean; 
  deletedDate?: Date; 
  registerDate: Date; 
  updatedDate: Date; 
}

export interface SignUpFormValues {
  email: string;
  firstName: string;
  lastName: string;
  sect?: "Shia" | "Sunni";
  countryOfOrigin?: Country;
  preferredMadhab?: 'Hanafi' | "Shafi'i" | 'Maliki' | 'Hanbali' | "Salafi" | 'Ja\'fari' | 'Ismaili' | 'Zaydi';
  facebookUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  websiteUrl?: string;
  password?: string;
  confirmPassword?: string;
  ipAddress?: string;
  error?: string;
  id?: string ;
}

export interface UserFormValues {
    email: string;
    firstName: string;
    lastName: string;
    id: string;
    sect: "Shia" | "Sunni";
    countryOfOrigin: Country;
    preferredMadhab?: 'Hanafi' | "Shafi'i" | 'Maliki' | 'Hanbali' | "Salafi" | 'Ja\'fari' | 'Ismaili' | 'Zaydi';
    facebookUrl: string;
    linkedinUrl: string;
    twitterUrl: string;
    websiteUrl: string;
    accessLevel?: AccessLevel;
    status?: ClientStatus;
    dateCreated: Date;  
    forcePasswordReset: boolean;
}

export interface UserLogin {
  login: string;
  password: string;
  ipAddress: string;
  location: string;
}

export interface ChangePasswordValues {
  email: string;
  newPassword: string;
  ipAddress: string;
  location: string;
}

export class UserChangePassword {
  id?: string = undefined;
  currentPassword?: string = undefined;
  token?: string = undefined;
  newPassword: string = "";
  confirmPassword: string = "";
  isChangePassword: boolean = false;
  forcePasswordReset: boolean = false;
}

export interface UserForgotPassword {
  emailAddress?: string
}

export enum AccessLevel {
  None = 0,
  Inactive = 1,
  Banned = 2,
  ActiveContributor = 3
}


export enum ClientStatus {
  Banned = -2,
  Declined = -1,
  Deactivated = 0,
  Suspended = 1,
  Active = 2,
}

export enum Country {
  Afghanistan = "Afghanistan",
  Albania = "Albania",
  Algeria = "Algeria",
  Andorra = "Andorra",
  Angola = "Angola",
  Argentina = "Argentina",
  Armenia = "Armenia",
  Australia = "Australia",
  Austria = "Austria",
  Azerbaijan = "Azerbaijan",
  Bahamas = "Bahamas",
  Bahrain = "Bahrain",
  Bangladesh = "Bangladesh",
  Barbados = "Barbados",
  Belarus = "Belarus",
  Belgium = "Belgium",
  Belize = "Belize",
  Benin = "Benin",
  Bhutan = "Bhutan",
  Bolivia = "Bolivia",
  BosniaAndHerzegovina = "Bosnia and Herzegovina",
  Botswana = "Botswana",
  Brazil = "Brazil",
  Brunei = "Brunei",
  Bulgaria = "Bulgaria",
  BurkinaFaso = "Burkina Faso",
  Burundi = "Burundi",
  Cambodia = "Cambodia",
  Cameroon = "Cameroon",
  Canada = "Canada",
  CapeVerde = "Cape Verde",
  CentralAfricanRepublic = "Central African Republic",
  Chad = "Chad",
  Chile = "Chile",
  China = "China",
  Colombia = "Colombia",
  Comoros = "Comoros",
  Congo = "Congo",
  CostaRica = "Costa Rica",
  Croatia = "Croatia",
  Cuba = "Cuba",
  Cyprus = "Cyprus",
  CzechRepublic = "Czech Republic",
  Denmark = "Denmark",
  Djibouti = "Djibouti",
  Dominica = "Dominica",
  DominicanRepublic = "Dominican Republic",
  Ecuador = "Ecuador",
  Egypt = "Egypt",
  ElSalvador = "El Salvador",
  EquatorialGuinea = "Equatorial Guinea",
  Eritrea = "Eritrea",
  Estonia = "Estonia",
  Eswatini = "Eswatini",
  Ethiopia = "Ethiopia",
  Fiji = "Fiji",
  Finland = "Finland",
  France = "France",
  Gabon = "Gabon",
  Gambia = "Gambia",
  Georgia = "Georgia",
  Germany = "Germany",
  Ghana = "Ghana",
  Greece = "Greece",
  Grenada = "Grenada",
  Guatemala = "Guatemala",
  Guinea = "Guinea",
  GuineaBissau = "Guinea-Bissau",
  Guyana = "Guyana",
  Haiti = "Haiti",
  Honduras = "Honduras",
  Hungary = "Hungary",
  Iceland = "Iceland",
  India = "India",
  Indonesia = "Indonesia",
  Iran = "Iran",
  Iraq = "Iraq",
  Ireland = "Ireland",
  Israel = "Israel",
  Italy = "Italy",
  IvoryCoast = "Ivory Coast",
  Jamaica = "Jamaica",
  Japan = "Japan",
  Jordan = "Jordan",
  Kazakhstan = "Kazakhstan",
  Kenya = "Kenya",
  Kiribati = "Kiribati",
  KoreaNorth = "North Korea",
  KoreaSouth = "South Korea",
  Kuwait = "Kuwait",
  Kyrgyzstan = "Kyrgyzstan",
  Laos = "Laos",
  Latvia = "Latvia",
  Lebanon = "Lebanon",
  Lesotho = "Lesotho",
  Liberia = "Liberia",
  Libya = "Libya",
  Liechtenstein = "Liechtenstein",
  Lithuania = "Lithuania",
  Luxembourg = "Luxembourg",
  Madagascar = "Madagascar",
  Malawi = "Malawi",
  Malaysia = "Malaysia",
  Maldives = "Maldives",
  Mali = "Mali",
  Malta = "Malta",
  MarshallIslands = "Marshall Islands",
  Mauritania = "Mauritania",
  Mauritius = "Mauritius",
  Mexico = "Mexico",
  Micronesia = "Micronesia",
  Moldova = "Moldova",
  Monaco = "Monaco",
  Mongolia = "Mongolia",
  Montenegro = "Montenegro",
  Morocco = "Morocco",
  Mozambique = "Mozambique",
  Myanmar = "Myanmar",
  Namibia = "Namibia",
  Nauru = "Nauru",
  Nepal = "Nepal",
  Netherlands = "Netherlands",
  NewZealand = "New Zealand",
  Nicaragua = "Nicaragua",
  Niger = "Niger",
  Nigeria = "Nigeria",
  NorthMacedonia = "North Macedonia",
  Norway = "Norway",
  Oman = "Oman",
  Pakistan = "Pakistan",
  Palau = "Palau",
  Panama = "Panama",
  PapuaNewGuinea = "Papua New Guinea",
  Paraguay = "Paraguay",
  Peru = "Peru",
  Philippines = "Philippines",
  Poland = "Poland",
  Portugal = "Portugal",
  Qatar = "Qatar",
  Romania = "Romania",
  Russia = "Russia",
  Rwanda = "Rwanda",
  SaintKittsAndNevis = "Saint Kitts and Nevis",
  SaintLucia = "Saint Lucia",
  SaintVincentAndTheGrenadines = "Saint Vincent and the Grenadines",
  Samoa = "Samoa",
  SanMarino = "San Marino",
  SaoTomeAndPrincipe = "Sao Tome and Principe",
  SaudiArabia = "Saudi Arabia",
  Senegal = "Senegal",
  Serbia = "Serbia",
  Seychelles = "Seychelles",
  SierraLeone = "Sierra Leone",
  Singapore = "Singapore",
  Slovakia = "Slovakia",
  Slovenia = "Slovenia",
  SolomonIslands = "Solomon Islands",
  Somalia = "Somalia",
  SouthAfrica = "South Africa",
  SouthSudan = "South Sudan",
  Spain = "Spain",
  SriLanka = "Sri Lanka",
  Sudan = "Sudan",
  Suriname = "Suriname",
  Sweden = "Sweden",
  Switzerland = "Switzerland",
  Syria = "Syria",
  Taiwan = "Taiwan",
  Tajikistan = "Tajikistan",
  Tanzania = "Tanzania",
  Thailand = "Thailand",
  TimorLeste = "Timor-Leste",
  Togo = "Togo",
  Tonga = "Tonga",
  TrinidadAndTobago = "Trinidad and Tobago",
  Tunisia = "Tunisia",
  Turkey = "Turkey",
  Turkmenistan = "Turkmenistan",
  Tuvalu = "Tuvalu",
  Uganda = "Uganda",
  Ukraine = "Ukraine",
  UnitedArabEmirates = "United Arab Emirates",
  UnitedKingdom = "United Kingdom",
  UnitedStates = "United States",
  Uruguay = "Uruguay",
  Uzbekistan = "Uzbekistan",
  Vanuatu = "Vanuatu",
  VaticanCity = "Vatican City",
  Venezuela = "Venezuela",
  Vietnam = "Vietnam",
  Yemen = "Yemen",
  Zambia = "Zambia",
  Zimbabwe = "Zimbabwe",
  PreferNotToDisclose = "Prefer Not To Disclose",
}
