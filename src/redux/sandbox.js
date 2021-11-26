/* eslint-disable */
let response = {};
/*
response.data = (
  {
    dates: {
      '2021-11-22': {
        countries: {
          Mexico: {
            date: '2021-11-22',
            id: 'mexico',
            links: [
              {
                href: '/api/2021-11-22/country/mexico',
                rel: 'self',
                type: 'GET',
              },
            ],
            name: 'Mexico',
            name_es: 'México',
            name_it: 'Messico',
            regions: [
              {
                date: '2021-11-22',
                id: 'campeche',
                links: [
                  {
                    href: '/api/2021-11-22/country/mexico/region/campeche',
                    rel: 'self',
                    type: 'GET',
                  },
                ],
                name: 'Campeche',
                name_es: 'Campeche',
                name_it: 'Campeche',
                source: 'Secretaría de Salud México',
                sub_regions: [],
                today_confirmed: 24112,
                today_deaths: 2076,
                today_intensive_care: 0,
                today_new_confirmed: 5,
                today_new_deaths: 0,
                today_new_intensive_care: 0,
                today_new_open_cases: 5,
                today_new_recovered: 0,
                today_open_cases: 22036,
                today_recovered: 0,
                today_vs_yesterday_confirmed: 0.00020740863649559849,
                today_vs_yesterday_deaths: 0.0,
                today_vs_yesterday_intensive_care: null,
                today_vs_yesterday_open_cases: 0.00022695292996233185,
                today_vs_yesterday_recovered: null,
                yesterday_confirmed: 24107,
                yesterday_deaths: 2076,
                yesterday_intensive_care: 0,
                yesterday_open_cases: 22031,
                yesterday_recovered: 0,
              },
              {
                date: '2021-11-22',
                id: 'nayarit',
                links: [
                  {
                    href: '/api/2021-11-22/country/mexico/region/nayarit',
                    rel: 'self',
                    type: 'GET',
                  },
                ],
                name: 'Nayarit',
                name_es: 'Nayarit',
                name_it: 'Nayarit',
                source: 'Secretaría de Salud México',
                sub_regions: [],
                today_confirmed: 34107,
                today_deaths: 2853,
                today_intensive_care: 0,
                today_new_confirmed: 1,
                today_new_deaths: 1,
                today_new_intensive_care: 0,
                today_new_open_cases: 0,
                today_new_recovered: 0,
                today_open_cases: 31254,
                today_recovered: 0,
                today_vs_yesterday_confirmed: 2.932035418989898e-05,
                today_vs_yesterday_deaths: 0.0003506311360448322,
                today_vs_yesterday_intensive_care: null,
                today_vs_yesterday_open_cases: 0.0,
                today_vs_yesterday_recovered: null,
                yesterday_confirmed: 34106,
                yesterday_deaths: 2852,
                yesterday_intensive_care: 0,
                yesterday_open_cases: 31254,
                yesterday_recovered: 0,
              },
            ],
            source: 'Secretaría de Salud México',
            today_confirmed: 3863362,
            today_deaths: 292471,
            today_intensive_care: 0,
            today_new_confirmed: 1225,
            today_new_deaths: 99,
            today_new_intensive_care: 0,
            today_new_open_cases: 1126,
            today_new_recovered: 0,
            today_open_cases: 1300464,
            today_recovered: 2270427,
            today_vs_yesterday_confirmed: 0.00031718191250074135,
            today_vs_yesterday_deaths: 0.00033860971638866033,
            today_vs_yesterday_intensive_care: null,
            today_vs_yesterday_open_cases: 0.0008665951430650853,
            today_vs_yesterday_recovered: 0.0,
            yesterday_confirmed: 3862137,
            yesterday_deaths: 292372,
            yesterday_intensive_care: 0,
            yesterday_open_cases: 1299338,
            yesterday_recovered: 2270427,
          },
        },
        info: {
          date: '2021-11-22 00:00CET',
          date_generation: '2021-11-22 16:18',
          yesterday: '2021-11-21 00:00CET',
        },
      },
    },
    metadata: {
      by: 'Narrativa & AppliedXL',
      url: [
        'wwww.narrativa.com',
        'www.appliedxl.com',
      ],
    },
    total: {
      date: '2021-11-21',
      name: 'Total',
      name_es: 'Total',
      name_it: 'Total',
      rid: '#total',
      source: 'Narrativa',
      today_confirmed: 257730762,
      today_deaths: 5154067,
      today_new_confirmed: 467021,
      today_new_deaths: 6606,
      today_new_open_cases: 460415,
      today_new_recovered: 0,
      today_open_cases: 108275562,
      today_recovered: 144301133,
      today_vs_yesterday_confirmed: 0.0018153393796758177,
      today_vs_yesterday_deaths: 0.0012833511511791684,
      today_vs_yesterday_open_cases: 0.004270411095390836,
      today_vs_yesterday_recovered: 0.0,
      yesterday_confirmed: 257263741,
      yesterday_deaths: 5147461,
      yesterday_open_cases: 107815147,
      yesterday_recovered: 144301133,
    },
    updated_at: '2021-11-22 15:18UTC',
  }
);

const totalData = Object.keys(response.data.dates).map((key) => (
  {
    name: response.data.dates[key].countries.Mexico.name,
    source: response.data.dates[key].countries.Mexico.source,
    today_confirmed: response.data.dates[key].countries.Mexico.today_confirmed,
    today_deaths: response.data.dates[key].countries.Mexico.today_deaths,
    today_new_confirmed: response.data.dates[key].countries.Mexico.today_new_confirmed,
    today_new_deaths: response.data.dates[key].countries.Mexico.today_new_deaths,
    today_new_open_cases: response.data.dates[key].countries.Mexico.today_new_open_cases,
    today_new_recovered: response.data.dates[key].countries.Mexico.today_new_recovered,
    today_open_cases: response.data.dates[key].countries.Mexico.today_open_cases,
    today_recovered: response.data.dates[key].countries.Mexico.today_recovered,
    today_vs_yesterday_confirmed: response.data.dates[key].countries.Mexico.today_vs_yesterday_confirmed,
    today_vs_yesterday_deaths: response.data.dates[key].countries.Mexico.today_vs_yesterday_deaths,
    today_vs_yesterday_open_cases: response.data.dates[key].countries.Mexico.today_vs_yesterday_open_cases,
    today_vs_yesterday_recovered: response.data.dates[key].countries.Mexico.today_vs_yesterday_recovered,
    yesterday_confirmed: response.data.dates[key].countries.Mexico.yesterday_confirmed,
    yesterday_deaths: response.data.dates[key].countries.Mexico.yesterday_deaths,
    yesterday_open_cases: response.data.dates[key].countries.Mexico.yesterday_open_cases,
    yesterday_recovered: response.data.dates[key].countries.Mexico.yesterday_recovered,
    regions: response.data.dates[key].countries.Mexico.regions.map((region) => (
      {
        id: region.id,
        name: region.name,
        source: region.source,
        today_confirmed: region.today_confirmed,
        today_deaths: region.today_deaths,
        today_new_confirmed: region.today_new_confirmed,
        today_new_deaths: region.today_new_deaths,
      })),
  }))[0];

const { regions, ...countryData } = totalData;

*/
const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;


response.data = (
  {
    "dates": {
      "2021-11-26": {
        "countries":{
          "Afghanistan": {
            "date": "2021-11-22",
            "id": "afghanistan",
          },
          "Mexico": {
            "date": "2021-11-22",
            "id": "afghanistan",
          },
          "Pakistan": {
            "date": "2021-11-22",
            "id": "afghanistan",
          },
          "Angola": {
            "date": "2021-11-22",
            "id": "afghanistan",
          },
        }
      },
    },
  }
);

const apiResponse = response.data.dates[date].countries;
const countries = Object.keys(apiResponse).map((key) => (
  {
    ...apiResponse[key],
  }));
console.log(countries);