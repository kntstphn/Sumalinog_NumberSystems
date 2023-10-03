export function decimalToBinary(decimalString: string) {
  const decimalNumber = parseInt(decimalString, 10);

  if (isNaN(decimalNumber)) {
    return;
  }

  const binaryString = decimalNumber.toString(2);

  return binaryString;
}

export function decimalToOctal(decimalString: string) {
  const decimalNumber = parseInt(decimalString, 10);

  if (isNaN(decimalNumber)) {
    return;
  }

  const octalString = decimalNumber.toString(8);

  return octalString;
}

export function decimalToHexadecimal(decimalString: string) {
  const decimalNumber = parseInt(decimalString, 10);

  if (isNaN(decimalNumber)) {
    return;
  }

  const hexString = decimalNumber.toString(16).toUpperCase();

  return hexString;
}
