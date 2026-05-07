'use client';

import React, { useState, useEffect, useMemo } from 'react';
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
import styles from './Calculator.module.css';
import { CALCULATOR_CONFIG, nationalities } from '../../lib/calculator-config';
import { outfit, rethinkSans } from '../../app/fonts';

const iconMap: Record<string, React.ReactNode> = {
  trading: <Briefcase size={24} />,
  professional: <Landmark size={24} />,
  industrial: <Building2 size={24} />,
  ecommerce: <Globe2 size={24} />,
  new_business: <CheckCircle2 size={24} />,
  expansion: <ChevronRight size={24} />,
  freelance: <Users size={24} />,
  investment: <CreditCard size={24} />,
  virtual: <Globe2 size={24} />,
  physical: <Building2 size={24} />,
  shop: <Home size={24} />,
  business_center: <Briefcase size={24} />,
  warehouse: <Landmark size={24} />,
  this_month: <Clock size={24} />,
  next_month: <Clock size={24} />,
  '3_months': <Clock size={24} />,
  '6_months': <Clock size={24} />,
  freezone: <ShieldCheck size={24} />,
  mainland: <Landmark size={24} />,
  resident: <CheckCircle2 size={24} />,
  non_resident: <Globe2 size={24} />,
  yes: <Users size={24} />,
  no: <CheckCircle2 size={24} />,
};

