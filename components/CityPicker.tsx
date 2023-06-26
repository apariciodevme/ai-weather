"use client";
import { Country } from "country-state-city";
import Select from "react-select";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { GlobeAltIcon } from "@heroicons/react/solid";

type option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    isoCode: string;
  };
  label: string;
} | null;

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },

  label: country.name,
}));

const CityPicker = () => {
  const [selectedCountry, setselectedCountry] = useState<option>(null);

  const [selectedCity, setselectedCity] = useState<cityOption>(null);

  const router = useRouter();

  const handleSelectedCountry = (option: option) => {
    setselectedCountry(option);
    setselectedCity(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
      <GlobeAltIcon className="w-6 h-6"/>
        <label htmlFor="country">Country</label>
      </div>
      <Select
        className="text-black"
        value={selectedCountry}
        onChange={handleSelectedCountry}
        options={options}
      />
    </div>
  );
};

export default CityPicker;
