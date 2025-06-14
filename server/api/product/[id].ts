export default defineEventHandler((event) => {
    // 📥 Odczytujemy ID z URL-a np. /api/products/3
    const id = Number(getRouterParam(event, 'id'))

    const elektronika = [
        {
            id: 0,
            image: 'https://picsum.photos/seed/laptop/180/180',
            name: 'Laptop Lenovo IdeaPad 3',
            price: '2 499,00',
            delivery: 'jutro'
        },
        {
            id: 1,
            image: 'https://picsum.photos/seed/smartphone/180/180',
            name: 'Smartfon Samsung Galaxy S22',
            price: '3 899,00',
            delivery: 'w środę'
        },
        {
            id: 2,
            image: 'https://picsum.photos/seed/sluchawki/180/180',
            name: 'Słuchawki bezprzewodowe JBL',
            price: '349,00',
            delivery: 'we wtorek'
        },
        {
            id: 3,
            image: 'https://picsum.photos/seed/monitor/180/180',
            name: 'Monitor 27\" LG UltraGear',
            price: '1 199,00',
            delivery: 'jutro'
        },
        {
            id: 4,
            image: 'https://picsum.photos/seed/myszka/180/180',
            name: 'Mysz gamingowa Logitech G502',
            price: '249,90',
            delivery: 'w poniedziałek'
        },
    ]

    // 🔍 Szukamy produktu o danym ID
    const produkt = elektronika.find(p => p.id === id)

    // 🛑 Jeśli nie znaleziono – 404
    if (!produkt) {
        return createError({ statusCode: 404, message: 'Produkt nie znaleziony' })
    }

    // ✅ Zwracamy produkt
    return produkt
})