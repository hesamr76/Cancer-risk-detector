// This is just an example,
// so you can safely delete all default props below

export default {
  title: "Breast cancer risk assessment",
  patientEligibility: "Patient Eligibility",
  demographics: "Demographics",
  familyHistory: "Family History",

  questions: {
    1: "Does the woman have a medical history of any breast cancer or of ductal carcinoma in situ (DCIS) or lobular carcinoma in situ (LCIS) or has she received previous radiation therapy to the chest for treatment of Hodgkin lymphoma?",
    2: "Does the woman have a mutation in either the BRCA1 or BRCA2 gene, or a diagnosis of a genetic syndrome that may be associated with elevated risk of breast cancer?",
    3: "What is the patient’s age?",
    4: "What is the patient’s race/ethnicity?",
    5: "What is the sub race/ethnicity or place of birth?",
    6: "Has the patient ever had a breast biopsy with a benign (not cancer) diagnosis?",
    7: "How many breast biopsies with a benign diagnosis has the patient had?",
    8: "Has the patient ever had a breast biopsy with atypical hyperplasia?",
    9: "What was the woman’s age at the time of her first menstrual period?",
    10: "What was the woman’s age when she gave birth to her first child?",
    11: "How many of the woman’s first-degree relatives (mother, sisters, daughters) have had breast cancer?"
  },

  continue: "Continue",
  back: "Back",
  calculateRisk: "Calculate Risk",
  select: "Select",

  selectRace: "Select race",
  races: [
    "White",
    "African American",
    "Hispana/Latina",
    "Asian American",
    "American Indian or Alaskan Native"
  ],

  yes: "Yes",
  no: "No",
  unknown: "Unknown",
  none: "None",
  one: "One",
  moreThanOne: "More than one",
  noBirths: "No Births",

  AtoB: "{a} to {b}",
  ageOrOlder: "{age} or older",
  numberOrMore: "{number} or more",

  calculating: "Calculating...",

  failed: "Action failed",
  success: "Action was successful",

  result: "Your risk is {result}%"
};
