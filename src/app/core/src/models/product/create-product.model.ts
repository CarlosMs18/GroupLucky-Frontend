export interface CreateProduct{
  id?:number,
  code : string,
  name : string,
  stockMin : number,
  stockMax: number,
  unitSalePrice:number,
  categoryId:string

}
