export default interface Item {
    label: string;
    price: number;
    id: string;
    stock: number;
}

export interface FetchedItemType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

