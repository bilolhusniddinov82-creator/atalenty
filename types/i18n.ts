export interface Translation {
  nav: {
    howItWorks: string;
    notaries: string;
    pricing: string;
    about: string;
    contact: string;
    login: string;
    bookNotary: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    titleEm: string;
    titleLine3: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustCommissioned: string;
    trustEncryption: string;
    trustSpeed: string;
  };
  stats: {
    documents: string;
    rating: string;
    states: string;
    session: string;
  };
  how: {
    eyebrow: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step1Body: string;
    step2Title: string;
    step2Body: string;
    step3Title: string;
    step3Body: string;
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    videoTitle: string;
    videoBody: string;
    encryptionTitle: string;
    encryptionBody: string;
    copyTitle: string;
    copyBody: string;
    inPersonTitle: string;
    inPersonBody: string;
    speedTitle: string;
    speedBody: string;
    auditTitle: string;
    auditBody: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    mostChosen: string;
    single: { name: string; period: string; cta: string; features: [string, string, string, string] };
    business: { name: string; period: string; cta: string; features: [string, string, string, string] };
    enterprise: { name: string; period: string; cta: string; features: [string, string, string, string] };
  };
  testimonials: {
    eyebrow: string;
    title: string;
  };
  faq: {
    eyebrow: string;
    title: string;
  };
  cta: {
    title: string;
    subtitle: string;
  };
  footer: {
    description: string;
    product: string;
    company: string;
    legal: string;
    becomeNotary: string;
    privacy: string;
    terms: string;
    compliance: string;
    rights: string;
  };
  auth: {
    welcomeBack: string;
    loginSubtitle: string;
    createAccount: string;
    registerSubtitle: string;
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    loginButton: string;
    registerButton: string;
    noAccount: string;
    haveAccount: string;
    signUpLink: string;
    signInLink: string;
    logout: string;
  };
  booking: {
    eyebrow: string;
    title: string;
    subtitle: string;
    fullName: string;
    email: string;
    documentType: string;
    documentTypePlaceholder: string;
    state: string;
    statePlaceholder: string;
    preferredDate: string;
    notes: string;
    notesPlaceholder: string;
    submit: string;
    submitting: string;
    successMessage: string;
  };
  notaries: {
    eyebrow: string;
    title: string;
    subtitle: string;
    bookWith: string;
  };
  dashboard: {
    eyebrow: string;
    title: string;
    subtitle: string;
    document: string;
    signer: string;
    dateTime: string;
    status: string;
  };
  about: {
    eyebrow: string;
    title: string;
    subtitle: string;
    valuesEyebrow: string;
    valuesTitle: string;
    value1Title: string;
    value1Body: string;
    value2Title: string;
    value2Body: string;
    value3Title: string;
    value3Body: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    address: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    formSubmitting: string;
  };
  common: {
    loading: string;
  };
}
