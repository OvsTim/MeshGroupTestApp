import {imageScheme} from 'scheme/image';
import {InferType} from 'yup';

type Image = InferType<typeof imageScheme>;

export type {Image};
