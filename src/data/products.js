const products = [
     {
          id: 1,
          title: "Helado de Vainilla",
          description: "Helado cremoso con un delicioso sabor a vainilla natural.",
          code: "VAN-001",
          price: 150,
          status: true,
          stock: 30,
          category: "Clasico",
          image: "https://cdn.pixabay.com/photo/2023/02/08/06/33/fashion-7775827_1280.jpg",
     },
     {
          id: 2,
          title: "Helado de Chocolate",
          description: "Un intenso helado de chocolate con trozos de cacao.",
          code: "CHO-002",
          price: 160,
          status: true,
          stock: 20,
          category: "Clasico",
          image: "https://cdn.pixabay.com/photo/2023/02/08/06/33/fashion-7775827_1280.jpg"
     },
     {
          id: 3,
          title: "Helado de Fresa",
          description: "Helado refrescante con fresas frescas y naturales.",
          code: "FRE-003",
          price: 145,
          status: true,
          stock: 50,
          category: "Frutal",
          image: "https://www.publicdomainpictures.net/pictures/30000/velka/strawberry-ice-cream-1461304150Z3N.jpg"
     },
     {
          id: 4,
          title: "Helado de Menta con Chocolate",
          description: "Helado de menta con trozos de chocolate oscuro.",
          code: "MEN-004",
          price: 170,
          status: false,
          stock: 0,
          category: "Especial",
          image: "https://www.publicdomainpictures.net/pictures/30000/velka/mint-chocolate-ice-cream-1461304539-pp7.jpg"
     },
     {
          id: 5,
          title: "Helado de Coco",
          description: "Un helado suave y cremoso con un toque de coco rallado.",
          code: "COC-005",
          price: 180,
          status: true,
          stock: 15,
          category: "Tropical",
          image: "https://www.publicdomainpictures.net/pictures/30000/velka/coconut-ice-cream-1461304938Bzi.jpg"
     },
     {
          id: 6,
          title: "Helado de Café",
          description: "Helado con un sabor intenso a café colombiano.",
          code: "CAF-006",
          price: 165,
          status: true,
          stock: 25,
          category: "Especial",
          image: "https://www.publicdomainpictures.net/pictures/40000/velka/coffee-ice-cream-1461305229z0B.jpg"
     },
     {
          id: 7,
          title: "Helado de Limón",
          description: "Helado refrescante con un sabor cítrico a limón.",
          code: "LIM-007",
          price: 140,
          status: true,
          stock: 40,
          category: "Frutal",
          image: "https://www.publicdomainpictures.net/pictures/30000/velka/lemon-ice-cream-1461305567cTZ.jpg"
     },
     {
          id: 8,
          title: "Helado de Dulce de Leche",
          description: "Delicioso helado con un sabor dulce y cremoso a leche caramelizada.",
          code: "DUL-008",
          price: 175,
          status: true,
          stock: 12,
          category: "Clasico",
          image: "https://www.publicdomainpictures.net/pictures/40000/velka/caramel-ice-cream-1461304654-R1D.jpg"
     },
     {
          id: 9,
          title: "Helado de Piña Colada",
          description: "Helado tropical con sabor a piña y un toque de coco.",
          code: "PIN-009",
          price: 190,
          status: false,
          stock: 0,
          category: "Tropical",
          image: "https://www.publicdomainpictures.net/pictures/40000/velka/pineapple-ice-cream-1461304727UNn.jpg"
     },
     {
          id: 10,
          title: "Helado de Mango",
          description: "Helado frutal con el fresco sabor de mango natural.",
          code: "MAN-010",
          price: 160,
          status: true,
          stock: 45,
          category: "Frutal",
          image: "https://www.publicdomainpictures.net/pictures/40000/velka/mango-ice-cream-1461304995w7D.jpg"
     },
     {
          id: 11,
          title: "Helado de Uva",
          description: "Helado refrescante con un sabor dulce y natural a uva.",
          code: "UVA-011",
          price: 155,
          status: true,
          stock: 35,
          category: "Frutal",
          image: "https://www.publicdomainpictures.net/pictures/40000/velka/grape-ice-cream-1461305402Mz5.jpg"
     },
     {
          id: 12,
          title: "Helado de Crema de Cacahuate",
          description: "Helado cremoso con un toque de cacahuate tostado.",
          code: "CAC-012",
          price: 180,
          status: true,
          stock: 25,
          category: "Especial",
          image: "https://www.publicdomainpictures.net/pictures/30000/velka/peanut-butter-ice-cream-1461304671of2.jpg"
     },
     {
          id: 13,
          title: "Helado de Frambuesa",
          description: "Helado frutal con un intenso sabor a frambuesas frescas.",
          code: "FRA-013",
          price: 170,
          status: true,
          stock: 28,
          category: "Frutal",
          image: "https://www.publicdomainpictures.net/pictures/30000/velka/raspberry-ice-cream-1461304771wpx.jpg"
     },
     {
          id: 14,
          title: "Helado de Maracuyá",
          description: "Helado tropical con el delicioso sabor ácido de la maracuyá.",
          code: "MAR-014",
          price: 185,
          status: true,
          stock: 22,
          category: "Tropical",
          image: "https://www.publicdomainpictures.net/pictures/30000/velka/passionfruit-ice-cream-1461304424tob.jpg"
     },
     {
          id: 15,
          title: "Helado de Chocolate Blanco",
          description: "Helado suave con un dulce sabor a chocolate blanco.",
          code: "CHB-015",
          price: 190,
          status: true,
          stock: 40,
          category: "Clasico",
          image: "https://www.publicdomainpictures.net/pictures/40000/velka/white-chocolate-ice-cream-1461304851hrN.jpg"
     },
     {
          id: 16,
          title: "Helado de Pistacho",
          description: "Helado cremoso con un toque suave de pistacho.",
          code: "PIS-016",
          price: 200,
          status: true,
          stock: 18,
          category: "Especial",
          image: "https://www.publicdomainpictures.net/pictures/30000/velka/pistachio-ice-cream-1461304303ll5.jpg"
     },
     {
          id: 17,
          title: "Helado de Acelga",
          description: "Helado saludable con el sabor único de acelga.",
          code: "ACE-017",
          price: 175,
          status: true,
          stock: 10,
          category: "Especial",
          image: "https://www.publicdomainpictures.net/pictures/40000/velka/green-ice-cream-1461305168ho4.jpg"
     },
     {
          id: 18,
          title: "Helado de Lichi",
          description: "Helado exótico con el delicado sabor del lichi.",
          code: "LIC-018",
          price: 185,
          status: true,
          stock: 14,
          category: "Tropical",
          image: "https://www.publicdomainpictures.net/pictures/30000/velka/lychee-ice-cream-1461305077gxk.jpg"
     },
     {
          id: 19,
          title: "Helado de Frutos Rojos",
          description: "Combinación de frambuesa, fresa y arándano en un delicioso helado.",
          code: "FRR-019",
          price: 165,
          status: true,
          stock: 30,
          category: "Frutal",
          image: "https://www.publicdomainpictures.net/pictures/40000/velka/red-fruit-ice-cream-1461304691ADp.jpg"
     },
     {
          id: 20,
          title: "Helado de Caramelo Salado",
          description: "Helado dulce con un toque salado y caramelo suave.",
          code: "CAS-020",
          price: 210,
          status: true,
          stock: 17,
          category: "Especial",
          image: "https://www.publicdomainpictures.net/pictures/40000/velka/salted-caramel-ice-cream-1461305004v3m.jpg"
     }
];

export default products;