import { DataSource } from 'typeorm';
import Country from './entity/Country';

export default new DataSource({
  type: 'sqlite',
  database: './checkpoint-backend.sqlite',
  synchronize: true,
  entities: [Country],
  logging: ['query', 'error'],
});
