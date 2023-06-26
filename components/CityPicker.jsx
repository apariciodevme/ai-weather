"use client";
import { City, Country } from "country-state-city";
import Select from "react-select";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { GlobeAltIcon } from "@heroicons/react/solid";

{/*  type option = {
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
*/}


const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },

  label: country.name,
}));

const CityPicker = () => {
  const [selectedCountry, setselectedCountry] = useState(null);

  const [selectedCity, setselectedCity] = useState(null);

  const router = useRouter();

  const handleSelectedCountry = (option) => {
    setselectedCountry(option);
    setselectedCity(null);
  };

  const handleSelectedCity = (option) => {
    setselectedCity(option);
    // router.push(
    `/location/${option?.value.latitude}/${option?.value.longitude}`;
    //)
  };

  return (
    <div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <GlobeAltIcon className="w-4 h-4" />
          <label htmlFor="country">Country</label>
        </div>
        <Select
          className="text-black"
          value={selectedCountry}
          onChange={handleSelectedCountry}
          options={options}
        />
      </div>

      {selectedCountry && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <GlobeAltIcon className="w-4 h-4" />
            <label htmlFor="country">City</label>
          </div>
          <Select
            className="text-black"
            value={selectedCity}
            onChange={handleSelectedCity}
            options={City.getCitiesOfCountry(
              selectedCountry.value.isoCode
            )?.map((state) => ({
              value: {
                latitude: state.latitude,
                longitude: state.longitude,
                countryCode: state.countryCode,
                name: state.name,
                stateCode: state.stateCode,
              },
              label: state.name,
            }))}
          />
        </div>
      )}
    </div>
  );
};

export default CityPicker;
