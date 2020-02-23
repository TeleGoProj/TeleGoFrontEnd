import { PhoneUser } from './../PhoneUser';
import { Logistics } from './../Logistics';
import { LandlinePhone } from './../LandlinePhone';
import { Feature } from './../Feature';
import { City } from './../City';
import { Cabin } from './../Cabin';
import { Box } from './../Box';
import { Area } from './../Area';
import { Country } from './../Country';

export class AdminLookupsResponse extends Response{
  lookupsCountries	= new Array<Country> ();
  lookupsAreas	= new Array<Area> ();
  lookupsBoxes	= new Array<Box> ();
  lookupsCabins	= new Array<Cabin> ();
  lookupsCities	= new Array<City> ();
  lookupsFeatures	= new Array<Feature> ();
  lookupsLandlinePhones	= new Array<LandlinePhone> ();
  lookupslogistics	= new Array<Logistics> ();
  lookupsPhoneUsers	= new Array<PhoneUser> ();
}
