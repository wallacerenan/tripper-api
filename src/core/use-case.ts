export abstract class UseCase {
  abstract execute(...values: any): Promise<any> | any;
}
