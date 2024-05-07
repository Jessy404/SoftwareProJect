import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

async function setUserData() {
    const usersRef = collection(db, "accessories");
    const usersData = [

        {
            id: '1',
            name: 'TEXTURED DROP EARRINGS',
            price: 'EGP 220.00',
            mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw77c7e0a6/images/large/03_30105460021_2.jpg?sw=663&sh=848&sm=cut',
            additionalImages: [
                'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw6dffdebf/images/large/01_30105460021_1.jpg?sw=663&sh=848&sm=cut',
                'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwf43f6b13/images/large/05_30105460021_5.jpg?sw=663&sh=848&sm=cut',
            ],
            description: 'Beautiful textured drop earrings perfect for any occasion.',
        },
        {
            id: '2',
            name: 'MATTE OVAL EARRINGS',
            price: 'EGP 185.00',
            mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw6c9d4ae9/images/large/02_30103170008_2.jpg?sw=663&sh=848&sm=cut',
            additionalImages: [
                'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw3d328a7c/images/large/01_30103170008_1.jpg?sw=663&sh=848&sm=cut',
                'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwea97f116/images/large/05_30103170008_5.jpg?sw=663&sh=848&sm=cut',
            ],
            description: 'MATTE OVAL EARRINGS',
        },
        {
            id: '3',
            name: 'INLAY HOOP EARRINGS',
            price: 'EGP 230.00',
            mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwf0e21880/images/large/03_30105430004_2.jpg?sw=663&sh=848&sm=cut',
            additionalImages: [
                'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwccc104e1/images/large/05_30105430004_5.jpg?sw=1920&sh=2460&sm=cut',
                'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw1b393395/images/large/01_30105430004_1.jpg?sw=663&sh=848&sm=cut',
            ],
            description: 'MOTHER OF PEARL INLAY HOOP EARRINGS',
        },
        {
            id: '4',
            name: '2-PACK SEED BEAD RINGS',
            price: 'EGP 320.00',
            mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwf0e21880/images/large/03_30105430004_2.jpg?sw=663&sh=848&sm=cut',
            additionalImages: [
                'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwccc104e1/images/large/05_30105430004_5.jpg?sw=1920&sh=2460&sm=cut',
                'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw1b393395/images/large/01_30105430004_1.jpg?sw=663&sh=848&sm=cut',
            ],
            description: 'MOTHER OF PEARL INLAY HOOP EARRINGS',

        },
        {
            id: '5',
            name: '3-PACK MOLTEN STUDS',
            price: 'EGP 230.00',
            mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw59e292ee/images/large/02_30105540008_2.jpg?sw=663&sh=848&sm=cut',
            additionalImages: [
                'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwed021d96/images/large/01_30105540008_1.jpg?sw=663&sh=848&sm=cut',
                'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw73a593fb/images/large/05_30105540008_5.jpg?sw=663&sh=848&sm=cut',
            ],
            description: 'Set in molten gold-tone metal, these studs display twinkly, faceted stones in oceanic hues. Just add sunshineNon-refundable.',
        },
        {
            id: '6',
            name: 'MOLTEN DROP EARRINGS',
            price: 'EGP 185.00',
            mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwc75119c8/images/large/01_30108050021_1.jpg?sw=663&sh=848&sm=cut',
            additionalImages: [
                'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw85570527/images/large/03_30108050021_2.jpg?sw=663&sh=848&sm=cut',
                'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dwb74475df/images/large/05_30108050021_5.jpg?sw=663&sh=848&sm=cut',
            ],
            description: 'Mesmerising molten cascades from these earrings, designed in gold-tone metal. Tuck your hair behind your ears to show them off Non-refundable',
        },
        {
            id: '7',
            name: 'LEAF DROP ANKLET',
            price: 'EGP 140.00',
            mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw403ddfec/images/large/01_30100360008_1.jpg?sw=663&sh=848&sm=cut',
            additionalImages: [
                'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw8df0cebd/images/large/03_30100360008_2.jpg?sw=663&sh=848&sm=cut',
                'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw53e481d7/images/large/05_30100360008_5.jpg?sw=663&sh=848&sm=cut',
            ],

            description: ' Which way to the beach? Stationed with leafy charms green beads, this anklet is designed in shiny gold-tone metal.',
        },
        {
            id: '8',
            name: 'RESIN INLAY DROP EARRINGS',
            price: 'EGP 250.00',
            mainImage: 'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw56ecb162/images/large/01_30105410008_1.jpg?sw=663&sh=848&sm=cut',
            additionalImages: [
                'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw5eabf6c1/images/large/03_30105410008_2.jpg?sw=663&sh=848&sm=cut',
                'https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw3051c037/images/large/05_30105410008_5.jpg?sw=663&sh=848&sm=cut',
            ],
            description: 'Keep it contemporary with these resin hoop earrings. The sage green hoop charm boasts a gold-tone inlay, hanging from a simple molten stud.Non-refundable.',
        },

    ];

    for (const accessories of usersData) {
        await setDoc(doc(usersRef, accessories.id.toString()), {
            name: accessories.name,
            price: accessories.price,
            description: accessories.description,
            image: accessories.mainImage,
            additionalImage: accessories.additionalImages
        });
    }
}

setUserData();