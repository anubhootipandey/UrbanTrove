export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  review: number;
  detailedDescription: string;
  sale: string;
  category: string;
}

const products: Product[] = [
  {
    "id": 1,
    "name": "Ultra Moisturizing Face Cream",
    "description": "Hydrates and softens your skin instantly.",
    "price": 499,
    "review": 4.5,
    "detailedDescription": "This face cream is enriched with natural ingredients that deeply hydrate and nourish your skin, leaving it soft and glowing.",
    "sale": "50% OFF",
    "category": "women"
  },
  {
    "id": 2,
    "name": "Herbal Shampoo",
    "description": "Gentle on hair, strong on care.",
    "price": 299,
    "review": 4.2,
    "detailedDescription": "Formulated with herbal extracts, this shampoo strengthens hair from root to tip and promotes healthy scalp.",
    "sale": "40% OFF",
    "category": "men"
  },
  {
    "id": 3,
    "name": "Vitamin C Serum",
    "description": "Brightens skin and reduces dark spots.",
    "price": 699,
    "review": 4.7,
    "detailedDescription": "Packed with antioxidants, this serum fights pigmentation, boosts collagen, and gives your skin a radiant glow.",
    "sale": "30% OFF",
    "category": "women"
  },
  {
    "id": 4,
    "name": "Organic Lip Balm",
    "description": "Soft and nourishing lips.",
    "price": 149,
    "review": 4.4,
    "detailedDescription": "Made with 100% organic ingredients to moisturize, protect, and give your lips a natural shine.",
    "sale": "20% OFF",
    "category": "women"
  },
  {
    "id": 5,
    "name": "Luxury Perfume",
    "description": "A fragrance that lasts all day.",
    "price": 1299,
    "review": 4.6,
    "detailedDescription": "This perfume combines floral and woody notes to create a long-lasting, captivating fragrance.",
    "sale": "50% OFF",
    "category": "women"
  },
  {
    "id": 6,
    "name": "Matte Lipstick Set",
    "description": "Long-lasting, vibrant colors.",
    "price": 799,
    "review": 4.3,
    "detailedDescription": "Set of 5 matte lipsticks with rich pigments, smooth texture, and long-lasting wear.",
    "sale": "35% OFF",
    "category": "women"
  },
  {
    "id": 7,
    "name": "Exfoliating Face Scrub",
    "description": "Removes dead skin gently.",
    "price": 399,
    "review": 4.2,
    "detailedDescription": "With natural exfoliants, this scrub cleanses deeply, smooths skin, and improves texture.",
    "sale": "25% OFF",
    "category": "women"
  },
  {
    "id": 8,
    "name": "Hydrating Body Lotion",
    "description": "Keeps skin soft all day.",
    "price": 349,
    "review": 4.5,
    "detailedDescription": "Lightweight, non-greasy formula that nourishes and hydrates dry skin.",
    "sale": "30% OFF",
    "category": "women"
  },
  {
    "id": 9,
    "name": "Anti-Aging Eye Cream",
    "description": "Reduces fine lines and dark circles.",
    "price": 599,
    "review": 4.6,
    "detailedDescription": "Specially formulated eye cream to fight aging, reduce puffiness, and improve elasticity around eyes.",
    "sale": "40% OFF",
    "category": "women"
  },
  {
    "id": 10,
    "name": "Shimmer Highlighter",
    "description": "Adds glow to your skin.",
    "price": 249,
    "review": 4.3,
    "detailedDescription": "Create radiant and luminous skin with this easy-to-apply shimmer highlighter.",
    "sale": "20% OFF",
    "category": "women"
  },
  {
    "id": 11,
    "name": "Sunscreen SPF 50",
    "description": "Protects skin from harmful UV rays.",
    "price": 399,
    "review": 4.5,
    "detailedDescription": "Broad-spectrum sunscreen that prevents sunburn, premature aging, and pigmentation.",
    "sale": "30% OFF",
    "category": "women"
  },
  {
    "id": 12,
    "name": "Hair Oil",
    "description": "Strengthens hair and reduces breakage.",
    "price": 299,
    "review": 4.4,
    "detailedDescription": "Nourishing oil with essential vitamins to promote hair growth and shine.",
    "sale": "25% OFF",
    "category": "men"
  },
  {
    "id": 13,
    "name": "Face Mask Set",
    "description": "Detoxify and refresh your skin.",
    "price": 499,
    "review": 4.2,
    "detailedDescription": "Set of 3 masks for deep cleansing, hydration, and skin brightening.",
    "sale": "35% OFF",
    "category": "women"
  },
  {
    "id": 14,
    "name": "Nail Polish Kit",
    "description": "Vibrant shades for perfect nails.",
    "price": 599,
    "review": 4.3,
    "detailedDescription": "Includes 6 nail polish colors with long-lasting shine and smooth application.",
    "sale": "40% OFF",
    "category": "women"
  },
  {
    "id": 15,
    "name": "Hand Cream",
    "description": "Soft and nourished hands.",
    "price": 199,
    "review": 4.5,
    "detailedDescription": "Moisturizing hand cream that protects and repairs dry hands.",
    "sale": "20% OFF",
    "category": "women"
  },
  {
    "id": 16,
    "name": "Shampoo & Conditioner Combo",
    "description": "Complete hair care solution.",
    "price": 699,
    "review": 4.6,
    "detailedDescription": "Gentle cleansing shampoo and nourishing conditioner for healthy, smooth hair.",
    "sale": "50% OFF",
    "category": "men"
  },
  {
    "id": 17,
    "name": "Body Scrub",
    "description": "Exfoliates and rejuvenates skin.",
    "price": 399,
    "review": 4.4,
    "detailedDescription": "Removes dead skin cells and improves skin texture with natural scrubbing agents.",
    "sale": "30% OFF",
    "category": "women"
  },
  {
    "id": 18,
    "name": "Face Toner",
    "description": "Refreshes and tightens pores.",
    "price": 299,
    "review": 4.2,
    "detailedDescription": "Alcohol-free toner with soothing ingredients for refreshed and balanced skin.",
    "sale": "25% OFF",
    "category": "women"
  },
  {
    "id": 19,
    "name": "Perfume Rollerball",
    "description": "On-the-go fragrance solution.",
    "price": 499,
    "review": 4.5,
    "detailedDescription": "Compact and portable perfume rollerball for a long-lasting fragrance anywhere.",
    "sale": "30% OFF",
    "category": "women"
  },
  {
    "id": 20,
    "name": "Compact Powder",
    "description": "Smooth and matte finish.",
    "price": 349,
    "review": 4.3,
    "detailedDescription": "Lightweight powder that controls shine and evens skin tone for a flawless look.",
    "sale": "20% OFF",
    "category": "women"
  },
  {
    "id": 21,
    "name": "Lip Gloss",
    "description": "Shiny and moisturizing lips.",
    "price": 249,
    "review": 4.2,
    "detailedDescription": "Non-sticky formula gives lips a glossy finish while keeping them hydrated.",
    "sale": "25% OFF",
    "category": "women"
  },
  {
    "id": 22,
    "name": "Makeup Brush Set",
    "description": "All brushes for a perfect look.",
    "price": 799,
    "review": 4.5,
    "detailedDescription": "Set of 10 high-quality brushes suitable for all makeup applications.",
    "sale": "40% OFF",
    "category": "women"
  },
  {
    "id": 23,
    "name": "Body Mist",
    "description": "Light and refreshing fragrance.",
    "price": 299,
    "review": 4.3,
    "detailedDescription": "Keeps you smelling fresh with a light, all-day body mist.",
    "sale": "30% OFF",
    "category": "women"
  },
  {
    "id": 24,
    "name": "Eyeliner Pen",
    "description": "Smooth and precise application.",
    "price": 199,
    "review": 4.4,
    "detailedDescription": "Waterproof and smudge-proof eyeliner for bold and sharp eyes.",
    "sale": "20% OFF",
    "category": "women"
  },
  {
    "id": 25,
    "name": "Face Cleansing Gel",
    "description": "Deep cleans and refreshes skin.",
    "price": 349,
    "review": 4.2,
    "detailedDescription": "Gentle gel cleanser that removes impurities without drying the skin.",
    "sale": "35% OFF",
    "category": "women"
  },
  {
    "id": 26,
    "name": "Body Lotion with SPF",
    "description": "Moisturize and protect skin.",
    "price": 399,
    "review": 4.5,
    "detailedDescription": "Hydrating body lotion with SPF to protect from UV rays while keeping skin soft.",
    "sale": "30% OFF",
    "category": "women"
  },
  {
    "id": 27,
    "name": "Hair Serum",
    "description": "Shiny and frizz-free hair.",
    "price": 499,
    "review": 4.6,
    "detailedDescription": "Lightweight serum that smooths hair and protects from humidity.",
    "sale": "50% OFF",
    "category": "men"
  },
  {
    "id": 28,
    "name": "Face Primer",
    "description": "Smooth base for makeup.",
    "price": 399,
    "review": 4.3,
    "detailedDescription": "Prepares skin for makeup, reduces pores, and ensures longer-lasting application.",
    "sale": "25% OFF",
    "category": "women"
  },
  {
    "id": 29,
    "name": "Eye Shadow Palette",
    "description": "Vibrant shades for every mood.",
    "price": 699,
    "review": 4.5,
    "detailedDescription": "Includes 12 versatile shades with smooth texture and high pigmentation.",
    "sale": "40% OFF",
    "category": "women"
  },
  {
    "id": 30,
    "name": "Hand Sanitizer",
    "description": "Keeps your hands clean and germ-free.",
    "price": 149,
    "review": 4.2,
    "detailedDescription": "Quick-dry sanitizer with moisturizing properties to protect and clean hands.",
    "sale": "20% OFF",
    "category": "men"
  }
]

export default products;