export interface IWearProduct {
  _id:string;
  title: string;
  mark: string;
  image: string[];
  description: string;
  inStock: number;
  sizes: ISizes[];
  slug: string;
  line: string,
  category: 'men'|'women'|'kid'|'unisex'
  subCategory: ISubCategory;
  price: number;
  oldPrice: number;
  // quantity: number;
  tags: string[];

  createdAt: string;
  updatedAt: string;
}
export type ISizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
export type ISubCategory = 'chamarras'|'pantalones'|'poleras'|'camisas';
