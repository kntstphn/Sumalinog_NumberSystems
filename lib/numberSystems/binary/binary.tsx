export function binaryToDecimal(binaryString: string) {
  if (!/^[01]+$/.test(binaryString)) {
    return;
  }

  const decimalValue = parseInt(binaryString, 2).toString();

  return decimalValue;
}

export function binaryToOctal(binaryString: string) {
  if (!/^[01]+$/.test(binaryString)) {
    return;
  }

  const octalValue = parseInt(binaryString, 2).toString(8);

  return octalValue;
}

export function binaryToHexadecimal(binaryString: string) {
  if (!/^[01]+$/.test(binaryString)) {
    return;
  }

  const hexValue = parseInt(binaryString, 2).toString(16).toUpperCase();

  return hexValue;
}
