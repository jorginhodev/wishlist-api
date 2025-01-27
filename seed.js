import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany({});

  const products = [
    {
      code: "D22-2077-006",
      name: "Tênis Nike Revolution 7 Feminino - Preto+Branco",
      available: true,
      visible: true,
      details: JSON.stringify({
        name: "Tênis Nike Revolution 7 Feminino - Preto+Branco",
        description: "Carregamos o Revolution 7 com o tipo de amortecimento e suporte macio que pode mudar o seu mundo de corrida."
      }),
      fullPriceInCents: 39999,
      salePriceInCents: 30399,
      rating: 4.5,
      image: "https://static.netshoes.com.br/produtos/tenis-nike-revolution-7-feminino/26/JD8-6363-026/JD8-6363-026_zoom1.jpg?ts=1708096757?ims=544x",
      stockAvailable: true
    },
    {
      code: "NQQ-4378-028",
      name: "Bola de Futebol Society Penalty 8 X - Branco+Verde Limão",
      available: true,
      visible: true,
      details: JSON.stringify({
        name: "Bola de Futebol Society Penalty 8 X - Branco+Verde Limão",
        description: "Junte os amigos e desenvolva suas melhores jogadas com a Bola de Futebol Society da Penalty."
      }),
      fullPriceInCents: 22000,
      salePriceInCents: 17499,
      rating: 4,
      image: "https://static.netshoes.com.br/produtos/bola-de-futebol-society-penalty-8-x/78/D23-5694-078/D23-5694-078_zoom1.jpg?ts=1695700132?ims=544x",
      stockAvailable: true
    },
    {
      code: "3R2-0087-240-02",
      name: "Kit 4 Camiseta Masculina Segunda Pele Proteção Solar UV Térmica Praia Manga Longa Blusa Camisa - Cinza+Azul",
      available: false,
      visible: true,
      details: JSON.stringify({
        name: "Kit 4 Camiseta Masculina Segunda Pele",
        description: "As camisetas proteção UV masculina da Dellas, são produzidas em 100% Poliéster."
      }),
      fullPriceInCents: 20000,
      salePriceInCents: 8690,
      rating: 3.5,
      image: "https://static.netshoes.com.br/produtos/kit-4-camiseta-masculina-segunda-pele-protecao-solar-uv-termica-praia-manga-longa-blusa-camisa/40/3R2-0087-240/3R2-0087-240_zoom1.jpg?ts=1690411979?ims=544x",
      stockAvailable: false
    },
    {
      code: "140-1040-008-01",
      name: "Mesa de Ping Pong / Tênis de Mesa Klopf - 12 mm - Azul",
      available: true,
      visible: true,
      details: JSON.stringify({
        name: "Mesa de Ping Pong Klopf - 12 mm",
        description: "A Mesa de Tennis de Mesa Klopf - 12 mm é uma ótima opção para quem quer levar a sério o esporte."
      }),
      fullPriceInCents: 119900,
      salePriceInCents: 98990,
      rating: 3,
      image: "https://static.netshoes.com.br/produtos/mesa-de-ping-pong-tenis-de-mesa-klopf-12-mm/08/140-1040-008/140-1040-008_zoom1.jpg?ts=1712923154?ims=544x",
      stockAvailable: true
    },
    {
      code: "FB9-4074-070",
      name: "Chuteira Society Adidas Deportivo II Unissex - Exclusiva - Preto",
      available: true,
      visible: true,
      details: JSON.stringify({
        name: "Chuteira Society Adidas Deportivo II Unissex - Exclusiva - Preto",
        description: "Domine o jogo com habilidade nos pés com a Chuteira Society Adidas Deportivo II."
      }),
      fullPriceInCents: 44999,
      salePriceInCents: 18999,
      rating: 4.5,
      image: "https://static.netshoes.com.br/produtos/chuteira-society-adidas-deportivo-ii-unissex-exclusiva/70/FB9-4074-070/FB9-4074-070_zoom1.jpg?ts=1710336224?ims=544x",
      stockAvailable: true
    },
    {
      code: "BKB-0035-014-60",
      name: "Kit 3x Colágeno Tipo 2 + Vitaminas Joelho E Articulação 60 Capsulas Sabor Sem Sabor - Branco",
      available: true,
      visible: true,
      details: JSON.stringify({
        name: "Kit 3x Colágeno Tipo 2 + Vitaminas",
        description: "Colágeno da Natural Foods! O Colágeno é uma proteína fundamental para o nosso organismo."
      }),
      fullPriceInCents: 12582,
      salePriceInCents: 10190,
      rating: 3,
      image: "https://static.netshoes.com.br/produtos/kit-3x-colageno-tipo-2-vitaminas-joelho-e-articulacao-60-capsulas-sabor-sem-sabor/14/BKB-0035-014/BKB-0035-014_zoom1.jpg?ts=1713881543?ims=544x",
      stockAvailable: true
    },
    {
      code: "FDT-6437-004-38",
      name: "Sandália crocs classic mega crush clog bone - Bege",
      available: true,
      visible: true,
      details: JSON.stringify({
        name: "Sandália crocs classic mega crush clog bone - Bege",
        description: "O classic clog recebe uma reformulação seriamente atraente."
      }),
      fullPriceInCents: 44900,
      salePriceInCents: 40410,
      rating: 4,
      image: "https://static.netshoes.com.br/produtos/sandalia-crocs-classic-mega-crush-clog-bone/04/FDT-6437-004/FDT-6437-004_zoom1.jpg?ts=1716301112?ims=544x",
      stockAvailable: true
    },
    {
      code: "F83-5256-006-01",
      name: "Boné New Era 9Forty New York Aba Curva Preto - Preto",
      available: true,
      visible: true,
      details: JSON.stringify({
        name: "Boné New Era 9Forty New York",
        description: "A New Era foi fundada em 1920 nos Estados Unidos, é especializada em bonés."
      }),
      fullPriceInCents: 22990,
      salePriceInCents: 15190,
      rating: 5,
      image: "https://static.netshoes.com.br/produtos/bone-new-era-9forty-new-york-aba-curva-preto/06/F83-5256-006/F83-5256-006_zoom1.jpg?ts=1694533028?ims=544x",
      stockAvailable: true
    }
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log("Produtos adicionados com sucesso!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
