import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  customer3,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "Sobre Nós" },
  { href: "#products", label: "Produtos" },
  { href: "#contact-us", label: "Fale Conosco" },
  { href: "#sign-in", label: "Entrar / Cadastro" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Modelos" },
  { value: "500k+", label: "Vendas" },
  { value: "250k+", label: "Clientes" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "R$ 299.90",
    rating: "4.5",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "R$ 499.90",
    rating: "4.8",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "R$ 249.90",
    rating: "4.4",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "R$ 199.90",
    rating: "4.2",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Entrega Grátis",
    subtext: "Compras pela nossa plataforma não pagam frete! Válido para todo o território brasileiro.",
  },
  {
    imgURL: shieldTick,
    label: "Pagamento seguro",
    subtext:
      "Temos um ambiente seguro para que você possa comprar com segurança e sem preocupações.",
  },
  {
    imgURL: support,
    label: "Adoramos ajudar você",
    subtext: "Temos um time dedicado que está sempre disponível para ajudar em cada etapa do caminho.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Alberto Freitas",
    rating: 4.9,
    feedback:
      "A atenção aos detalhes e a qualidade do produto superaram minhas expectativas. Altamente recomendado!",
  },
  {
    imgURL: customer2,
    customerName: "Lola Montes",
    rating: 4.8,
    feedback:
      "O produto não só atendeu como superou minhas expectativas. Com certeza serei um cliente recorrente!",
  },
  {
    imgURL: customer3,
    customerName: "Carlos Ribeiro",
    rating: 4.7,
    feedback:
      "Produto sensacional, apenas o tamanho que é um pouco diferente no Brasil, mas o time de suporte me atendeu super bem!",
  },
];

export const footerLinks = [
  {
    title: "Marcas",
    links: [
      { name: "Air Jordan", link: "/" },
      { name: "Air Force", link: "/" },
      { name: "Air Force Sports", link: "/" },
      { name: "Air Max", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { name: "Sobre nós", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "Pedidos / Financeiro", link: "/" },
      { name: "Política de Privacidade", link: "/" },
      { name: "Política de Pagamento", link: "/" },
    ],
  },
  {
    title: "Fale conosco",
    links: [
      { name: "suporte@nike.com", link: "mailto:suporte@nike.com" },
      { name: "+55 (62) 99999-9999", link: "tel:+5562999999999" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
