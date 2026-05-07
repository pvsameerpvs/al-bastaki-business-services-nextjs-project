"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Landmark, 
  Building2, 
  Users, 
  CreditCard, 
  Briefcase, 
  Clock, 
  Globe2, 
  Home,
  ShieldCheck,
  Send,
  Loader2
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { outfit, rethinkSans } from '../fonts';

const nationalities = [
  "Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", "Antiguans", "Argentinean", "Armenian", "Australian", "Austrian", "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi", "Barbadian", "Belarusian", "Belgian", "Belizean", "Beninese", "Bhutanese", "Bolivian", "Bosnian", "Brazilian", "British", "Bruneian", "Bulgarian", "Burkinese", "Burundian", "Cambodian", "Cameroonian", "Canadian", "Cape Verdean", "Central African", "Chadian", "Chilean", "Chinese", "Colombian", "Comoran", "Congolese", "Costa Rican", "Croatian", "Cuban", "Cypriot", "Czech", "Danish", "Djibouti", "Dominican", "Dutch", "East Timorese", "Ecuadorean", "Egyptian", "Emirati", "Equatorial Guinean", "Eritrean", "Estonian", "Ethiopian", "Fijian", "Filipino", "Finnish", "French", "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", "Greek", "Grenadian", "Guatemalan", "Guinean", "Guyanese", "Haitian", "Honduran", "Hungarian", "Icelander", "Indian", "Indonesian", "Iranian", "Iraqi", "Irish", "Israeli", "Italian", "Ivorian", "Jamaican", "Japanese", "Jordanian", "Kazakhstani", "Kenyan", "Kittian and Nevisian", "Kuwaiti", "Kyrgyz", "Laotian", "Latvian", "Lebanese", "Liberian", "Libyan", "Liechtensteiner", "Lithuanian", "Luxembourger", "Macedonian", "Malagasy", "Malawian", "Malaysian", "Maldivan", "Malian", "Maltese", "Marshallese", "Mauritanian", "Mauritian", "Mexican", "Micronesian", "Moldovan", "Monacan", "Mongolian", "Moroccan", "Mosotho", "Motswana", "Mozambican", "Namibian", "Nauruan", "Nepalese", "New Zealander", "Ni-Vanuatu", "Nicaraguan", "Nigerian", "North Korean", "Norwegian", "Omani", "Pakistani", "Palauan", "Panamanian", "Papua New Guinean", "Paraguayan", "Peruvian", "Polish", "Portuguese", "Qatari", "Romanian", "Russian", "Rwandan", "Saint Lucian", "Salvadoran", "Samoan", "San Marinese", "Sao Tomean", "Saudi", "Senegalese", "Serbian", "Seychellois", "Sierra Leonean", "Singaporean", "Slovakian", "Slovenian", "Solomon Islander", "Somali", "South African", "South Korean", "Spanish", "Sri Lankan", "Sudanese", "Surinamer", "Swazi", "Swedish", "Swiss", "Syrian", "Taiwanese", "Tajik", "Tanzanian", "Thai", "Togolese", "Tongan", "Trinidadian and Tobagonian", "Tunisian", "Turkish", "Turkmen", "Tuvaluan", "Ugandan", "Ukrainian", "Uruguayan", "Uzbekistani", "Venezuelan", "Vietnamese", "Western Samoan", "Yemeni", "Yugoslav", "Zambian", "Zimbabwean"
];

