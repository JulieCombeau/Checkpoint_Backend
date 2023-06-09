import { Query, Resolver, Mutation, Arg } from "type-graphql";
import datasource from "../db";
import  Country, {  CountryInput } from "../entity/Country";

@Resolver(Country)
export class CountryResolver {
  @Query(() => [Country])
  async countries(): Promise<Country[]> {
    return await datasource.getRepository(Country).find();
  }

  @Query(() => Country)
  async getOneCountrybyCode(@Arg("code") code: string): Promise<Country> {
    const countryCode = await datasource.getRepository(Country).findOne({
        where: {code}
    })
    if (countryCode === null) throw new Error("Country not found");

    return countryCode;
  }

  @Query(() => [Country])
  async getCountriesbyContinentCode(@Arg("continentCode") continentCode: string): Promise<Country[]> {
    const continentCountryCode = await datasource.getRepository(Country).find({
        where: {continentCode}
    })
    if (continentCountryCode === null) throw new Error("Countries not found");

    return continentCountryCode;
  }

  @Mutation(() => Country)
  async createCountry(@Arg("data") data: CountryInput): Promise<Country> {
    return await datasource.getRepository(Country).save(data);
  }

}