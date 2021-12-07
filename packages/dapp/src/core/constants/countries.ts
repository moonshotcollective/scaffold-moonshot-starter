import sc from "states-cities-db";

const COUNTRIES = sc.getCountries();

const getCountryTelCode = (country: string) =>
  country &&
  COUNTRIES.find(({ iso }: { iso: string }) => iso === country).prefix;

export { COUNTRIES, getCountryTelCode };
