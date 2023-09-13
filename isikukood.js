function analüüsiIsikukood(isikukood) {
  if (isikukood.length !== 11) {
    return "Vigane isikukood";
  }

  const sugu = isikukood[0] % 2 === 0 ? "naine" : "mees";
  const sünnikuupäev = isikukood.slice(5, 7) + "." + isikukood.slice(3, 5) + "." + isikukood.slice(1, 3);
  const registreerimiskoht = isikukood.slice(7, 10);
  const esmaneOmasoostIsik = isikukood[10] === "1" ? "Jah" : "Ei";
  const kontrollnumber = parseInt(isikukood.charAt(11), 10);


  return `
    Isikukoodiga ${isikukood} on ${sugu}, 
    kes on sündinud ${sünnikuupäev} aastal, 
    isikukood registreeriti ${registreerimiskoht} 
    sel päeval oli ta esimene omasoost isik: ${esmaneOmasoostIsik}.
    see on tema kontrollnumber: ${kontrollnumber}

  `;
}

const isikukood = "49403136516";
console.log(analüüsiIsikukood(isikukood));