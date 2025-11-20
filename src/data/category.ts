export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  review: number;
  detailedDescription: string;
  sale: string;
}

export const menProducts: Product[] = [
  {
    id: 1,
    name: "Herbal Shampoo",
    description: "Gentle on hair, strong on care.",
    price: 299,
    review: 4.2,
    detailedDescription: "Formulated with herbal extracts, this shampoo strengthens hair from root to tip and promotes healthy scalp.",
    sale: "40% OFF",
  },
  {
    id: 2,
    name: "Hair Oil",
    description: "Strengthens hair and reduces breakage.",
    price: 299,
    review: 4.4,
    detailedDescription: "Nourishing oil with essential vitamins to promote hair growth and shine.",
    sale: "25% OFF",
  },
  {
    id: 3,
    name: "Shampoo & Conditioner Combo",
    description: "Complete hair care solution.",
    price: 699,
    review: 4.6,
    detailedDescription: "Gentle cleansing shampoo and nourishing conditioner for healthy, smooth hair.",
    sale: "50% OFF",
  },
  {
    id: 4,
    name: "Hair Serum",
    description: "Shiny and frizz-free hair.",
    price: 499,
    review: 4.6,
    detailedDescription: "Lightweight serum that smooths hair and protects from humidity.",
    sale: "50% OFF",
  },
  {
    id: 5,
    name: "Hand Sanitizer",
    description: "Keeps your hands clean and germ-free.",
    price: 149,
    review: 4.2,
    detailedDescription: "Quick-dry sanitizer with moisturizing properties to protect and clean hands.",
    sale: "20% OFF",
  },
  {
    id: 6,
    name: "Luxury Watch",
    description: "Elegant timepiece for men.",
    price: 2999,
    review: 4.5,
    detailedDescription: "Stylish and durable watch suitable for daily wear and formal events.",
    sale: "30% OFF",
  },
];

export const womenProducts: Product[] = [
  {
    id: 1,
    name: "Ultra Moisturizing Face Cream",
    description: "Hydrates and softens your skin instantly.",
    price: 499,
    review: 4.5,
    detailedDescription: "This face cream is enriched with natural ingredients that deeply hydrate and nourish your skin, leaving it soft and glowing.",
    sale: "50% OFF",
  },
  {
    id: 2,
    name: "Vitamin C Serum",
    description: "Brightens skin and reduces dark spots.",
    price: 699,
    review: 4.7,
    detailedDescription: "Packed with antioxidants, this serum fights pigmentation, boosts collagen, and gives your skin a radiant glow.",
    sale: "30% OFF",
  },
  {
    id: 3,
    name: "Organic Lip Balm",
    description: "Soft and nourishing lips.",
    price: 149,
    review: 4.4,
    detailedDescription: "Made with 100% organic ingredients to moisturize, protect, and give your lips a natural shine.",
    sale: "20% OFF",
  },
  {
    id: 4,
    name: "Luxury Perfume",
    description: "A fragrance that lasts all day.",
    price: 1299,
    review: 4.6,
    detailedDescription: "This perfume combines floral and woody notes to create a long-lasting, captivating fragrance.",
    sale: "50% OFF",
  },
  {
    id: 5,
    name: "Matte Lipstick Set",
    description: "Long-lasting, vibrant colors.",
    price: 799,
    review: 4.3,
    detailedDescription: "Set of 5 matte lipsticks with rich pigments, smooth texture, and long-lasting wear.",
    sale: "35% OFF",
  },
  {
    id: 6,
    name: "Exfoliating Face Scrub",
    description: "Removes dead skin gently.",
    price: 399,
    review: 4.2,
    detailedDescription: "With natural exfoliants, this scrub cleanses deeply, smooths skin, and improves texture.",
    sale: "25% OFF",
  },
];

export const kidsProducts: Product[] = [
  {
    id: 1,
    name: "Kids Shampoo",
    description: "Gentle shampoo for kids.",
    price: 199,
    review: 4.3,
    detailedDescription: "Mild formula for children's hair, keeping it soft and manageable.",
    sale: "20% OFF",
  },
  {
    id: 2,
    name: "Kids Body Lotion",
    description: "Softens and moisturizes kids' skin.",
    price: 249,
    review: 4.4,
    detailedDescription: "Safe and gentle lotion for kids' delicate skin.",
    sale: "25% OFF",
  },
  {
    id: 3,
    name: "Kids Hair Comb Set",
    description: "Colorful and safe combs.",
    price: 149,
    review: 4.2,
    detailedDescription: "Set of 3 combs designed for children's hair, safe and fun.",
    sale: "15% OFF",
  },
  {
    id: 4,
    name: "Kids Perfume",
    description: "Mild fragrance for kids.",
    price: 199,
    review: 4.3,
    detailedDescription: "Light and playful fragrance perfect for children.",
    sale: "20% OFF",
  },
  {
    id: 5,
    name: "Kids Backpack",
    description: "Cute and durable backpack.",
    price: 799,
    review: 4.5,
    detailedDescription: "Colorful backpack for school and outings.",
    sale: "30% OFF",
  },
  {
    id: 6,
    name: "Kids Sneakers",
    description: "Comfortable shoes for kids.",
    price: 699,
    review: 4.4,
    detailedDescription: "Lightweight and safe sneakers suitable for everyday use.",
    sale: "25% OFF",
  },
];
