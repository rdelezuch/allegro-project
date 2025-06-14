// Eksport handler API za pomocą funkcji `defineEventHandler`
export default defineEventHandler(() => {
    return {
        // Kategorie i produkty
        categories: [
            {image: 'https://placehold.co/80x80?text=Elektronika', label: 'Elektronika'},
            {image: 'https://placehold.co/80x80?text=Dom+i+Ogród', label: 'Dom i Ogród'},
            {image: 'https://placehold.co/80x80?text=Moda', label: 'Moda'},
            {image: 'https://placehold.co/80x80?text=Sport', label: 'Sport'},
            {image: 'https://placehold.co/80x80?text=Motoryzacja', label: 'Motoryzacja'},
        ],

        elektronika: [
            {
                image: 'https://picsum.photos/seed/laptop/180/180',
                name: 'Laptop Lenovo IdeaPad 3',
                price: '2 499,00',
                delivery: 'jutro'
            },
            {
                image: 'https://picsum.photos/seed/smartphone/180/180',
                name: 'Smartfon Samsung Galaxy S22',
                price: '3 899,00',
                delivery: 'w środę'
            },
            {
                image: 'https://picsum.photos/seed/sluchawki/180/180',
                name: 'Słuchawki bezprzewodowe JBL',
                price: '349,00',
                delivery: 'we wtorek'
            },
            {
                image: 'https://picsum.photos/seed/monitor/180/180',
                name: 'Monitor 27\" LG UltraGear',
                price: '1 199,00',
                delivery: 'jutro'
            },
            {
                image: 'https://picsum.photos/seed/myszka/180/180',
                name: 'Mysz gamingowa Logitech G502',
                price: '249,90',
                delivery: 'w poniedziałek'
            },
        ],

        domiOgrod: [
            {
                image: 'https://picsum.photos/seed/odkurzacz/180/180',
                name: 'Odkurzacz pionowy Dyson V15',
                price: '2 299,00',
                delivery: 'we wtorek'
            },
            {
                image: 'https://picsum.photos/seed/kanapa/180/180',
                name: 'Kanapa narożna szara',
                price: '3 499,00',
                delivery: 'za 3 dni'
            },
            {
                image: 'https://picsum.photos/seed/kwiaty/180/180',
                name: 'Zestaw kwiatów doniczkowych',
                price: '99,00',
                delivery: 'jutro'
            },
            {
                image: 'https://picsum.photos/seed/pojemnik/180/180',
                name: 'Organizer na przyprawy',
                price: '39,99',
                delivery: 'we wtorek'
            },
            {
                image: 'https://picsum.photos/seed/grill/180/180',
                name: 'Grill gazowy Weber',
                price: '2 099,00',
                delivery: 'za 2 dni'
            },
        ],

        moda: [
            {
                image: 'https://picsum.photos/seed/kurtka/180/180',
                name: 'Kurtka puchowa damska',
                price: '359,00',
                delivery: 'w środę'
            },
            {
                image: 'https://picsum.photos/seed/buty/180/180',
                name: 'Buty sportowe Nike Air Max',
                price: '499,00',
                delivery: 'jutro'
            },
            {
                image: 'https://picsum.photos/seed/torebka/180/180',
                name: 'Torebka skórzana',
                price: '289,00',
                delivery: 'we wtorek'
            },
            {
                image: 'https://picsum.photos/seed/zegarek/180/180',
                name: 'Zegarek męski Casio',
                price: '699,00',
                delivery: 'w poniedziałek'
            },
            {
                image: 'https://picsum.photos/seed/okulary/180/180',
                name: 'Okulary przeciwsłoneczne Ray-Ban',
                price: '529,00',
                delivery: 'jutro'
            },
        ],

        sport: [
            {
                image: 'https://picsum.photos/seed/rower/180/180',
                name: 'Rower górski MTB',
                price: '2 199,00',
                delivery: 'za 5 dni'
            },
            {
                image: 'https://picsum.photos/seed/rolki/180/180',
                name: 'Rolki męskie K2',
                price: '649,00',
                delivery: 'w środę'
            },
            {
                image: 'https://picsum.photos/seed/hantle/180/180',
                name: 'Hantle żeliwne 2x10kg',
                price: '289,00',
                delivery: 'we wtorek'
            },
            {
                image: 'https://picsum.photos/seed/kajak/180/180',
                name: 'Kajak dwuosobowy',
                price: '1 799,00',
                delivery: 'za 4 dni'
            },
            {
                image: 'https://picsum.photos/seed/namiot/180/180',
                name: 'Namiot 4-osobowy Coleman',
                price: '899,00',
                delivery: 'w poniedziałek'
            },
        ],

        motoryzacja: [
            {
                image: 'https://picsum.photos/seed/opony/180/180',
                name: 'Opony zimowe Michelin',
                price: '1 199,00',
                delivery: 'we wtorek'
            },
            {
                image: 'https://picsum.photos/seed/nawigacja/180/180',
                name: 'Nawigacja Garmin DriveSmart',
                price: '899,00',
                delivery: 'w środę'
            },
            {
                image: 'https://picsum.photos/seed/lampy/180/180',
                name: 'Lampy LED do auta',
                price: '299,00',
                delivery: 'jutro'
            },
            {
                image: 'https://picsum.photos/seed/bagażnik/180/180',
                name: 'Bagażnik dachowy Thule',
                price: '1 499,00',
                delivery: 'w poniedziałek'
            },
            {
                image: 'https://picsum.photos/seed/kamera/180/180',
                name: 'Kamera samochodowa VIOFO',
                price: '649,00',
                delivery: 'we wtorek'
            },
        ],

        inspiracje: [
            {image: 'https://picsum.photos/seed/praca/300/200', title: 'Elektronika do pracy i nauki'},
            {image: 'https://picsum.photos/seed/ogrod/300/200', title: 'Pomysły na ogród'},
            {image: 'https://picsum.photos/seed/moda/300/200', title: 'Letnie stylizacje modowe'},
            {image: 'https://picsum.photos/seed/sport/300/200', title: 'Sprzęt sportowy na wakacje'},
            {image: 'https://picsum.photos/seed/moto/300/200', title: 'Akcesoria samochodowe na długie trasy'},
            {image: 'https://picsum.photos/seed/kuchnia/300/200', title: 'Wyposażenie kuchni i AGD'},
        ],
    }
})