export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: ICategory;
}

export interface ICategory {
    id: string;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}