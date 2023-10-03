"use client";

import React, { useState } from "react";

import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import {
  binaryToDecimal,
  binaryToHexadecimal,
  binaryToOctal,
} from "./numberSystems/binary/binary";
import {
  decimalToBinary,
  decimalToHexadecimal,
  decimalToOctal,
} from "./numberSystems/decimal/decimal";
import {
  octalToBinary,
  octalToDecimal,
  octalToHexadecimal,
} from "./numberSystems/octal/octal";
import {
  hexToBinary,
  hexToDecimal,
  hexToOctal,
} from "./numberSystems/hexadecimal/hexadecimal";

const Dashboard = () => {
  const [selectedFrom, setSelectedFrom] = useState({ name: "", code: "" });
  const [selectedTo, setSelectedTo] = useState({ name: "", code: "" });
  const [valueFrom, setValueFrom] = useState("");
  const [valueTo, setValueTo] = useState("");
  const [error, setError] = useState("");

  const numberSystems = [
    { name: "Binary", code: "BIN" },
    { name: "Decimal", code: "DEC" },
    { name: "Octal", code: "OCT" },
    { name: "Hexadecimal", code: "HEX" },
  ];

  const handleConversion = () => {
    const fromType = "";
    const toType = "";

    setError("");

    switch (selectedFrom.name) {
      case "Binary": {
        if (selectedTo.name === "Decimal") {
          const value = binaryToDecimal(valueFrom);

          if (value) {
            setValueTo(value);
          } else {
            setError("Value is not Binary");
          }
          return;
        } else if (selectedTo.name === "Octal") {
          const value = binaryToOctal(valueFrom);

          if (value) {
            setValueTo(value);
          } else {
            setError("Value is not Binary");
          }
          return;
        } else if (selectedTo.name === "Hexadecimal") {
          const value = binaryToHexadecimal(valueFrom);

          if (value) {
            setValueTo(value);
          } else {
            setError("Value is not Binary");
          }
          return;
        } else {
          setError("Number System Conversion not supported");
          return;
        }
      }
      case "Decimal": {
        if (selectedTo.name === "Binary") {
          const value = decimalToBinary(valueFrom);

          if (value) {
            setValueTo(value);
          } else {
            setError("Value is not Decimal");
          }
          return;
        } else if (selectedTo.name === "Octal") {
          const value = decimalToOctal(valueFrom);

          if (value) {
            setValueTo(value);
          } else {
            setError("Value is not Decimal");
          }
          return;
        } else if (selectedTo.name === "Hexadecimal") {
          const value = decimalToHexadecimal(valueFrom);

          if (value) {
            setValueTo(value);
          } else {
            setError("Value is not Decimal");
          }
          return;
        } else {
          setError("Number System Conversion not supported");
          return;
        }
      }
      case "Hexadecimal": {
        if (selectedTo.name === "Binary") {
          const value = hexToBinary(valueFrom);

          if (value) {
            setValueTo(value);
          } else {
            setError("Value is not Hexadecimal");
          }
          return;
        } else if (selectedTo.name === "Decimal") {
          const value = hexToDecimal(valueFrom);

          if (value) {
            setValueTo(value);
          } else {
            setError("Value is not Hexadecimal");
          }
          return;
        } else if (selectedTo.name === "Octal") {
          const value = hexToOctal(valueFrom);

          if (value) {
            setValueTo(value);
          } else {
            setError("Value is not Hexadecimal");
          }
          return;
        } else {
          setError("Number System Conversion not supported");
          return;
        }
      }
    }
  };

  const reset = () => {
    setValueFrom("");
    setValueTo("");
    setSelectedFrom({ name: "", code: "" });
    setSelectedTo({ name: "", code: "" });
    setError("");
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="card flex justify-content-center flex-col">
        <Dropdown
          value={selectedFrom}
          onChange={(e) => setSelectedFrom(e.value)}
          options={numberSystems}
          optionLabel="name"
          placeholder="Select a Number System"
          className="w-full md:w-14rem"
        />
      </div>

      <div className="card flex justify-content-center">
        <span className="p-float-label">
          <InputText
            id="from"
            value={valueFrom}
            onChange={(e) => setValueFrom(e.target.value)}
            className="w-[300px] h-[45px] pl-2"
          />
          <label htmlFor="from">From</label>
        </span>
      </div>
      <div className="card flex justify-content-center flex-col">
        <Dropdown
          value={selectedTo}
          onChange={(e) => setSelectedTo(e.value)}
          options={numberSystems}
          optionLabel="name"
          placeholder="Select a Number System"
          className="w-full md:w-14rem"
        />
      </div>
      <div className="card flex justify-content-center">
        <span className="p-float-label">
          <InputText
            id="to"
            value={valueTo}
            disabled
            className="w-[300px] h-[45px] pl-2"
          />
        </span>
      </div>
      <div className="text-red-500">{error}</div>

      <div className="card flex justify-content-center justify-between gap-4">
        <button
          className="rounded-lg bg-green-400 p-2 font-sans font-semibold flex-grow"
          onClick={handleConversion}
        >
          Convert
        </button>
        <button
          className="rounded-lg bg-blue-400 p-2 font-sans font-semibold flex-grow"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
