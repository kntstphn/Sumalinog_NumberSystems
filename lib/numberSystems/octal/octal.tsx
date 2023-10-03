export function octalToBinary(octalString: string) {
  if (!/^[0-7]+$/.test(octalString)) {
    return;
  }

  const binaryString = parseInt(octalString, 8).toString(2);

  return binaryString;
}

export function octalToDecimal(octalString: string) {
  if (!/^[0-7]+$/.test(octalString)) {
    return;
  }

  const decimalString = parseInt(octalString, 8).toString(10);

  return decimalString;
}

export function octalToHexadecimal(octalString: string) {
  if (!/^[0-7]+$/.test(octalString)) {
    return;
  }

  const hexString = parseInt(octalString, 8).toString(16).toUpperCase();

  return hexString;
}
