import { Query, Resolver } from "type-graphql";
import datasource from "../db";
import Country from "../entity/Country";

@Resolver(Country)
export class CountryResolver {
  @Query(() => [Country])
  async countries(): Promise<Country[]> {
    return await datasource.getRepository(Country).find();
  }
}