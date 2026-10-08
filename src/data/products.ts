import { Product } from "@/context/CartContext";

// Automatically use the correct image path on localhost and GitHub Pages
const productImage = (filename: string) =>
  `${import.meta.env.BASE_URL}images/${filename}`;

export const products: Product[] = [
  {
    id: "johnywalker red",
    name: "Johnnie Walker Logo T-Shirt",
    price: 349,
    image: productImage("jw-r1.jpg"),
    description: "howcase your appreciation for the iconic Johnnie Walker brand with this classic logo t-shirt. Featuring the recognizable Striding Man emblem and the Johnnie Walker name, this comfortable tee is a subtle nod to a world-renowned spirit.",
    colors: ["#880000"],
    sizes: ["s", "m", "l"],
    additionalImages: [productImage("jw-r2.jpg")],
  },
  {
    id: "Arise-mgrey",
    name: "Arise Soft Printed T-shirt Milange-Grey",
    price: 349,
    image: productImage("arise1.jpg"),
    description: " Embrace a fresh start every day with The Everbloom Tee. Crafted for exceptional comfort and lasting wear, this t-shirt features a subtle yet inspiring Arise graphic. It's a gentle reminder of continuous growth and the beauty of new beginnings. Perfect for adding a touch of positive energy to your everyday style.",
    colors: ["#888888"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: [
      productImage("arise2.jpg"),
      productImage("arise3.jpg"),
    ],
  },
  {
    id: "onepiece black",
    name: "One Piece  Graphic Red T-Shirt",
    price: 349,
    image: productImage("opr1.jpg"),
    description: " Gear up with this eye-catching red t-shirt featuring the classic One Piece Jolly Roger logo. Made for comfort and perfect for expressing your fandom.",
    colors: ["#880000"],
    sizes: ["s", "m", "l"],
    additionalImages: [productImage("opr2.jpg")],
  },
  {
    id: "boozersclub grey",
    name: "Boozersclub Printed Tee",
    price: 349,
    image: productImage("bzg1.jpg"),
    description: "Show off your fun side with this grey t-shirt displaying the unique Boozers Club design. Comfortable and eye-catching.",
    colors: ["#888888"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: [productImage("bzg2.jpg")],
  },
  {
    id: "Beast-mode-blue",
    name: "Beast Mode Navy Blue Printed Tshirt",
    price: 349,
    image: productImage("beastmode-b1.jpg"),
    description: "Step back in time with our Retro Vibes tee. This nostalgic design captures the essence of vintage style with a modern twist. The perfect addition to any casual wardrobe, offering both comfort and character.",
    colors: ["#000080"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: [productImage("beastmode-b2.jpg")],
  },
  {
    id: "malibu white",
    name: "Malibu Beach Vibes T-Shirt",
    price: 349,
    image: productImage("malibu-w1.jpg"),
    description: "Embrace the laid-back vibes with this Malibu graphic t-shirt. Featuring a retro-inspired design with palm trees and a sunset, this tee evokes the sunny and carefree spirit of Malibu.",
    colors: ["#FFFAF0"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: [productImage("arisew2.jpg")],
  },
  {
    id: "gdna black",
    name: "Printed GDNA Tee",
    price: 349,
    image: productImage("g-d-n-a-b1.jpg"),
    description: " Gear up with this eye-catching red t-shirt featuring the classic One Piece Jolly Roger logo. Made for comfort and perfect for expressing your fandom.",
    colors: ["#000000"],
    sizes: ["s", "m", "l"],
    additionalImages: [productImage("g-d-n-a-b2.jpg")],
  },
  {
    id: "boozersclub white graphic tshirt",
    name: "Boozers club Graphic White T-Shirt",
    price: 349,
    image: productImage("bzw1.jpg"),
    description: "Show off your fun side with this white t-shirt displaying the unique Boozers Club design. Comfortable and eye-catching.",
    colors: ["#FFFAF0"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: [productImage("bzw2.jpg")],
  },
  {
    id: "Bombay Supphair Red",
    name: "The Connoisseur's Choice: Bombay Sapphire Graphic Red T-Shirt",
    price: 349,
    image: productImage("bsr1.jpg"),
    description: "Make a statement with our Urban Street tee. Features bold street art-inspired graphics and premium quality cotton fabric. Perfect for those who want to stand out with an edgy urban style.",
    colors: ["#880000"],
    sizes: ["s", "m", "l"],
    additionalImages: [
      productImage("bsr2.jpg"),
      productImage("bsr3.jpg"),
    ],
  },
  {
    id: "Arise-white",
    name: "Arise Soft Printed WhiteT-shirt",
    price: 349,
    image: productImage("arisew1.jpg"),
    description: "Navigate the concrete jungle in style with our Urban Explorer tee. This premium shirt features a modern cityscape design that celebrates urban adventure and exploration. Made with comfort and durability in mind.",
    colors: ["#FFFAF0"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: [productImage("arisew2.jpg")],
  },
  {
    id: "boozersclub Black graphic tshirt",
    name: "Boozers club Graphic Black T-Shirt",
    price: 349,
    image: productImage("bzb1.jpg"),
    description: "Show off your fun side with this white t-shirt displaying the unique Boozers Club design. Comfortable and eye-catching.",
    colors: ["#000000"],
    sizes: ["s", "m", "l"],
    additionalImages: [productImage("bzb2.jpg")],
  },
  {
    id: "eat sleep game repeat white",
    name: "Eat Sleep Game Repeat Printed Tshirt",
    price: 349,
    image: productImage("esgrw.jpg"),
    description: " Stay comfortable and stylish while showcasing your passion with this Eat Sleep Game Repeat graphic Tshirt.",
    colors: ["#FFFAF0"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: [productImage("arisew2.jpg")],
  },
  {
    id: "beast mode green",
    name: "Beast Mode Printed Green Tshirt",
    price: 349,
    image: productImage("beastmode-g1.jpg"),
    description: "Embrace a fresh start every day with The Everbloom Tee. Crafted for exceptional comfort and lasting wear, this t-shirt features a subtle yet inspiring Arise graphic. It's a gentle reminder of continuous growth and the beauty of new beginnings. Perfect for adding a touch of positive energy to your everyday style.",
    colors: ["#00563f"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: [productImage("beastmode-g2.jpg")],
  },
  {
    id: "onepiece White",
    name: "One Piece Black Graphic White T-Shirt",
    price: 349,
    image: productImage("opw1.jpg"),
    description: "Explore the universe with our Cosmic Journey tee. This eye-catching design features a mesmerizing space-themed illustration that's sure to turn heads. Made from premium cotton for ultimate comfort and durability.",
    colors: ["#FFFAF0"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: [productImage("opw2.jpg")],
  },
  {
    id: "boozersclub navy blue graphic tshirt",
    name: "Boozers club Graphic Navy-Blue T-Shirt",
    price: 349,
    image: productImage("bzblue1.jpg"),
    description: "Step back in time with our Retro Vibes tee. This nostalgic design captures the essence of vintage style with a modern twist. The perfect addition to any casual wardrobe, offering both comfort and character.",
    colors: ["#000080"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: [productImage("bzblue2.jpg")],
  },
  {
    id: "Bombay Supphair white",
    name: "The Connoisseur's Choice: Bombay Sapphire Graphic White T-Shirt",
    price: 349,
    image: productImage("bs1.jpg"),
    description: " For those who appreciate the finer things, this light grey t-shirt subtly showcases your affinity for the iconic Bombay Sapphire brand. Crafted for comfort and designed with a touch of sophistication.",
    colors: ["#FFFAF0"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: [productImage("bs2.jpg")],
  },
  {
    id: "johnywalker white",
    name: "Johnnie Walker Whisky Graphic Tee",
    price: 349,
    image: productImage("jw-g1.jpg"),
    description: "Showcase your appreciation for the iconic Johnnie Walker brand with this classic logo t-shirt. Featuring the recognizable Striding Man emblem and the Johnnie Walker name, this comfortable tee is a subtle nod to a world-renowned spirit.",
    colors: ["#888888"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: [productImage("jw-g2.jpg")],
  },
  {
    id: "eat sleep game repeat red",
    name: "Eat Sleep Game Repeat Printed Tshirt",
    price: 349,
    image: productImage("esgrred.jpg"),
    description: "Stay comfortable and stylish while showcasing your passion with this Eat Sleep Game Repeat graphic Tshirt.",
    colors: ["#880000"],
    sizes: ["s", "m", "l"],
    additionalImages: [productImage("opr2.jpg")],
  },
  {
    id: "wanted blue",
    name: "Monkey D. Luffy Wanted T-Shirt",
    price: 349,
    image: productImage("wanted-b1.jpg"),
    description: "Show your love for the iconic anime series with this Monkey D. Luffy Wanted poster t-shirt.",
    colors: ["#000080"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: [productImage("wanted-b2.jpg")],
  },
  {
    id: "BANKAI WARRIOR WHITE",
    name: "BANKAI Warrior White T-Shirt (Anime-Inspired)",
    price: 399,
    image: productImage("bw-w1.jpg"),
    description: "Unleash your inner warrior with the BANKAI Warrior white T-Shirt, inspired by legendary anime battles!Made from premium, breathable cotton, it offers unbeatable comfort with a stylish regular fit — perfect for anime fans, streetwear lovers, and anyone who lives life at full power.",
    colors: ["#FFFAF0"],
    sizes: ["s", "m", "l", "XL"],
    additionalImages: [productImage("bw-w2.jpg")],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products;
};

// Function to get related products (excludes current product)
export const getRelatedProducts = (currentProductId: string): Product[] => {
  return products
    .filter((product) => product.id !== currentProductId)
    .slice(0, 4);
};