export const CostCalculator = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, any>>({
    activity: 'trading',
    reason: 'new_business',
    shareholders: 1,
    visas: 1,
    office: 'virtual',
    timeline: 'this_month',
    jurisdiction: 'freezone',
    residency: 'resident',
    dependants: 'no',
    nationality: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  });

  const [totalPrice, setTotalPrice] = useState(CALCULATOR_CONFIG.basePrice);
  const [isFinalizing, setIsFinalizing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const categories = CALCULATOR_CONFIG.categories;
  const currentCategory = categories[activeStep];

  const handleOptionChange = (category: string, optionId: string) => {
    setSelectedOptions((prev) => ({ ...prev, [category]: optionId }));
    if (activeStep < categories.length - 1) {
      setTimeout(() => setActiveStep(prev => prev + 1), 300);
    }
  };

  const handleNumberChange = (category: string, value: number) => {
    setSelectedOptions((prev) => ({ ...prev, [category]: value }));
  };

  const handleNext = () => {
    if (activeStep < categories.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      // Last step: move to contact info
      setActiveStep(categories.length);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const calculatedTotal = useMemo(() => {
    let total = CALCULATOR_CONFIG.basePrice;

    // Fixed price options
    CALCULATOR_CONFIG.categories.forEach(cat => {
      if (cat.type === 'select-card') {
        const option = CALCULATOR_CONFIG.options.find(o => o.id === selectedOptions[cat.id]);
        if (option) total += option.price;
      }
    });

    // Slider based prices
    total += (selectedOptions.shareholders - 1) * 500;
    total += (selectedOptions.visas - 1) * 2500;

    return total;
  }, [selectedOptions]);

  useEffect(() => {
    setTotalPrice(calculatedTotal);
  }, [calculatedTotal]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsFinalizing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsFinalizing(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={styles.successWrapper}
      >
        <div className={styles.successIcon}>
          <Send size={48} />
        </div>
        <h2 className={styles.successTitle}>Proposal Initiated</h2>
        <p className={styles.successText}>
          Thank you, <span className={styles.highlight}>{selectedOptions.firstname}</span>. 
          Your personalized UAE setup cost analysis is being compiled by our senior consultants.
        </p>
        <div className={styles.successNote}>
          "Our senior strategist will reach out to your provided number within 24 hours to discuss the specific structural nuances of your proposal."
        </div>
        <button 
          onClick={() => window.location.href = '/'}
          className={styles.returnBtn}
        >
          Return to Home
        </button>
      </motion.div>
    );
  }

  return (
    <div className={`${styles.calculatorContainer} ${outfit.className}`}>
      <div className={styles.mainContent}>
        {/* Stepper Progress */}
        <div className={styles.stepperWrapper}>
          <div className={styles.stepperLine}>
            <motion.div 
              className={styles.stepperLineActive}
              initial={{ width: 0 }}
              animate={{ width: `${(activeStep / categories.length) * 100}%` }}
            />
          </div>
          {categories.map((cat, idx) => (
            <div 
              key={cat.id} 
              className={`${styles.stepNode} ${idx <= activeStep ? styles.stepNodeActive : ''} ${idx < activeStep ? styles.stepNodeCompleted : ''}`}
            >
              {idx < activeStep ? <CheckCircle2 size={16} /> : idx + 1}
              <span className={styles.stepLabel}>{cat.title}</span>
            </div>
          ))}
          <div className={`${styles.stepNode} ${activeStep === categories.length ? styles.stepNodeActive : ''}`}>
            <Users size={16} />
            <span className={styles.stepLabel}>Finalize</span>
          </div>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          {activeStep < categories.length ? (
            <motion.div
              key={currentCategory.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={styles.stepContent}
            >
              <div className={styles.stepHeader}>
                <h2 className={`${styles.categoryTitle} ${rethinkSans.className}`}>{currentCategory.question}</h2>
                <p className={styles.categoryDesc}>{currentCategory.description}</p>
              </div>

              {currentCategory.type === 'select-card' && (
                <div className={styles.optionsGrid}>
                  {CALCULATOR_CONFIG.options
                    .filter(o => o.category === currentCategory.id)
                    .map(option => (
                      <button
                        key={option.id}
                        className={`${styles.optionCard} ${selectedOptions[currentCategory.id] === option.id ? styles.optionCardSelected : ''}`}
                        onClick={() => handleOptionChange(currentCategory.id, option.id)}
                      >
                        <div className={styles.optionIcon}>
                          {iconMap[option.id]}
                        </div>
                        <div className={styles.optionInfo}>
                          <span className={styles.optionLabel}>{option.label}</span>
                          {option.price > 0 && (
                            <span className={styles.optionPrice}>+{option.price.toLocaleString()} {CALCULATOR_CONFIG.currency}</span>
                          )}
                        </div>
                      </button>
                    ))}
                </div>
              )}

              {currentCategory.type === 'number' && (
                <div className={styles.sliderWrapper}>
                  <div className={styles.sliderHeader}>
                    <span className={styles.sliderValue}>{selectedOptions[currentCategory.field!]}</span>
                    <span className={styles.sliderUnit}>{currentCategory.unit}</span>
                  </div>
                  <input 
                    type="range"
                    min={currentCategory.min}
                    max={currentCategory.max}
                    value={selectedOptions[currentCategory.field!]}
                    onChange={(e) => handleNumberChange(currentCategory.field!, parseInt(e.target.value))}
                    className={styles.sliderInput}
                  />
                  <div className={styles.sliderLabels}>
                    <span>{currentCategory.min}</span>
                    <span>{currentCategory.max}</span>
                  </div>
                </div>
              )}

              {currentCategory.type === 'select-field' && (
                <div className={styles.selectWrapper}>
                  <select 
                    value={selectedOptions.nationality}
                    onChange={(e) => handleOptionChange('nationality', e.target.value)}
                    className={styles.selectInput}
                  >
                    <option value="">Choose Nationality...</option>
                    {nationalities.map(n => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
              )}

              <div className={styles.navigation}>
                <button 
                  onClick={handleBack}
                  className={styles.backBtn}
                  style={{ visibility: activeStep === 0 ? 'hidden' : 'visible' }}
                >
                  <ChevronLeft size={20} /> Back
                </button>
                <button 
                  onClick={handleNext}
                  className={styles.nextBtn}
                  disabled={currentCategory.type === 'select-field' && !selectedOptions.nationality}
                >
                  {activeStep === categories.length - 1 ? 'Last Step' : 'Next Step'} <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="final-step"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={styles.finalStep}
            >
              <div className={styles.stepHeader}>
                <h2 className={`${styles.categoryTitle} ${rethinkSans.className}`}>Request Your Detailed Quote</h2>
                <p className={styles.categoryDesc}>Please provide your contact details to receive the full breakdown.</p>
              </div>

              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>First Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. John"
                      value={selectedOptions.firstname}
                      onChange={(e) => setSelectedOptions(prev => ({ ...prev, firstname: e.target.value }))}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Last Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. Doe"
                      value={selectedOptions.lastname}
                      onChange={(e) => setSelectedOptions(prev => ({ ...prev, lastname: e.target.value }))}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email Address</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="e.g. john@example.com"
                      value={selectedOptions.email}
                      onChange={(e) => setSelectedOptions(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Phone Number</label>
                    <input 
                      required 
                      type="tel" 
                      placeholder="e.g. +971"
                      value={selectedOptions.phone}
                      onChange={(e) => setSelectedOptions(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>
                <button 
                  type="submit" 
                  className={styles.submitBtn}
                  disabled={isFinalizing}
                >
                  {isFinalizing ? (
                    <><Loader2 className="animate-spin" size={20} /> Generating Estimate...</>
                  ) : (
                    <><Send size={20} /> Get Final Estimate</>
                  )}
                </button>
              </form>
              <button onClick={handleBack} className={styles.backLink}>
                <ChevronLeft size={16} /> Review Selections
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sticky Summary Side Panel */}
      <div className={styles.sidePanel}>
        <div className={styles.summaryCard}>
          <h3 className={styles.summaryTitle}>Live Estimate</h3>
          <div className={styles.priceDisplay}>
            <span className={styles.currency}>{CALCULATOR_CONFIG.currency}</span>
            <span className={styles.amount}>{totalPrice.toLocaleString()}</span>
          </div>
          
          <div className={styles.breakdown}>
            <div className={styles.breakdownItem}>
              <span>Base Setup Fee</span>
              <span>{CALCULATOR_CONFIG.basePrice.toLocaleString()}</span>
            </div>
            {CALCULATOR_CONFIG.categories.slice(0, activeStep + 1).map(cat => {
              if (cat.type === 'select-card') {
                const opt = CALCULATOR_CONFIG.options.find(o => o.id === selectedOptions[cat.id]);
                if (opt && opt.price > 0) {
                  return (
                    <div key={cat.id} className={styles.breakdownItem}>
                      <span>{opt.label}</span>
                      <span>+{opt.price.toLocaleString()}</span>
                    </div>
                  );
                }
              }
              return null;
            })}
            {selectedOptions.shareholders > 1 && (
              <div className={styles.breakdownItem}>
                <span>{selectedOptions.shareholders} Shareholders</span>
                <span>+{((selectedOptions.shareholders - 1) * 500).toLocaleString()}</span>
              </div>
            )}
            {selectedOptions.visas > 1 && (
              <div className={styles.breakdownItem}>
                <span>{selectedOptions.visas} Visas</span>
                <span>+{((selectedOptions.visas - 1) * 2500).toLocaleString()}</span>
              </div>
            )}
          </div>

          <div className={styles.guarantee}>
            <ShieldCheck size={16} />
            <span>Official DED compliant pricing</span>
          </div>
        </div>
      </div>
    </div>
  );
};
