"use client";
import React, { ChangeEvent, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CountryData } from "react-phone-input-2";
import { IoCall } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";

interface Language {
  id: number;
  name: string;
}

const languages = [
  { id: 1, name: "English" },
  { id: 2, name: "Spanish" },
  { id: 3, name: "French" },
  { id: 4, name: "German" },
  { id: 5, name: "Chinese" },
  { id: 6, name: "Japanese" },
  { id: 7, name: "Korean" },
  { id: 8, name: "Italian" },
  { id: 9, name: "Portuguese" },
  { id: 10, name: "Russian" },
];

const TryNow = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isOpenLangMenu, setIsOpenLangMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
    null
  );

  const toggleDropdown = () => {
    setIsOpenLangMenu(!isOpenLangMenu);
  };

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpenLangMenu(false);
  };

  const handlerPhoneNumber = (
    value: string,
    data: CountryData,
    event: ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ) => {
    setPhoneNumber(value);
  };
  return (
    <div className=" mx-14 rounded-2xl mt-20  px-4 py-20 bg-gradient-to-b from-orange-200 to-white shadow-md shadow-gray-300">
      <div className="">
        <h2 className="text-2xl font-bold">Try Now</h2>
        <p className=" font-medium text-stone-400">Get a call from Toingg</p>
      </div>
      <div>
        <input
          className="border w-full text-ctm-gray mt-8 px-4 rounded-md border-ctm-gray py-2 bg-transparent"
          placeholder="Name"
        />

        <PhoneInput
          enableAreaCodeStretch
          country="in"
          inputProps={{
            name: "phoneNumber",
          }}
          autoFormat
          value={phoneNumber}
          onChange={handlerPhoneNumber}
          inputClass="text-ctm-gray"
          buttonClass="bg-transparent"
          containerClass="border border-ctm-gray py-1 px-2 rounded-md mt-6 w-full bg-transparent"
          dropdownClass="bg-white"
          enableSearch={true}
          inputStyle={{
            backgroundColor: "transparent",
            borderWidth: 0,
          }}
          buttonStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
        />
        <div className="relative mt-6">
          <button
            className="bg-transparent flex w-full items-center border border-ctm-gray py-2 text-ctm-gray px-4 rounded-md focus:outline-none"
            onClick={toggleDropdown}>
            {selectedLanguage ? selectedLanguage.name : "Choose your language"}
            <MdArrowDropDown />
          </button>
          {isOpenLangMenu && (
            <ul className="absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-1">
              {languages.map((language) => (
                <li
                  key={language.id}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleLanguageSelect(language)}>
                  {language.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-24">
        <div className=" bg-orange-300 px-4 py-4 w-fit rounded-full flex">
          <IoCall className="text-white  text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default TryNow;
