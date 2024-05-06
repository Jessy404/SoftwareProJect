import { doc, setDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
async function setUserData() {
    const usersRef = collection(db, 'Decore ');
    const usersData = [
         {
            id: '1',
            name: 'Decorative Plates',
            price: 'EGP 930.00',
            mainImage: 'https://eg-rv.homzmart.net/catalog/product/w/p/wp104_1_1024x1024_.jpg',
            additionalImages: [
                'https://eg-rv.homzmart.net/catalog/product/w/p/wp104_2_1024x1024_.jpg',
                'https://eg-rv.homzmart.net/catalog/product/w/p/wp104_3_1024x1024_.jpg',
            ],
            description: 'Decorative Plates Set - 4 Pieces - Multicolor - DRTV.wp104',
            rating: 5,
        },
        {
            id: '2',
            name: 'ROO.ART.W.AW073 Towel Holder',
            price: 'EGP 1,119.00',
            mainImage: 'https://i.etsystatic.com/18424646/r/il/e44634/5902110444/il_794xN.5902110444_sfuy.jpg',
            additionalImages: [
                'https://i.etsystatic.com/18424646/r/il/aba704/5902094224/il_794xN.5902094224_hf57.jpg',
                'https://i.etsystatic.com/18424646/r/il/54981c/5950174203/il_794xN.5950174203_lgrq.jpg',
            ],
    
            description: 'ROO.ART.W.AW073 Towel Holder - Brown - 28 x 15 x 60 cm',
            rating: 5,
        },
         {
            id: '3',
            name: 'FEKHM.FKH0033 Wall Accessory',
            price: 'EGP 695.00',
            mainImage: 'https://eg-rv.homzmart.net/catalog/product/f/k/fkh0033-en.jpg',
            additionalImages: [
                'https://eg-rv.homzmart.net/catalog/product/f/k/fkh0033-en.jpg',
                
            ],
            description: 'FEKHM.FKH0033 Wall Accessory 60x65 cm - Beige',
            rating: 4,
        },
         {
            id: '4',
            name: 'UNI.GAL.008 Wall accessory ',
            price: 'EGP 725.00',
            mainImage: 'https://eg-rv.homzmart.net/catalog/product/0/0/008_resized_pdp_1.jpg',
            additionalImages: [
                'https://eg-rv.homzmart.net/catalog/product/0/0/008_modified_transparent_1_1.jpg',
                'https://eg-rv.homzmart.net/catalog/product/0/0/008_modified_whitebg_1_1.png',
            ],
            description: 'UNI.GAL.008 Wall accessory - gold and light blue',
            rating: 5,
        },
         {
            id: '5',
            name: 'AHvn1 Wall Accessory handmade',
            price: 'EGP 637.00',
            mainImage: 'https://eg-rv.homzmart.net/catalog/product/v/n/vn_01.jpg',
            additionalImages: [
                'https://eg-rv.homzmart.net/catalog/product/v/n/vn_01_wh.jpg',
                'https://eg-rv.homzmart.net/catalog/product/v/n/vn_01_scale.jpg',
            ],
            description: 'AHvn1 Wall Accessory 40x40x40x4 cm - Multi Color',
            rating: 3,
        },
        {
            id: '6',
            name: 'WA.M.576-4 Canvas wall frame',
            price: 'EGP 988.00',
            mainImage: 'https://eg-rv.homzmart.net/catalog/product/5/7/576_2.jpg',
            additionalImages: [
                'https://eg-rv.homzmart.net/catalog/product/8/0/80_resized_copy__2.png',
                'https://eg-rv.homzmart.net/catalog/product/5/7/576-4.jpg',
            ],
            description: 'WA.M.576-4 Canvas wall frame, 120×80 cm - Multi ',
            rating: 5,
        },
         {
            id: '7',
            name: 'Plant pot 140 x 35 x 35 cm - gold and white - ANT.st11',
            price: 'EGP 1,817.00',
            mainImage: 'https://eg-rv.homzmart.net/catalog/product/a/n/ant.st111.jpg',
            additionalImages: [
                'https://eg-rv.homzmart.net/catalog/product/a/n/ant.st111.jpg',
               
            ],
            description: 'Plant pot 140 x 35 x 35 cm - gold and white - ANT.st11',
            rating: 4,
        },
         {
            id: '8',
            name: 'AHCL31S Wall Clock 40x40x40 cm - Multi Color',
            price: 'EGP 530.00',
            mainImage: 'https://eg-rv.homzmart.net/catalog/product/3/1/31_copy_2__2.jpg',
            additionalImages: [
                'https://eg-rv.homzmart.net/catalog/product/c/l/cl_31s-0-.jpg',
                'https://eg-rv.homzmart.net/catalog/product/c/l/cl_31l.jpg',
            ],
            description: 'AHCL31S Wall Clock 40x40x40 cm - Multi Color',
            rating: 5,
        },
    ];
    for (const Decore of usersData) {
        await setDoc(doc(usersRef, Decore.id), {
          name: Decore.name,
          price: Product.price,
          description: Product.description,
          image: Product.mainImage,
          additionalImages: Product.additionalImages,
        });
      }
}
setUserData();