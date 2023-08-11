import {driverScheme, driversResponse} from 'scheme/driver';
import {imageScheme} from 'scheme/image';
import {InferType} from 'yup';

type Image = InferType<typeof imageScheme>;
type Driver = InferType<typeof driverScheme>;
type DriverResponse = InferType<typeof driversResponse>;

export type {Image, Driver, DriverResponse};
