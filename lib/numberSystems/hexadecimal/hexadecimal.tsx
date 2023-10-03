export function hexToBinary(hexString: string) {
  if (!/^[0-9A-Fa-f]+$/.test(hexString)) {
    return;
  }

  const binaryString = parseInt(hexString, 16).toString(2);

  return binaryString;
}

export function hexToDecimal(hexString: string) {
  if (!/^[0-9A-Fa-f]+$/.test(hexString)) {
    return;
  }

  const decimalString = parseInt(hexString, 16).toString(10);

  return decimalString;
}

export function hexToOctal(hexString: string) {
  if (!/^[0-9A-Fa-f]+$/.test(hexString)) {
    return;
  }

  const octalString = parseInt(hexString, 16).toString(8);

  return octalString;
}
