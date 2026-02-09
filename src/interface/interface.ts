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
     limit: number,
}

export interface Category {
     slug: String,
     name: String,
     url: String
}
export interface ProductState {
     product: products[];
     category : Category [];
     loading: boolean;
     error: string | null;
     // replace `any` with a proper Product type later
}



