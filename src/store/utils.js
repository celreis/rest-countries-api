// remove space and non-alphabet characters and letter accents
export const formatName = (string) => {
  if (string.normalize != undefined) {
    string = string.normalize("NFKD");
  }
  return string.toLowerCase().replace(/[\s(),.\u0300-\u036F]/g, "");
};

export const borderName = (border, data) => {
  const alpha = data.find((country) => country.alpha3Code === border);
  if (alpha) {
    return alpha.name;
  }
  return;
};

export async function fetchUrl(url, countryData) {
  const countries = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      countryData = data;
    })
    .catch((e) => console.log(e));

  return countries;
}
