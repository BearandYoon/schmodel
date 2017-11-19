const months = {
  placeholder: 'MM',
  options: []
};

for (let i = 1; i <= 12; i ++) {
  months.options.push({
    value: i,
    text: i
  })
}

const days = {
  placeholder: 'DD',
  options: []
};

for (let i = 1; i <= 31; i ++) {
  days.options.push({
    value: i,
    text: i
  })
}

const years = {
  placeholder: 'YYYY',
  options: []
};

for (let i = 1970; i <= 2000; i ++) {
  years.options.push({
    value: i,
    text: i
  })
}

const countries = {
  placeholder: '',
  options: [
    {
      value: 'United Kingdom',
      text: 'United Kingdom'
    },
    {
      value: 'United States',
      text: 'United States'
    }
  ]
};

const phonePrefixes = {
  placeholder: '',
  options: [
    {
      value: '41',
      text: '(+41) UK'
    }
  ]
};

const nationalities = {
  placeholder: '',
  options: [
    {
      value: 'British',
      text: 'British'
    }
  ]
};

const languages = {
  placeholder: '',
  options: [
    {
      value: 'English',
      text: 'English'
    }
  ]
};

const heights = {
  placeholder: '',
  options: [
    {
      value: 177,
      text: '5\'10.0" (177cm)'
    }
  ]
};

const chestSizes = {
  placeholder: '',
  options: [
    {
      value: '34B',
      text: '34B'
    }
  ]
};

const waistSizes = {
  placeholder: '',
  options: [
    {
      value: 78,
      text: '31" (78 cm)'
    }
  ]
};

const weights = {
  placeholder: '',
  options: [
    {
      value: 121,
      text: '121 (55kg)'
    }
  ]
};

const dressSizes = {
  placeholder: '',
  options: [
    {
      value: 5.5,
      text: '5.5 (36.0 EU)'
    }
  ]
};

const hairColors = {
  placeholder: '',
  options: [
    {
      value: 'Blond',
      text: 'Blond'
    }
  ]
};

const eyeColors = {
  placeholder: '',
  options: [
    {
      value: 'Green',
      text: 'Green'
    }
  ]
};

export {
  months,
  days,
  years,
  countries,
  phonePrefixes,
  nationalities,
  languages,
  heights,
  chestSizes,
  waistSizes,
  weights,
  dressSizes,
  hairColors,
  eyeColors
};
