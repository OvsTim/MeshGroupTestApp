import {array, object, string} from 'yup';

const driverScheme = object({
  driverId: string().required(),
  code: string(),
  url: string().required(),
  givenName: string().required(),
  familyName: string().required(),
  dateOfBirth: string().required(),
  nationality: string().required(),
});

const driversResponse = object({
  MRData: object({
    xmlns: string().required(),
    series: string().required(),
    url: string().url().required(),
    limit: string().required(),
    offset: string().required(),
    total: string().required(),
    DriverTable: object({
      Drivers: array().of(driverScheme).required(),
    }).required(),
  }),
});

export {driverScheme, driversResponse};
