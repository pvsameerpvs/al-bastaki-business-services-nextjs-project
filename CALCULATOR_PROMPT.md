# Al Bastaki Service Cost Calculator - Master Prompt

To replicate this exact calculator (Stepper UI, Logic, and Content) in another project, use the prompt below.

---

## The AI Prompt

"Build a high-end, **Multi-Step Service Cost Calculator** (Stepper UI) for a business setup consultancy. The design must match the **Al Bastaki** brand identity.

### 1. Design & UI Specifications
- **Colors**: Use `#0066A6` (Primary Blue) and `#00223E` (Navy). Background: White (`#FFFFFF`).
- **Layout**: 
    - **Stepper UI**: Progress bar (Steps 1-4) at the top.
    - **Main Area**: Display one category at a time (Jurisdiction -> License -> Visas -> Services).
    - **Sticky Summary**: Persistent panel on the right with live price breakdown and total.
- **Interactivity**: Selected items highlighted with blue borders and checkmarks. Smooth 'Next' and 'Back' transitions.

### 2. Exact Business Content
- **Base Fee**: 5,000 AED
- **Steps**:
    1. **Jurisdiction** (Radio): Mainland (DED) [+0], Free Zone [-1,500]
    2. **License Type** (Radio): Professional [+0], Commercial [+2,500]
    3. **Residency Visas** (Number): 3,500 AED per visa.
    4. **Corporate Services** (Checkbox): Full PRO Support [+1,500], Bank Account [+2,000], Tax Reg [+1,000]

### 3. Implementation Details
- **Stack**: Next.js, React, CSS Modules.
- **Calculations**: Live total using `useMemo`. Formatting with `toLocaleString()`.
- **Navigation**: State-driven `activeStep` logic with validation."
