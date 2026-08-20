export interface Region {
  id: string;
  nameUz: string;
  nameRu: string;
  nameEn: string;
  mainCityUz: string;
  mainCityRu: string;
  mainCityEn: string;
}

/**
 * O'zbekistonning barcha ma'muriy hududlari: 12 viloyat, Toshkent shahri
 * va Qoraqalpog'iston Respublikasi.
 */
export const REGIONS: Region[] = [
  { id: "tashkent-city", nameUz: "Toshkent shahri", nameRu: "город Ташкент", nameEn: "Tashkent City", mainCityUz: "Toshkent", mainCityRu: "Ташкент", mainCityEn: "Tashkent" },
  { id: "tashkent", nameUz: "Toshkent viloyati", nameRu: "Ташкентская область", nameEn: "Tashkent Region", mainCityUz: "Nurafshon", mainCityRu: "Нурафшан", mainCityEn: "Nurafshon" },
  { id: "andijan", nameUz: "Andijon viloyati", nameRu: "Андижанская область", mainCityUz: "Andijon", mainCityRu: "Андижан", nameEn: "Andijan Region", mainCityEn: "Andijan" },
  { id: "fergana", nameUz: "Farg'ona viloyati", nameRu: "Ферганская область", nameEn: "Fergana Region", mainCityUz: "Farg'ona", mainCityRu: "Фергана", mainCityEn: "Fergana" },
  { id: "namangan", nameUz: "Namangan viloyati", nameRu: "Наманганская область", nameEn: "Namangan Region", mainCityUz: "Namangan", mainCityRu: "Наманган", mainCityEn: "Namangan" },
  { id: "sirdaryo", nameUz: "Sirdaryo viloyati", nameRu: "Сырдарьинская область", nameEn: "Sirdaryo Region", mainCityUz: "Guliston", mainCityRu: "Гулистан", mainCityEn: "Gulistan" },
  { id: "jizzakh", nameUz: "Jizzax viloyati", nameRu: "Джизакская область", nameEn: "Jizzakh Region", mainCityUz: "Jizzax", mainCityRu: "Джизак", mainCityEn: "Jizzakh" },
  { id: "samarkand", nameUz: "Samarqand viloyati", nameRu: "Самаркандская область", nameEn: "Samarkand Region", mainCityUz: "Samarqand", mainCityRu: "Самарканд", mainCityEn: "Samarkand" },
  { id: "bukhara", nameUz: "Buxoro viloyati", nameRu: "Бухарская область", nameEn: "Bukhara Region", mainCityUz: "Buxoro", mainCityRu: "Бухара", mainCityEn: "Bukhara" },
  { id: "navoiy", nameUz: "Navoiy viloyati", nameRu: "Навоийская область", nameEn: "Navoiy Region", mainCityUz: "Navoiy", mainCityRu: "Навои", mainCityEn: "Navoiy" },
  { id: "kashkadarya", nameUz: "Qashqadaryo viloyati", nameRu: "Кашкадарьинская область", nameEn: "Kashkadarya Region", mainCityUz: "Qarshi", mainCityRu: "Карши", mainCityEn: "Karshi" },
  { id: "surkhandarya", nameUz: "Surxondaryo viloyati", nameRu: "Сурхандарьинская область", nameEn: "Surkhandarya Region", mainCityUz: "Termiz", mainCityRu: "Термез", mainCityEn: "Termez" },
  { id: "khorezm", nameUz: "Xorazm viloyati", nameRu: "Хорезмская область", nameEn: "Khorezm Region", mainCityUz: "Urganch", mainCityRu: "Ургенч", mainCityEn: "Urgench" },
  { id: "karakalpakstan", nameUz: "Qoraqalpog'iston Respublikasi", nameRu: "Республика Каракалпакстан", nameEn: "Republic of Karakalpakstan", mainCityUz: "Nukus", mainCityRu: "Нукус", mainCityEn: "Nukus" },
];

export function getRegionName(regionId: string, locale: "uz" | "ru" | "en"): string {
  const region = REGIONS.find((r) => r.id === regionId);
  if (!region) return regionId;
  if (locale === "ru") return region.nameRu;
  if (locale === "en") return region.nameEn;
  return region.nameUz;
}
