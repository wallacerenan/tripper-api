export abstract class Mapper {
  abstract toDomain<T, F>(params: T): F;
  abstract fromDomain<T, F>(params: T): F;
}
