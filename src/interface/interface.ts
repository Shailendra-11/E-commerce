export interface products {
     id: number,
     title: string,
     description: string,
     category: string,
     price: number,
     discountPercentage: number
     thumbnail: string;
     total: number,
     skip: number,
     limit:number,
}
export interface ProductState {
     product: products[];
     loading: boolean;
     error: string | null;
     // replace `any` with a proper Product type later
}
