export interface CalculatorOption {
  id: string;
  label: string;
  price: number;
  category: string;
  type: 'radio' | 'checkbox' | 'number' | 'select';
  description?: string;
  icon?: string; // We'll map these to Lucide icons in the component
}

export interface CalculatorCategory {
  id: string;
  title: string;
  subtitle: string;
  question: string;
  description: string;
  type: 'select-card' | 'number' | 'select-field';
  field?: string;
  min?: number;
  max?: number;
  unit?: string;
}

export const CALCULATOR_CONFIG = {
  currency: 'AED',
  basePrice: 5000, // Initial base fee for professional consultation & setup
  categories: [
    {
      id: 'activity',
      title: 'Business Activity',
      subtitle: 'Nature of Operations',
      question: 'Choose your business activity',
      description: 'This helps identify the location and license that best suits your company.',
      type: 'select-card',
    },
    {
      id: 'reason',
      title: 'Setup Reason',
      subtitle: 'Strategy',
      question: 'Main reason for setting up?',
      description: 'Determines the potential company structure needed.',
      type: 'select-card',
    },
    {
      id: 'shareholders',
      title: 'Shareholders',
      subtitle: 'Corporate Structure',
      question: 'Number of shareholders?',
      description: 'Identifying the legal structure and visa requirements.',
      type: 'number',
      field: 'shareholders',
      min: 1,
      max: 50,
      unit: 'Shareholders',
    },
    {
      id: 'visas',
      title: 'Visas',
      subtitle: 'Residency',
      question: 'Number of residency visas?',
      description: 'Include shareholders, employees, and family members.',
      type: 'number',
      field: 'visas',
      min: 0,
      max: 100,
      unit: 'Residency Visas',
    },
    {
      id: 'office',
      title: 'Office Space',
      subtitle: 'Physical Presence',
      question: 'Type of office space?',
      description: 'Scale of your physical operations in the Emirates.',
      type: 'select-card',
    },
    {
      id: 'timeline',
      title: 'Timeline',
      subtitle: 'Launch Strategy',
      question: 'When do you plan to start?',
      description: 'Important factor for calculating availability.',
      type: 'select-card',
    },
    {
      id: 'jurisdiction',
      title: 'Jurisdiction',
      subtitle: 'Location Strategy',
      question: 'Preferred jurisdiction?',
      description: 'Impacts ownership and market access.',
      type: 'select-card',
    },
    {
      id: 'residency',
      title: 'Residency',
      subtitle: 'Current Status',
      question: 'Currently living in the UAE?',
      description: 'Helps determine the visa processing path.',
      type: 'select-card',
    },
    {
      id: 'dependants',
      title: 'Dependants',
      subtitle: 'Family Requirements',
      question: 'Visas for dependants?',
      description: 'Family residency sponsorship requirements.',
      type: 'select-card',
    },
    {
      id: 'nationality',
      title: 'Nationality',
      subtitle: 'Global Hub',
      question: 'What is your nationality?',
      description: 'Required for jurisdictional compliance checks.',
      type: 'select-field',
      field: 'nationality',
    },
  ] as CalculatorCategory[],
  options: [
    // Activity Options
    { id: 'trading', label: 'Commercial / Trading', price: 2500, category: 'activity', type: 'radio' },
    { id: 'professional', label: 'Professional / Services', price: 1500, category: 'activity', type: 'radio' },
    { id: 'industrial', label: 'Industrial', price: 5000, category: 'activity', type: 'radio' },
    { id: 'ecommerce', label: 'E-Commerce', price: 2000, category: 'activity', type: 'radio' },
    
    // Setup Reason Options
    { id: 'new_business', label: 'New Business Launch', price: 0, category: 'reason', type: 'radio' },
    { id: 'expansion', label: 'Expansion of Existing', price: 1000, category: 'reason', type: 'radio' },
    { id: 'freelance', label: 'Freelance Services', price: 500, category: 'reason', type: 'radio' },
    { id: 'investment', label: 'Investment/Holdings', price: 3000, category: 'reason', type: 'radio' },
    
    // Office Options
    { id: 'virtual', label: 'Virtual Office', price: 1500, category: 'office', type: 'radio' },
    { id: 'physical', label: 'Physical Office', price: 8000, category: 'office', type: 'radio' },
    { id: 'shop', label: 'Shop Front', price: 12000, category: 'office', type: 'radio' },
    { id: 'business_center', label: 'Business Center', price: 4000, category: 'office', type: 'radio' },
    { id: 'warehouse', label: 'Warehouse', price: 15000, category: 'office', type: 'radio' },
    
    // Timeline Options
    { id: 'this_month', label: 'This Month', price: 1000, category: 'timeline', type: 'radio' },
    { id: 'next_month', label: 'Next Month', price: 500, category: 'timeline', type: 'radio' },
    { id: '3_months', label: '3 Months', price: 0, category: 'timeline', type: 'radio' },
    { id: '6_months', label: '6 Months+', price: 0, category: 'timeline', type: 'radio' },
    
    // Jurisdiction Options
    { id: 'freezone', label: 'Free Zone', price: 2000, category: 'jurisdiction', type: 'radio' },
    { id: 'mainland', label: 'Mainland', price: 3500, category: 'jurisdiction', type: 'radio' },
    
    // Residency Options
    { id: 'resident', label: 'Yes', price: 0, category: 'residency', type: 'radio' },
    { id: 'non_resident', label: 'No', price: 500, category: 'residency', type: 'radio' },
    
    // Dependants Options
    { id: 'yes', label: 'Yes', price: 1500, category: 'dependants', type: 'radio' },
    { id: 'no', label: 'No', price: 0, category: 'dependants', type: 'radio' },

    // Fixed unit prices for sliders
    { id: 'shareholder-unit', label: 'Per Shareholder', price: 500, category: 'shareholders', type: 'number' },
    { id: 'visa-unit', label: 'Per Visa', price: 2500, category: 'visas', type: 'number' },
  ] as CalculatorOption[]
};