const steps = [
  {
    id: 1,
    title: "Business Activity",
    subtitle: "Identify the nature of your operations",
    question: "Choose your business activity to start your business setup cost estimate",
    description: "This helps identify the location and license that best suits your company.",
    type: "select-card",
    options: [
      { label: "Commercial / Trading", value: "trading", icon: <Briefcase /> },
      { label: "Professional / Services", value: "professional", icon: <Landmark /> },
      { label: "Industrial", value: "industrial", icon: <Building2 /> },
      { label: "E-Commerce", value: "ecommerce", icon: <Globe2 /> }
    ]
  },
  {
    id: 2,
    title: "Setup Reason",
    subtitle: "Understanding your strategy",
    question: "What is your main reason for setting up a company in the UAE?",
    description: "This will help us determine the potential type of company structure you will need.",
    type: "select-card",
    options: [
      { label: "New Business Launch", value: "new_business", icon: <CheckCircle2 /> },
      { label: "Expansion of Existing", value: "expansion", icon: <ChevronRight /> },
      { label: "Freelance Services", value: "freelance", icon: <Users /> },
      { label: "Investment/Holdings", value: "investment", icon: <CreditCard /> }
    ]
  },
  {
    id: 3,
    title: "Shareholders",
    subtitle: "Corporate Structure",
    question: "How many owners/shareholders will your company have?",
    description: "Identifying the legal structure and visa requirements.",
    type: "number",
    min: 1,
    max: 50,
    unit: "Shareholders",
    field: "shareholders"
  },
  {
    id: 4,
    title: "Visas",
    subtitle: "Residency Requirements",
    question: "How many residence visas will you need?",
    description: "Include visas for shareholders, employees, and potentially family members.",
    type: "number",
    min: 0,
    max: 100,
    unit: "Residency Visas",
    field: "visas"
  },
  {
    id: 5,
    title: "Office Space",
    subtitle: "Physical Presence",
    question: "What type of office space do you need?",
    description: "Choose the scale of your physical operations in the Emirates.",
    type: "select-card",
    options: [
      { label: "Virtual Office", value: "virtual", icon: <Globe2 /> },
      { label: "Physical Office", value: "physical", icon: <Building2 /> },
      { label: "Shop Front", value: "shop", icon: <Home /> },
      { label: "Business Center", value: "business_center", icon: <Briefcase /> },
      { label: "Warehouse", value: "warehouse", icon: <Landmark /> }
    ]
  },
  {
    id: 6,
    title: "Timeline",
    subtitle: "Launch Strategy",
    question: "When do you plan to start your business?",
    description: "Important factor for calculating availability and total setup speed.",
    type: "select-card",
    options: [
      { label: "This Month", value: "this_month", icon: <Clock /> },
      { label: "Next Month", value: "next_month", icon: <Clock /> },
      { label: "3 Months", value: "3_months", icon: <Clock /> },
      { label: "6 Months+", value: "6_months", icon: <Clock /> }
    ]
  },
  {
    id: 7,
    title: "Jurisdiction",
    subtitle: "Location Strategy",
    question: "Choose your preferred jurisdiction",
    description: "This has a significant impact on ownership and market access.",
    type: "select-card",
    options: [
      { label: "Free Zone", value: "freezone", icon: <ShieldCheck /> },
      { label: "Mainland", value: "mainland", icon: <Landmark /> }
    ]
  },
  {
    id: 8,
    title: "Residency",
    subtitle: "Current Status",
    question: "Are you currently living in the UAE?",
    type: "select-card",
    options: [
      { label: "Yes", value: "resident", icon: <CheckCircle2 /> },
      { label: "No", value: "non_resident", icon: <Globe2 /> }
    ]
  },
  {
    id: 9,
    title: "Dependants",
    subtitle: "Family Requirements",
    question: "Will you also require visas for your dependants?",
    type: "select-card",
    options: [
      { label: "Yes", value: "yes", icon: <Users /> },
      { label: "No", value: "no", icon: <CheckCircle2 /> }
    ]
  },
  {
    id: 10,
    title: "Nationality",
    subtitle: "Global Hub",
    question: "What's your nationality?",
    type: "select-field",
    field: "nationality",
    options: nationalities.map(n => ({ label: n, value: n }))
  }
];

const CostCalculatorPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<any>({
    activity: '',
    reason: '',
    shareholders: 1,
    visas: 1,
    office: '',
    timeline: '',
    jurisdiction: '',
    isUAE: '',
    dependants: '',
    nationality: '',
    firstname: '',
    lastname: '',
    email: '',
    number: ''
  });
  const [isFinalizing, setIsFinalizing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const progress = ((currentStep + 1) / (steps.length + 1)) * 100;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSelect = (field: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
    handleNext();
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsFinalizing(true);
    // Simulate estimate generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsFinalizing(false);
    setShowModal(true);
  };

  return (
    <div className={`min-h-screen bg-[#F8FAFC] text-[#00223E] selection:bg-[#0066A6]/30 ${rethinkSans.className}`}>
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-[#0066A6] font-black tracking-[0.4em] uppercase text-xs ${rethinkSans.className}`}
            >
              Business Setup Estimator
            </motion.span>
            <h1 className={`text-4xl md:text-6xl font-black tracking-tighter uppercase text-[#00223E] ${outfit.className}`}>
              Cost <span className="text-[#0066A6]">Calculator</span>
            </h1>
          </div>

          {/* Progress Bar */}
          <div className="mb-12 space-y-4">
             <div className="flex justify-between items-end">
                <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest leading-none">Step {currentStep + 1} of {steps.length + 1}</span>
                <span className="text-[#0066A6] font-black text-sm">{Math.round(progress)}%</span>
             </div>
             <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-[#0066A6] shadow-[0_0_10px_rgba(0,102,166,0.2)]"
                />
             </div>
          </div>

          {/* Calculator Body */}
          <div className="bg-white min-h-[500px] rounded-[48px] border border-gray-100 p-8 md:p-16 relative overflow-hidden flex flex-col justify-center shadow-2xl shadow-[#0066A6]/5">
             <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066A6]/5 blur-[100px] rounded-full -mr-48 -mt-48"></div>
             
             <AnimatePresence mode="wait">
                {currentStep < steps.length ? (
                  <motion.div
                    key={steps[currentStep].id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-10 relative z-10"
                  >
                    <div className="space-y-2">
                       <h2 className={`text-2xl md:text-4xl font-black text-[#00223E] leading-tight uppercase ${outfit.className}`}>{steps[currentStep].question}</h2>
                       {steps[currentStep].description && (
                         <p className="text-gray-500 font-light leading-relaxed max-w-2xl">{steps[currentStep].description}</p>
                       )}
                    </div>

                    {steps[currentStep].type === "select-card" && (
                      <div className="grid md:grid-cols-2 gap-4">
                         {steps[currentStep].options?.map((opt: any, i: number) => (
                           <button
                             key={i}
                             onClick={() => handleSelect(steps[currentStep].id === 1 ? 'activity' : 
                                         steps[currentStep].id === 2 ? 'reason' :
                                         steps[currentStep].id === 5 ? 'office' :
                                         steps[currentStep].id === 6 ? 'timeline' :
                                         steps[currentStep].id === 7 ? 'jurisdiction' :
                                         steps[currentStep].id === 8 ? 'isUAE' : 'dependants', opt.value)}
                             className="flex items-center gap-6 p-6 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-[#0066A6] hover:text-white hover:border-[#0066A6] transition-all duration-300 group text-left shadow-sm"
                           >
                              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#0066A6] group-hover:bg-white/10 group-hover:text-white transition-colors shadow-sm">
                                 {opt.icon}
                              </div>
                              <span className="font-black uppercase tracking-tight text-lg">{opt.label}</span>
                           </button>
                         ))}
                      </div>
                    )}

                    {steps[currentStep].type === "number" && (
                      <div className="space-y-8">
                         <div className="flex items-center gap-8">
                            <input 
                              type="range" 
                              min={steps[currentStep].min} 
                              max={steps[currentStep].max}
                              value={formData[steps[currentStep].field as string]}
                              onChange={(e) => setFormData((prev: any) => ({ ...prev, [steps[currentStep].field as string]: parseInt(e.target.value) }))}
                              className="flex-1 accent-[#0066A6] h-1 bg-gray-100 rounded-full appearance-none cursor-pointer"
                            />
                            <div className="w-24 h-24 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center justify-center shadow-inner">
                               <span className="text-4xl font-black text-[#0066A6] leading-none">{formData[steps[currentStep].field as string]}</span>
                               <span className="text-[10px] font-bold text-gray-400 uppercase mt-1">Total</span>
                            </div>
                         </div>
                         <button onClick={handleNext} className="w-full bg-[#00223E] text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-[#003560] transition-all shadow-lg hover:shadow-[#00223E]/20">
                            Continue <ChevronRight className="inline ml-2" size={18} />
                         </button>
                      </div>
                    )}

                    {steps[currentStep].type === "select-field" && (
                      <div className="space-y-8">
                         <select 
                           value={formData.nationality}
                           onChange={(e) => handleSelect('nationality', e.target.value)}
                           className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-6 text-lg font-medium focus:border-[#0066A6]/50 outline-none appearance-none cursor-pointer text-[#00223E] shadow-sm"
                         >
                            <option value="">Select Nationality</option>
                            {steps[currentStep].options?.map((opt: any, i: number) => (
                              <option key={i} value={opt.value} className="bg-white text-[#00223E]">{opt.label}</option>
                            ))}
                         </select>
                         <button onClick={handleNext} className="w-full bg-[#00223E] text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-[#003560] transition-all shadow-lg hover:shadow-[#00223E]/20">
                            Continue <ChevronRight className="inline ml-2" size={18} />
                         </button>
                      </div>
                    )}

                    {currentStep > 0 && (
                      <button onClick={handleBack} className="flex items-center gap-2 text-gray-400 hover:text-[#0066A6] transition-colors text-xs font-black uppercase tracking-[0.2em]">
                        <ChevronLeft size={14} /> Previous Question
                      </button>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="final-step"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-12 relative z-10"
                  >
                    <div className="text-center space-y-4">
                       <div className="w-20 h-20 bg-[#0066A6] rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-xl shadow-[#0066A6]/30">
                          <CheckCircle2 size={40} />
                       </div>
                       <h2 className={`text-3xl md:text-5xl font-black text-[#00223E] leading-tight uppercase ${outfit.className}`}>Your Proposal is Ready!</h2>
                       <p className="text-gray-500 font-light max-w-lg mx-auto">To receive your detailed business setup estimate and jurisdictional analysis, please provide your coordinate details below.</p>
                    </div>

                    <form onSubmit={handleFinalSubmit} className="grid md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">First Name</label>
                          <input 
                            required
                            type="text" 
                            placeholder="John"
                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-[#0066A6]/50 transition-all text-[#00223E]"
                            onChange={(e) => setFormData((prev: any) => ({ ...prev, firstname: e.target.value }))}
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Last Name</label>
                          <input 
                            required
                            type="text" 
                            placeholder="Doe"
                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-[#0066A6]/50 transition-all text-[#00223E]"
                            onChange={(e) => setFormData((prev: any) => ({ ...prev, lastname: e.target.value }))}
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                          <input 
                            required
                            type="email" 
                            placeholder="john@example.com"
                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-[#0066A6]/50 transition-all font-medium text-[#00223E]"
                            onChange={(e) => setFormData((prev: any) => ({ ...prev, email: e.target.value }))}
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Phone Number</label>
                          <input 
                            required
                            type="tel" 
                            placeholder="+971"
                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-[#0066A6]/50 transition-all text-[#00223E]"
                            onChange={(e) => setFormData((prev: any) => ({ ...prev, number: e.target.value }))}
                          />
                       </div>
                       <div className="md:col-span-2 pt-6">
                          <button 
                            disabled={isFinalizing}
                            type="submit" 
                            className="w-full bg-[#0066A6] text-white py-6 rounded-2xl text-xl font-black uppercase tracking-widest shadow-xl shadow-[#0066A6]/20 hover:bg-[#00558b] transition-all disabled:bg-gray-300 disabled:shadow-none"
                          >
                            {isFinalizing ? (
                              <div className="flex items-center justify-center gap-3">
                                 <Loader2 className="animate-spin" /> ARCHITECTING PROPOSAL...
                              </div>
                            ) : (
                              <div className="flex items-center justify-center gap-4">
                                 GET ESTIMATE <Send size={24} />
                              </div>
                            )}
                          </button>
                       </div>
                    </form>
                  </motion.div>
                )}
             </AnimatePresence>
          </div>

          {/* Value Props Info */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
             {[
               { t: "Expert Analysis", d: "Results based on current 2024 DED & Free Zone regulations.", icon: <ShieldCheck className="text-[#0066A6]" /> },
               { t: "Banking Ready", d: "Every estimate includes essential corporate banking support.", icon: <Landmark className="text-[#0066A6]" /> },
               { t: "Confidential", d: "Your data is encrypted and handled by senior consultants.", icon: <ShieldCheck className="text-[#0066A6]" /> }
             ].map((p, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                   <div className="mt-1">{p.icon}</div>
                   <div>
                      <h4 className={`text-[#00223E] font-black uppercase text-xs tracking-widest mb-2 ${rethinkSans.className}`}>{p.t}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed font-medium">{p.d}</p>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </main>

      {/* Success Modal */}
      <AnimatePresence>
         {showModal && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-[200] flex items-center justify-center p-4"
           >
              <div className="absolute inset-0 bg-navy/60 backdrop-blur-md" />
              <motion.div 
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-white border border-gray-100 p-12 rounded-[56px] max-w-2xl w-full text-center space-y-10 relative z-10 shadow-2xl"
              >
                 <div className="w-32 h-32 bg-[#0066A6] shadow-xl shadow-[#0066A6]/30 rounded-full flex items-center justify-center mx-auto scale-110">
                    <Send className="text-white ml-2" size={56} />
                 </div>
                 <div className="space-y-4">
                    <h3 className={`text-4xl md:text-5xl font-black text-[#00223E] tracking-tighter uppercase ${outfit.className}`}>Proposal Initiated</h3>
                    <p className="text-xl text-gray-500 font-light leading-relaxed">
                      Thank you, <span className="text-[#00223E] font-medium">{formData.firstname}</span>. Your personalized UAE setup cost analysis is being compiled by our head of consultancy.
                    </p>
                 </div>
                 <div className="bg-[#0066A6]/5 p-6 rounded-3xl border border-[#0066A6]/10">
                    <p className="text-[#0066A6] font-black uppercase text-sm tracking-widest leading-relaxed">
                       "Our senior strategist will reach out to your provided number within the next 24 hours to discuss the specific structural nuances of your proposal."
                    </p>
                 </div>
                 <button 
                   onClick={() => window.location.href = '/'}
                   className="text-gray-400 hover:text-[#00223E] font-black uppercase tracking-[0.4em] text-xs transition-colors"
                 >
                    Close & Return to Home
                 </button>
              </motion.div>
           </motion.div>
         )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default CostCalculatorPage;
