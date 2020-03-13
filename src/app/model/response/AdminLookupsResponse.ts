import { Logistics } from './../Logistics';
import { LandlinePhone } from './../LandlinePhone';
import { Feature } from './../Feature';
import { City } from './../City';
import { Cabin } from './../Cabin';
import { Box } from './../Box';
import { Area } from './../Area';
import { Country } from './../Country';

export class AdminLookupsResponse {
  countries	= new Array<Country> ();
  cities	= new Array<City> ();
  areas	= new Array<Area> ();
  cabins	= new Array<Cabin> ();
  boxes	= new Array<Box> ();
  landlinePhones	= new Array<LandlinePhone> ();
  features	= new Array<Feature> ();
  logistics	= new Array<Logistics> ();

  static fromHttp(httpResponse: AdminLookupsResponse) {
    const adminLookupsResponse = new AdminLookupsResponse();
    adminLookupsResponse.countries = new Array<Country>();
    for (const httpCountryResponse of httpResponse.countries) {
      adminLookupsResponse.countries.push(Country.fromHttp(httpCountryResponse));
    }
    adminLookupsResponse.boxes = new Array<Box>();
    for (const httpBoxResponse of httpResponse.boxes) {
      adminLookupsResponse.boxes.push(Box.fromHttp(httpBoxResponse));
    }
    adminLookupsResponse.areas = new Array<Area>();
    for (const httpAreaResponse of httpResponse.areas) {
      adminLookupsResponse.areas.push(Area.fromHttp(httpAreaResponse));
    }
    return adminLookupsResponse;
  }
}
