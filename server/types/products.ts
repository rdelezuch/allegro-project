// Typ pojedynczej kategorii (dla CategoryScroller)
export interface Category {
    image: string
    label: string
}

// Typ pojedynczego produktu (dla HomeSection)
export interface Product {
    image: string
    name: string
    price: string
    delivery: string
}

// Typ inspiracji (dla InspirationSection)
export interface Inspiration {
    image: string
    title: string
}

// Główna odpowiedź z API (products.ts z backendu)
export interface ProductsResponse {
    categories: Category[],
    elektronika: Product[],
    domiOgrod: Product[],
    moda: Product[],
    sport: Product[],
    motoryzacja: Product[],
    inspiracje: Inspiration[]
}
