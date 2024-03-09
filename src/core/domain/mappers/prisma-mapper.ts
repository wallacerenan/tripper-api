import { Mapper } from './mapper';

export abstract class PrismaMapper {
  abstract toPrisma<T, F>(params: T): F;
  abstract toDomain<T, F>(params: T): F;
}