export const nationalities = [
  "Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", "Antiguans", "Argentinean", "Armenian", "Australian", "Austrian", "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi", "Barbadian", "Belarusian", "Belgian", "Belizean", "Beninese", "Bhutanese", "Bolivian", "Bosnian", "Brazilian", "British", "Bruneian", "Bulgarian", "Burkinese", "Burundian", "Cambodian", "Cameroonian", "Canadian", "Cape Verdean", "Central African", "Chadian", "Chilean", "Chinese", "Colombian", "Comoran", "Congolese", "Costa Rican", "Croatian", "Cuban", "Cypriot", "Czech", "Danish", "Djibouti", "Dominican", "Dutch", "East Timorese", "Ecuadorean", "Egyptian", "Emirati", "Equatorial Guinean", "Eritrean", "Estonian", "Ethiopian", "Fijian", "Filipino", "Finnish", "French", "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", "Greek", "Grenadian", "Guatemalan", "Guinean", "Guyanese", "Haitian", "Honduran", "Hungarian", "Icelander", "Indian", "Indonesian", "Iranian", "Iraqi", "Irish", "Israeli", "Italian", "Ivorian", "Jamaican", "Japanese", "Jordanian", "Kazakhstani", "Kenyan", "Kittian and Nevisian", "Kuwaiti", "Kyrgyz", "Laotian", "Latvian", "Lebanese", "Liberian", "Libyan", "Liechtensteiner", "Lithuanian", "Luxembourger", "Macedonian", "Malagasy", "Malawian", "Malaysian", "Maldivan", "Malian", "Maltese", "Marshallese", "Mauritanian", "Mauritian", "Mexican", "Micronesian", "Moldovan", "Monacan", "Mongolian", "Moroccan", "Mosotho", "Motswana", "Mozambican", "Namibian", "Nauruan", "Nepalese", "New Zealander", "Ni-Vanuatu", "Nicaraguan", "Nigerian", "North Korean", "Norwegian", "Omani", "Pakistani", "Palauan", "Panamanian", "Papua New Guinean", "Paraguayan", "Peruvian", "Polish", "Portuguese", "Qatari", "Romanian", "Russian", "Rwandan", "Saint Lucian", "Salvadoran", "Samoan", "San Marinese", "Sao Tomean", "Saudi", "Senegalese", "Serbian", "Seychellois", "Sierra Leonean", "Singaporean", "Slovakian", "Slovenian", "Solomon Islander", "Somali", "South African", "South Korean", "Spanish", "Sri Lankan", "Sudanese", "Surinamer", "Swazi", "Swedish", "Swiss", "Syrian", "Taiwanese", "Tajik", "Tanzanian", "Thai", "Togolese", "Tongan", "Trinidadian and Tobagonian", "Tunisian", "Turkish", "Turkmen", "Tuvaluan", "Ugandan", "Ukrainian", "Uruguayan", "Uzbekistani", "Venezuelan", "Vietnamese", "Western Samoan", "Yemeni", "Yugoslav", "Zambian", "Zimbabwean"
];
