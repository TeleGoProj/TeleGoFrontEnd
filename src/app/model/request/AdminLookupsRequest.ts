import { PhoneUser } from './../PhoneUser';
import { Logistics } from './../Logistics';
import { LandlinePhone } from './../LandlinePhone';
import { Feature } from './../Feature';
import { City } from './../City';
import { Cabin } from './../Cabin';
import { Box } from './../Box';
import { Area } from './../Area';
import { Country } from './../Country';

export class AdminLookupsRequest extends Request {
  updatedCountries = new Array<Country>();
  deletedCountries = new Array<Country>();

  updatedAreas = new Array<Area>();
  deletedAreas = new Array<Area>();

  updatedBoxes = new Array<Box>();
  deletedBoxes = new Array<Box>();

  updatedCabins = new Array<Cabin>();
  deletedCabins = new Array<Cabin>();

  updatedCities = new Array<City>();
  deletedCities = new Array<City>();

  updatedFeatures = new Array<Feature>();
  deletedFeatures = new Array<Feature>();

  updatedLandPhone = new Array<LandlinePhone>();
  deletedLandlinePhones = new Array<LandlinePhone>();

  updatedLogistics = new Array<Logistics>();
  deletedLogistics = new Array<Logistics>();

  updatedPhoneUsers = new Array<PhoneUser>();
  deletedPhoneUsers = new Array<PhoneUser>();
}
