export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  rating: number;
  image: string;
};

export const products: Product[] = [
  {
    id: "velvet-rose",
    name: "Velvet Rose",
    brand: "Maison Aurelia",
    price: 118,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80",
    description:
      "A plush floral fragrance with Turkish rose, soft peony, pink pepper, and a clean amber base. Elegant enough for evening, gentle enough for everyday wear.",
  },
  {
    id: "noir-oud",
    name: "Noir Oud",
    brand: "Atelier Vesper",
    price: 156,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80",
    description:
      "Deep oud, smoked vanilla, saffron, and polished woods create a warm signature scent with excellent longevity and a refined drydown.",
  },
  {
    id: "citrus-mist",
    name: "Citrus Mist",
    brand: "Clair & Co.",
    price: 86,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=80",
    description:
      "Sparkling bergamot and mandarin open into neroli, white tea, and sheer musk. Bright, breezy, and crisp without feeling sharp.",
  },
  {
    id: "sandalwood-silk",
    name: "Sandalwood Silk",
    brand: "Eden Archive",
    price: 132,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?auto=format&fit=crop&w=900&q=80",
    description:
      "Creamy sandalwood, iris, tonka, and soft suede settle close to the skin for a smooth, understated scent with quiet luxury appeal.",
  },
  {
    id: "jasmine-dawn",
    name: "Jasmine Dawn",
    brand: "Lune Botanique",
    price: 104,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1608528577891-eb055944f2e2?auto=format&fit=crop&w=900&q=80",
    description:
      "Fresh jasmine petals, pear blossom, green leaves, and creamy musk make a luminous floral that feels polished, modern, and effortless.",
  },
  {
    id: "amber-rain",
    name: "Amber Rain",
    brand: "Solenne",
    price: 142,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1585386959984-a41552231658?auto=format&fit=crop&w=900&q=80",
    description:
      "Golden amber, mineral rain notes, labdanum, and cashmere woods blend into a soft, atmospheric fragrance with a memorable trail.",
  },
];
