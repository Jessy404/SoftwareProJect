import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

async function setProductrData() {
    const usersRef = collection(db, "categorythree");
    const usersData = [

        {
            id: '1',
            title: 'TEXTURED DROP EARRINGS',
            price: 'EGP 220.00',
            image1:'https://i.etsystatic.com/20641892/r/il/d5aa47/3742912928/il_794xN.3742912928_mq3y.jpg',
            image2:'https://i.etsystatic.com/11706858/r/il/b03a43/3505985437/il_794xN.3505985437_rvqd.jpg',
            image3:'https://i.etsystatic.com/11706858/r/il/f4e297/3505981137/il_794xN.3505981137_9qv6.jpg',
            image4:'https://i.etsystatic.com/11706858/r/il/213d23/3458315676/il_794xN.3458315676_kqhx.jpg',

            
            description: 'Beautiful textured drop earrings perfect for any occasion.',
        },
        {
            id: '2',
            title: 'MATTE OVAL EARRINGS',
            price: 'EGP 185.00',
            image1:'https://i.etsystatic.com/27231545/c/1785/1785/137/160/il/031139/4140718095/il_600x600.4140718095_mc7l.jpg',
            image2:'https://i.etsystatic.com/21615986/r/il/847fe2/4296926046/il_794xN.4296926046_q4xr.jpg',
            image3:'https://i.etsystatic.com/21615986/r/il/ec05dd/4344314267/il_794xN.4344314267_girf.jpg',
            image4:'https://i.etsystatic.com/21615986/r/il/c974f9/4296926318/il_794xN.4296926318_n7l4.jpg',

            description: 'MATTE OVAL EARRINGS',
        },
        {
            id: '3',
            title: 'INLAY HOOP EARRINGS',
            price: 'EGP 230.00',
            image1:'https://i.etsystatic.com/20641892/r/il/383218/3834125867/il_300x300.3834125867_saxp.jpg',
            image2:'https://i.etsystatic.com/18218740/r/il/3a6f9b/4940932543/il_794xN.4940932543_qmne.jpg',
            image3:'https://i.etsystatic.com/18218740/r/il/bbf63b/4940932597/il_794xN.4940932597_gvv0.jpg',
            image4:'https://i.etsystatic.com/18218740/r/il/51d370/4892667268/il_794xN.4892667268_2blt.jpg',

            description: 'MOTHER OF PEARL INLAY HOOP EARRINGS',
        },
        {
            id: '4',
            title: '2-PACK SEED BEAD RINGS',
            price: 'EGP 320.00',
            image1:'https://i.etsystatic.com/25432059/r/il/8cb94d/3942262942/il_300x300.3942262942_oivr.jpg',
            image2:'https://i.etsystatic.com/36391007/r/il/78e75a/5814565660/il_794xN.5814565660_1liq.jpg',
            image3:'https://i.etsystatic.com/36391007/r/il/609ddf/5862647191/il_794xN.5862647191_jmuj.jpg',
            image4:'https://i.etsystatic.com/36391007/r/il/023b1b/5862646963/il_794xN.5862646963_dlar.jpg',
            description: 'MOTHER OF PEARL INLAY HOOP EARRINGS',

        },
        {
            id: '5',
            title: '3-PACK MOLTEN STUDS',
            price: 'EGP 230.00',
            image1:'https://i.etsystatic.com/39975005/r/il/f9ca8b/4978063575/il_300x300.4978063575_3vix.jpg',
            image2:'https://i.etsystatic.com/37700854/r/il/948f49/4172186860/il_794xN.4172186860_2uf1.jpg',
            image3:'https://i.etsystatic.com/37700854/r/il/ba2195/4377711507/il_794xN.4377711507_oirh.jpg',
            image4:'https://i.etsystatic.com/37700854/r/il/e3b9d6/4219627059/il_794xN.4219627059_t47c.jpg',
            description: 'Set in molten gold-tone metal, these studs display twinkly, faceted stones in oceanic hues. Just add sunshineNon-refundable.',
        },
        {
            id: '6',
            title: 'MOLTEN DROP EARRINGS',
            price: 'EGP 185.00',
            image1:'https://i.etsystatic.com/20641892/r/il/d5aa47/3742912928/il_794xN.3742912928_mq3y.jpg',
            image2:'https://i.etsystatic.com/5358616/r/il/61c3fe/4333846104/il_794xN.4333846104_ejdj.jpg',
            image3:'https://i.etsystatic.com/5358616/r/il/a6a187/4333846150/il_794xN.4333846150_lc87.jpg',
            image4:'https://i.etsystatic.com/5358616/r/il/4aa126/4381241391/il_794xN.4381241391_3lgg.jpg',
            description: 'Mesmerising molten cascades from these earrings, designed in gold-tone metal. Tuck your hair behind your ears to show them off Non-refundable',
        },
        {
            id: '7',
            title: 'LEAF DROP ANKLET',
            price: 'EGP 140.00',
            image1:'https://i.etsystatic.com/20641892/r/il/383218/3834125867/il_300x300.3834125867_saxp.jpg',
            image2:'https://i.etsystatic.com/8878834/r/il/f37e12/1879922165/il_794xN.1879922165_tug1.jpg',
            image3:'https://i.etsystatic.com/8878834/r/il/e9ba4a/1832450850/il_794xN.1832450850_4bxo.jpg',
            image4:'https://i.etsystatic.com/8878834/r/il/8bc4eb/1879922411/il_794xN.1879922411_pvpk.jpg',

            description: ' Which way to the beach? Stationed with leafy charms green beads, this anklet is designed in shiny gold-tone metal.',
        },
        {
            id: '8',
            title: 'RESIN INLAY DROP EARRINGS',
            price: 'EGP 250.00',
            image1:'https://i.etsystatic.com/22477312/r/il/3451fd/4787673206/il_300x300.4787673206_hq35.jpg',
            image2:'https://i.etsystatic.com/37780115/r/il/55f5bb/5716150024/il_794xN.5716150024_7u8c.jpg',
            image3:'https://i.etsystatic.com/37780115/r/il/05e1a5/5716149812/il_794xN.5716149812_e5u1.jpg',
            image4:'https://i.etsystatic.com/37780115/r/il/091ba2/5716150070/il_794xN.5716150070_4ale.jpg',

            description: 'Keep it contemporary with these resin hoop earrings. The sage green hoop charm boasts a gold-tone inlay, hanging from a simple molten stud.Non-refundable.',
        },

    ];

    for (const categoryone of usersData) {
        await setDoc(doc(usersRef, categoryone.id.toString()), {
            title: categoryone.title,
            price: categoryone.price,
            description: categoryone.description,
            image1: categoryone.image1,
            image2: categoryone.image2
        });
    }
}

setProductrData();