export interface DocumentTypeOption {
  id: string;
  labelUz: string;
  labelRu: string;
  labelEn: string;
}

export const DOCUMENT_TYPES: DocumentTypeOption[] = [
  { id: "power-of-attorney", labelUz: "Ishonchnoma", labelRu: "Доверенность", labelEn: "Power of attorney" },
  { id: "real-estate", labelUz: "Ko'chmas mulk shartnomasi", labelRu: "Договор недвижимости", labelEn: "Real estate deed" },
  { id: "loan-document", labelUz: "Kredit hujjati", labelRu: "Кредитный документ", labelEn: "Loan document" },
  { id: "affidavit", labelUz: "Ariza-dalolatnoma", labelRu: "Заявление-подтверждение", labelEn: "Affidavit" },
  { id: "will-or-trust", labelUz: "Vasiyatnoma", labelRu: "Завещание", labelEn: "Will or trust" },
  { id: "business-contract", labelUz: "Biznes shartnomasi", labelRu: "Деловой договор", labelEn: "Business contract" },
  { id: "marriage-contract", labelUz: "Nikoh shartnomasi", labelRu: "Брачный договор", labelEn: "Marriage contract" },
  { id: "other", labelUz: "Boshqa", labelRu: "Другое", labelEn: "Other" },
];

export function getDocumentTypeLabel(id: string, locale: "uz" | "ru" | "en"): string {
  const doc = DOCUMENT_TYPES.find((d) => d.id === id);
  if (!doc) return id;
  if (locale === "ru") return doc.labelRu;
  if (locale === "en") return doc.labelEn;
  return doc.labelUz;
}
