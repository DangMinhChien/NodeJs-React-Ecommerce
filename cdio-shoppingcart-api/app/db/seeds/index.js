"use strict";

const Models = require("../models");
const PasswordUtils = require("../../services/password");

const dataRole = [
  {
    nameRole: "admin",
    description: "admin",
    isActive: true,
  },
  {
    nameRole: "staff",
    description: "staff",
    isActive: true,
  },
  {
    nameRole: "user",
    description: "user",
    isActive: true,
  },
];

const dataUser = [
  {
    email: "admin@gmail.com",
    name: "Ken",
    password: PasswordUtils.hashSync("123456"),
    roleId: 1,
  },
  {
    email: "staff@gmail.com",
    name: "Le",
    password: PasswordUtils.hashSync("123456"),
    roleId: 2,
  },
  {
    email: "user@gmail.com",
    name: "Bin",
    password: PasswordUtils.hashSync("123456"),
    roleId: 3,
  },
];

const dataCategory = [
  {
    nameCategory: "SMARTPHONE",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fiphone-11-pro-max-green-400x460.png?alt=media&token=9374bac0-b3e5-4066-8823-8d60a0db20ec",
    isActive: true,
    createdAt: "2020-12-05T15:03:11.311Z",
    updatedAt: "2020-12-05T15:08:15.904Z",
  },
  {
    nameCategory: "TABLET",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fsamsung-galaxy-tab-a-101-t515-2019-gold-400x460.png?alt=media&token=494c9ef7-af1e-4cc5-b4ae-fabe9b5d6002",
    isActive: true,
    createdAt: "2020-12-05T15:04:12.107Z",
    updatedAt: "2020-12-05T15:09:01.724Z",
  },
  {
    nameCategory: "WATCH",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Ffossil-es3843-xanh-den-400x400.jpg?alt=media&token=15bc2087-361e-4dfa-bf33-7e6ab73e424c",
    isActive: true,
    createdAt: "2020-12-05T15:04:16.727Z",
    updatedAt: "2020-12-05T15:09:48.556Z",
  },
  {
    nameCategory: "LAPTOP",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fapple-macbook-air-2019-i5-16ghz-8gb-128gb-mvfm2sa-13-32-600x600.jpg?alt=media&token=173a547a-de55-4fc5-8b31-ce025fd517ce",
    isActive: true,
    createdAt: "2020-12-05T15:04:30.555Z",
    updatedAt: "2020-12-05T15:10:34.649Z",
  },
  {
    nameCategory: "OFFICE",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fcap-lightning-1m-evalu-spanker-b-do-den-1-fixx1-600x600.jpg?alt=media&token=9e2647c4-6c9e-43d3-9d4c-40cfdbbf19ad",
    isActive: true,
    createdAt: "2020-12-05T15:04:25.278Z",
    updatedAt: "2020-12-05T15:11:12.111Z",
  },
];

const dataProducer = [
  {
    name: "IPHONE",
    categoryId: 1,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FiPhone-(Apple)42-b_16.jpg?alt=media&token=eb9460a3-67c3-4ee6-a791-589339a646b2",
  },
  {
    name: "SAMSUNG",
    categoryId: 1,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FSamsung42-b_25.jpg?alt=media&token=5093b047-b0ad-46ed-ac87-3b464beb0090",
  },
  {
    name: "OPPO",
    categoryId: 1,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FOPPO42-b_57.jpg?alt=media&token=79f54279-cbd2-4db7-8c9f-3457ff6be4d4",
  },
  {
    name: "XIAOMI",
    categoryId: 1,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FXiaomi42-b_31.png?alt=media&token=4bb7b238-74f9-4a29-a764-f514c3788d84",
  },
  {
    name: "VIVO",
    categoryId: 1,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FVivo42-b_50.jpg?alt=media&token=7f3f0166-d768-49c5-8dcf-13487614f715",
  },
  {
    name: "HUAWEI",
    categoryId: 1,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FHuawei42-b_30.jpg?alt=media&token=7a3c0102-0777-4b81-b9cc-f48a26173a3d",
  },
  {
    name: "IPAD",
    categoryId: 2,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FiPad-(Apple)522-b_28.jpg?alt=media&token=e58c54d0-3a40-4320-9e73-789a8f50b0e2",
  },
  {
    name: "SAMSUNG",
    categoryId: 2,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FSamsung522-b_30.jpg?alt=media&token=8f31abbe-a68a-49ef-a487-54fa8e08ec4b",
  },
  {
    name: "HUAWEI",
    categoryId: 2,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FHuawei522-b_35.jpg?alt=media&token=b04ed4d6-c3f1-40c0-b631-09c23f1a0c4c",
  },
  {
    name: "LENOVO",
    categoryId: 2,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FLenovo522-b_29.jpg?alt=media&token=f9e5f951-b049-4ad3-ae23-10c1279432ef",
  },
  {
    name: "MASSTEL",
    categoryId: 2,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FMasstel522-b_35.png?alt=media&token=38457d7f-70ec-4b38-9f3d-9f5e57a831e2",
  },
  {
    name: "MOBELL",
    categoryId: 2,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FMobell522-b_30.jpg?alt=media&token=3343d2ae-8218-493d-a5b8-955b1443b4cc",
  },
  {
    name: "MACBOOK",
    categoryId: 5,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FMacbook44-b_34.png?alt=media&token=804f30a4-b234-4ec0-85e8-4fec016d0a5b",
  },
  {
    name: "HP",
    categoryId: 5,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FHP-Compaq44-b_36.jpg?alt=media&token=88e5905f-5ff7-4301-8b61-9ad241a0583c",
  },
  {
    name: "ASUS",
    categoryId: 5,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FAsus44-b_35.jpg?alt=media&token=2bd1cd80-5ec8-4a00-9d8a-704007f0f56f",
  },
  {
    name: "DELL",
    categoryId: 5,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FDell44-b_34.jpg?alt=media&token=a04ec750-a9dd-4a8d-a1b0-ff52a0979cd1",
  },
  {
    name: "LENOVO",
    categoryId: 5,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FLenovo44-b_36.jpg?alt=media&token=cd14662e-f284-4686-9e59-1555dc81e9e7",
  },
  {
    name: "ACER",
    categoryId: 5,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FAcer44-b_37.jpg?alt=media&token=8dbd66c4-31b2-4b0e-ae6c-25a19846a773",
  },
  {
    name: "MSI",
    categoryId: 5,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FMSI44-b_30.png?alt=media&token=8be2569f-e0a5-45d5-add7-4c7126bf2cd6",
  },
  {
    name: "LIGHTNING",
    categoryId: 4,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2F9-92362_tampa-bay-lightning-nhl-logo-png-clipart-image.png?alt=media&token=5d7d941a-b6a9-4fd1-88b2-00264d7b7fd1",
  },
  {
    name: "XMOBILE",
    categoryId: 4,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fxmobile.png?alt=media&token=c8b77a12-9679-4b6a-bfa1-1c64fde3f204",
  },
  {
    name: "AWEI",
    categoryId: 4,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FAwei-logo-topbrands-penguin.com_.bd_.png?alt=media&token=2f4b0381-ad18-4538-9a8e-475c06f129ed",
  },
  {
    name: "KANEN",
    categoryId: 4,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Ffjallraven-logo-png-4.png?alt=media&token=157b49a6-b825-445d-b1af-2eb19e85b8b9",
  },
  {
    name: "FENDA",
    categoryId: 4,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fimages.jpg?alt=media&token=70dd60db-ac89-47c1-9cc7-d4063d6103a9",
  },
  {
    name: "APPLE",
    categoryId: 3,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FiPhone-(Apple)42-b_16.jpg?alt=media&token=7038064f-660c-40eb-99e6-c538004a979a",
  },
  {
    name: "SAMSUNG",
    categoryId: 3,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FSamsung42-b_25.jpg?alt=media&token=154980d2-4db9-4c89-a342-640c88ca4292",
  },
  {
    name: "XIAOMI",
    categoryId: 3,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FXiaomi42-b_31.png?alt=media&token=3a105c87-6fe8-46b9-8d25-201ffc966bd2",
  },
  {
    name: "HUAWEI",
    categoryId: 3,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2FHuawei42-b_30.jpg?alt=media&token=a3b5ed59-3332-48fb-b54d-c85cfb5ab2dd",
  },
  {
    name: "ZEBLAZE",
    categoryId: 3,
    isActive: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fzeblaze.png?alt=media&token=02640f68-c989-44fb-ae37-127fa60fca55",
  },
];

const dataProduct = [
  {
    nameProduct: "Máy tính bảng iPad Pro 11 inch Wifi 64GB (2018)",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fipad-pro-11-inch-2018-64gb-wifi-33397-thumb-600x600.jpg?alt=media&token=ae38403b-4385-4f29-889f-6b36a10b00ba",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fipad-pro-11-inch-2018-64gb-wifi-33397-thumb-600x600.jpg?alt=media&token=ae38403b-4385-4f29-889f-6b36a10b00ba",
    ],
    price: 982,
    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 6,
    properties: {},
    isActive: true,
    categoryId: 2,
    producerId: 7,
    createdAt: "2020-12-05T16:04:13.441Z",
    updatedAt: "2020-12-29T07:16:29.960Z",
  },
  {
    nameProduct: "Đồng hồ thông minh Xiaomi Amazfit Pace GPS",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fdong-ho-thong-minh-xiaomi-amazfit-pace-gps-den-400x400.jpg?alt=media&token=5074fa58-0ba9-48c2-935c-c4a53aa790bb",

    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fdong-ho-thong-minh-xiaomi-amazfit-pace-gps-den-400x400.jpg?alt=media&token=5074fa58-0ba9-48c2-935c-c4a53aa790bb",
    ],
    price: 125,
    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 7,
    properties: {},
    isActive: true,
    categoryId: 3,
    producerId: 27,
    createdAt: "2020-12-05T15:35:27.795Z",
    updatedAt: "2020-12-29T07:41:23.140Z",
  },
  {
    nameProduct: "Vòng đeo tay thông minh Mi Band 4",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fmi-band-4-6-400x400.jpg?alt=media&token=fac09a0b-6d89-4e97-ad6a-6cf15ad9c6af",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fmi-band-4-6-400x400.jpg?alt=media&token=fac09a0b-6d89-4e97-ad6a-6cf15ad9c6af",
    ],

    price: 35,
    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 7,
    properties: {},
    isActive: true,
    categoryId: 3,
    producerId: 27,
    createdAt: "2020-12-05T15:35:02.383Z",
    updatedAt: "2020-12-29T07:43:07.318Z",
  },
  {
    nameProduct: "Đồng hồ thông minh Samsung Galaxy Watch Active 2",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fsamsung-galaxy-watch-active-2-40-mm-day-da-7-400x400.jpg?alt=media&token=da440616-ebb7-4192-8f0e-71ae45b95c13",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fsamsung-galaxy-watch-active-2-40-mm-day-da-7-400x400.jpg?alt=media&token=da440616-ebb7-4192-8f0e-71ae45b95c13",
    ],

    price: 411,
    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 7,
    properties: {},
    isActive: true,
    categoryId: 3,
    producerId: 26,
    createdAt: "2020-12-05T15:32:30.559Z",
    updatedAt: "2020-12-29T07:46:51.049Z",
  },
  {
    nameProduct: "Điện thoại OPPO Reno 10x Zoom Edition",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Foppo-reno-10x-zoom-edition-black-600x600.jpg?alt=media&token=dffb26b3-4c9f-4b66-bdab-26ec5662af5e",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Foppo-reno-10x-zoom-edition-black-600x600.jpg?alt=media&token=dffb26b3-4c9f-4b66-bdab-26ec5662af5e",
    ],

    price: 862,
    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 5,
    properties: {},
    isActive: true,
    categoryId: 1,
    producerId: 3,
    createdAt: "2020-12-05T15:56:51.690Z",
    updatedAt: "2020-12-29T07:22:33.712Z",
  },
  {
    nameProduct: "Điện thoại Samsung Galaxy Note 10",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fsamsung-galaxy-note-10-silver-600x600.jpg?alt=media&token=f923e93e-8ae3-402c-a32d-2c52be77bc79",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fsamsung-galaxy-note-10-silver-600x600.jpg?alt=media&token=f923e93e-8ae3-402c-a32d-2c52be77bc79",
    ],

    price: 1110,
    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 5,
    properties: {},
    isActive: true,
    categoryId: 1,
    producerId: 2,
    createdAt: "2020-12-05T15:56:00.394Z",
    updatedAt: "2020-12-29T07:24:29.343Z",
  },
  {
    nameProduct: "Điện thoại Samsung Galaxy S10+ (512GB)",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fsieu-pham-galaxy-s-moi-2-512gb-black-600x600.jpg?alt=media&token=a2d50f45-c490-4475-8a9b-bafae248858e",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fsieu-pham-galaxy-s-moi-2-512gb-black-600x600.jpg?alt=media&token=a2d50f45-c490-4475-8a9b-bafae248858e",
    ],
    price: 1230,
    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 7,
    properties: {},
    isActive: true,
    categoryId: 1,
    producerId: 2,
    createdAt: "2020-12-05T15:43:27.049Z",
    updatedAt: "2020-12-29T07:27:46.835Z",
  },
  {
    nameProduct: "Điện thoại iPhone 11 Pro Max 256GB",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fiphone-11-pro-max-256gb-green-600x600.jpg?alt=media&token=e2487176-b2bb-487b-b323-a8d8b1f460eb",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fiphone-11-pro-max-256gb-green-600x600.jpg?alt=media&token=e2487176-b2bb-487b-b323-a8d8b1f460eb",
    ],

    price: 1702,
    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 6,
    properties: {},
    isActive: true,
    categoryId: 1,
    producerId: 1,
    createdAt: "2020-12-05T15:41:12.962Z",
    updatedAt: "2020-12-29T07:33:30.424Z",
  },
  {
    nameProduct:
      "Đồng hồ thông minh Samsung Galaxy Watch Active 2 44mm dây sillicone",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fsamsung-galaxy-watch-active-2-44-mm-sillicon-ava-400x400.jpg?alt=media&token=1409fc38-024a-406d-b4a6-b9e37a53edd1",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fsamsung-galaxy-watch-active-2-44-mm-sillicon-ava-400x400.jpg?alt=media&token=1409fc38-024a-406d-b4a6-b9e37a53edd1",
    ],

    price: 325,
    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 2,
    properties: {},
    isActive: true,
    categoryId: 3,
    producerId: 26,
    createdAt: "2020-12-05T15:32:04.554Z",
    updatedAt: "2020-12-29T07:49:47.156Z",
  },
  {
    nameProduct: "Vòng đeo tay thông minh Mi Band 3",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fdong-ho-thong-minh-huawei-band-3e-400x400.jpg?alt=media&token=93f59945-dc1a-4c94-a7d1-facacd1d8efb",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fdong-ho-thong-minh-huawei-band-3e-400x400.jpg?alt=media&token=93f59945-dc1a-4c94-a7d1-facacd1d8efb",
    ],

    price: 30,
    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 7,
    properties: {},
    isActive: true,
    categoryId: 3,
    producerId: 27,
    createdAt: "2020-12-05T15:34:30.770Z",
    updatedAt: "2020-12-29T07:44:47.935Z",
  },
  {
    nameProduct: "Apple Watch S4 GPS 40mm viền nhôm dây vải",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fapple-watch-s4-gps-40mm-vien-nhom-xam-day-vai-den-nt-600x600.jpg?alt=media&token=78800b4c-981c-484e-afef-7cb7dbbc3af3",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fapple-watch-s4-gps-40mm-vien-nhom-xam-day-vai-den-nt-600x600.jpg?alt=media&token=78800b4c-981c-484e-afef-7cb7dbbc3af3",
    ],

    price: 501,
    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 2,
    properties: {},
    isActive: true,
    categoryId: 3,
    producerId: 25,
    createdAt: "2020-12-05T15:23:33.998Z",
    updatedAt: "2020-12-29T07:59:55.416Z",
  },
  {
    nameProduct: "Điện thoại Samsung Galaxy Fold",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fsamsung-galaxy-fold-black-600x600.jpg?alt=media&token=5480efb2-b7fc-4925-9506-e0d5c791ad15",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fsamsung-galaxy-fold-black-600x600.jpg?alt=media&token=5480efb2-b7fc-4925-9506-e0d5c791ad15",
    ],

    price: 2300,
    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 7,
    properties: {},
    isActive: true,
    categoryId: 1,
    producerId: 2,
    createdAt: "2020-12-05T15:42:57.882Z",
    updatedAt: "2020-12-29T07:29:43.263Z",
  },
  {
    nameProduct: "Điện thoại iPhone 11 Pro 256GB",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fiphone-11-pro-256gb-black-600x600.jpg?alt=media&token=0aeb7c5f-167c-47d7-bb94-30e33614f92f",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fiphone-11-pro-256gb-black-600x600.jpg?alt=media&token=0aeb7c5f-167c-47d7-bb94-30e33614f92f",
    ],

    price: 1520,
    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 7,
    properties: {},
    isActive: true,
    categoryId: 1,
    producerId: 1,
    createdAt: "2020-12-05T15:41:43.096Z",
    updatedAt: "2020-12-29T07:31:33.879Z",
  },
  {
    nameProduct: "Đồng hồ thông minh Huawei Watch GT2",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fhuawei-watch-gt2-46mm-day-da-400x400.jpg?alt=media&token=3980bca5-bade-4d48-a830-ab730dffd795",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fhuawei-watch-gt2-46mm-day-da-400x400.jpg?alt=media&token=3980bca5-bade-4d48-a830-ab730dffd795",
    ],

    price: 325,
    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 7,
    properties: {},
    isActive: true,
    categoryId: 3,
    producerId: 28,
    createdAt: "2020-12-05T15:37:00.183Z",
    updatedAt: "2020-12-29T07:37:24.804Z",
  },
  {
    nameProduct: "Máy tính bảng Samsung Galaxy Tab A 10.5",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fsamsung-galaxy-tab-a-101-t515-2019-gold-600x600.jpg?alt=media&token=39b7e644-c9d2-44eb-8319-7d44233123d2",
    price: 452,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fsamsung-galaxy-tab-a-101-t515-2019-gold-600x600.jpg?alt=media&token=39b7e644-c9d2-44eb-8319-7d44233123d2",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 0,
    properties: {},
    isActive: true,
    categoryId: 2,
    producerId: 8,
    createdAt: "2020-12-05T16:19:39.061Z",
    updatedAt: "2020-12-29T07:10:31.658Z",
  },
  {
    nameProduct: "Máy tính bảng Samsung Galaxy Tab S6",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fsamsung-galaxy-tab-s6-600x600.jpg?alt=media&token=af41491d-1ffd-4d4b-b012-185382b332b9",

    price: 852,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fsamsung-galaxy-tab-s6-600x600.jpg?alt=media&token=af41491d-1ffd-4d4b-b012-185382b332b9",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 5,
    properties: {},
    isActive: true,
    categoryId: 2,
    producerId: 8,
    createdAt: "2020-12-05T16:17:26.365Z",
    updatedAt: "2020-12-29T07:12:43.615Z",
  },
  {
    nameProduct: "Apple Watch S3 GPS 42mm viền nhôm xám dây cao su",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fapple-watch-s3-gps-42mm-vien-nhom-day-cao-su-den-11-400x400.jpg?alt=media&token=949bce21-60fa-465e-be5c-89ab9a4769ea",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fapple-watch-s3-gps-42mm-vien-nhom-day-cao-su-den-11-400x400.jpg?alt=media&token=949bce21-60fa-465e-be5c-89ab9a4769ea",
    ],

    price: 325,
    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 9,
    properties: {},
    isActive: true,
    categoryId: 3,
    producerId: 25,
    createdAt: "2020-12-05T15:28:10.141Z",
    updatedAt: "2020-12-29T07:57:09.401Z",
  },
  {
    nameProduct: "Điện thoại OPPO Reno",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Foppo-reno-pink-600x600.jpg?alt=media&token=66f47da8-2053-4927-be2b-3241ce088d1e",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Foppo-reno-pink-600x600.jpg?alt=media&token=66f47da8-2053-4927-be2b-3241ce088d1e",
    ],

    price: 423,
    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 5,
    properties: {},
    isActive: true,
    categoryId: 1,
    producerId: 3,
    createdAt: "2020-12-05T15:59:57.186Z",
    updatedAt: "2020-12-29T07:18:28.172Z",
  },
  {
    nameProduct: "Laptop Apple MacBook Air 2018 i5/8GB/256GB",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fapple-macbook-air-mref2sa-a-i5-8gb-256gb-content-manhinhdmx-1-1-600x600.jpg?alt=media&token=ee3e09c0-ac95-417c-ae04-425b08e9d918",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fapple-macbook-air-mref2sa-a-i5-8gb-256gb-content-manhinhdmx-1-1-600x600.jpg?alt=media&token=ee3e09c0-ac95-417c-ae04-425b08e9d918",
    ],

    price: 1490,
    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 4,
    properties: {},
    isActive: true,
    categoryId: 5,
    producerId: 13,
    createdAt: "2020-12-05T16:33:53.335Z",
    updatedAt: "2020-12-29T07:01:00.872Z",
  },
  {
    nameProduct: "Máy tính bảng Huawei Mediapad T5 10.1 inch",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fhuawei-mediapad-m5-lite-gray-600x600.jpg?alt=media&token=0ceeafa6-cc95-471f-8b6e-4198c4042c03",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fhuawei-mediapad-m5-lite-gray-600x600.jpg?alt=media&token=0ceeafa6-cc95-471f-8b6e-4198c4042c03",
    ],

    price: 252,
    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 6,
    properties: {},
    isActive: true,
    categoryId: 2,
    producerId: 9,
    createdAt: "2020-12-05T16:21:33.730Z",
    updatedAt: "2020-12-29T07:09:00.006Z",
  },
  {
    nameProduct: "Điện thoại OPPO Reno2",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Foppo-reno2-600x600.jpg?alt=media&token=37223f8c-486d-4f07-9d61-4a79ff13ea13",
    price: 652,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Foppo-reno2-600x600.jpg?alt=media&token=37223f8c-486d-4f07-9d61-4a79ff13ea13",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 5,
    properties: {},
    isActive: true,
    categoryId: 1,
    producerId: 3,
    createdAt: "2020-12-05T15:57:34.589Z",
    updatedAt: "2020-12-29T07:20:27.967Z",
  },
  {
    nameProduct: "Điện thoại Samsung Galaxy Note 10+",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fsamsung-galaxy-note-10-plus-blue-600x600.jpg?alt=media&token=c98bd84d-5e5d-4202-897a-4c63019d137f",
    price: 1230,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fsamsung-galaxy-note-10-plus-blue-600x600.jpg?alt=media&token=c98bd84d-5e5d-4202-897a-4c63019d137f",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 5,
    properties: {},
    isActive: true,
    categoryId: 1,
    producerId: 2,
    createdAt: "2020-12-05T15:54:07.283Z",
    updatedAt: "2020-12-29T07:26:16.079Z",
  },
  {
    nameProduct: "Dây cáp Lightning 1 m e.VALU LTL-01",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fcap-lightning-1m-evalu-ltl-01-avatar-1-600x600-1-fix-600x600.jpg?alt=media&token=e3ba24c3-24cc-47aa-a34d-1766f5d1bca0",
    price: 3,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fcap-lightning-1m-evalu-ltl-01-avatar-1-600x600-1-fix-600x600.jpg?alt=media&token=e3ba24c3-24cc-47aa-a34d-1766f5d1bca0",
    ],
    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 77,
    properties: {},
    isActive: true,
    categoryId: 4,
    producerId: 20,
    createdAt: "2020-12-05T16:52:49.475Z",
    updatedAt: "2020-12-29T06:32:56.612Z",
  },
  {
    nameProduct: "Laptop Asus VivoBook X407UA i3 7020U",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fasus-x407ua-bv351t-600x600.jpg?alt=media&token=5984ff19-16c7-4e7b-8da7-d00604b4a6a3",
    price: 452,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fasus-x407ua-bv351t-600x600.jpg?alt=media&token=5984ff19-16c7-4e7b-8da7-d00604b4a6a3",
    ],
    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 5,
    properties: {},
    isActive: true,
    categoryId: 5,
    producerId: 15,
    createdAt: "2020-12-05T16:47:22.634Z",
    updatedAt: "2020-12-29T06:48:26.348Z",
  },
  {
    nameProduct: "Laptop Asus VivoBook X507MA N4000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fasus-x507ma-n4000-4gb-256gb-win10-br318t-10-600x600.jpg?alt=media&token=26520820-79bd-4596-a842-48a697860ae4",
    price: 325,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fasus-x507ma-n4000-4gb-256gb-win10-br318t-10-600x600.jpg?alt=media&token=26520820-79bd-4596-a842-48a697860ae4",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 0,
    properties: {},
    isActive: true,
    categoryId: 5,
    producerId: 15,
    createdAt: "2020-12-05T16:45:44.728Z",
    updatedAt: "2020-12-29T06:52:11.153Z",
  },
  {
    nameProduct: "Laptop Apple MacBook Air 2017 i5 1.8GHz",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fapple-macbook-air-mqd32sa-a-i5-5350u-600x600.jpg?alt=media&token=7e238305-a5ad-481e-86c5-89501725b2c2",
    price: 1120,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fapple-macbook-air-mqd32sa-a-i5-5350u-600x600.jpg?alt=media&token=7e238305-a5ad-481e-86c5-89501725b2c2",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 4,
    properties: {},
    isActive: true,
    categoryId: 5,
    producerId: 13,
    createdAt: "2020-12-05T16:33:00.040Z",
    updatedAt: "2020-12-29T07:04:21.769Z",
  },
  {
    nameProduct: "Tai nghe nhét trong Awei Q7Ni",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Ftai-nghe-ep-awei-q7ni-1-2-600x600.jpg?alt=media&token=61a9d641-0e2c-4a46-8b30-e9321f04b7c2",
    price: 5.3,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Ftai-nghe-ep-awei-q7ni-1-2-600x600.jpg?alt=media&token=61a9d641-0e2c-4a46-8b30-e9321f04b7c2",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 77,
    properties: {
      Camera: "Good",
    },
    isActive: true,
    categoryId: 4,
    producerId: 22,
    createdAt: "2020-12-05T16:57:09.012Z",
    updatedAt: "2020-12-29T06:02:13.662Z",
  },
  {
    nameProduct: "Laptop HP 14 ck0068TU i3 7020U/4GB",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fhp-14-ck0068tu-i3-7020u-4gb-500gb-14-win10-4me90p-16-600x600.jpg?alt=media&token=02929c9f-3be3-4433-a090-9b9ac44166a7",
    price: 521,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fhp-14-ck0068tu-i3-7020u-4gb-500gb-14-win10-4me90p-16-600x600.jpg?alt=media&token=02929c9f-3be3-4433-a090-9b9ac44166a7",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 4,
    properties: {},
    isActive: true,
    categoryId: 5,
    producerId: 14,
    createdAt: "2020-12-05T16:49:15.490Z",
    updatedAt: "2020-12-30T12:00:17.449Z",
  },
  {
    nameProduct: "Tai nghe nhét trong Kanen IP-218",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Ftai-nghe-ep-kanen-ip-218-ava-600x600.jpg?alt=media&token=5a1288f6-d486-49b4-b72a-60dde099a527",
    price: 4.2,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Ftai-nghe-ep-kanen-ip-218-ava-600x600.jpg?alt=media&token=5a1288f6-d486-49b4-b72a-60dde099a527",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 77,
    properties: {},
    isActive: true,
    categoryId: 4,
    producerId: 23,
    createdAt: "2020-12-05T16:56:41.793Z",
    updatedAt: "2020-12-29T06:10:48.214Z",
  },
  {
    nameProduct: "Cáp 3 đầu Lightning Type-C Micro 1 m e.VALU Spanker",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fcap-dien-thoai-1m-evalu-spanker-b-den-xanh-600x600.jpg?alt=media&token=4db7f016-d2f6-4731-b956-a595d99d6089",
    price: 5,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fcap-dien-thoai-1m-evalu-spanker-b-den-xanh-600x600.jpg?alt=media&token=4db7f016-d2f6-4731-b956-a595d99d6089",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 77,
    properties: {},
    isActive: true,
    categoryId: 4,
    producerId: 21,
    createdAt: "2020-12-05T16:56:12.210Z",
    updatedAt: "2020-12-29T06:18:01.212Z",
  },
  {
    nameProduct: "Đồng hồ thông minh Huawei Watch GT2 ",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fwatch-gt2-46mm-day-sillicone-6-400x400.jpg?alt=media&token=2aa0c6e3-65e7-401e-bf21-1dd5dd3bf6a9",
    price: 221,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fwatch-gt2-46mm-day-sillicone-6-400x400.jpg?alt=media&token=2aa0c6e3-65e7-401e-bf21-1dd5dd3bf6a9",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 7,
    properties: {},
    isActive: true,
    categoryId: 3,
    producerId: 28,
    createdAt: "2020-12-05T15:36:20.922Z",
    updatedAt: "2020-12-29T07:40:00.987Z",
  },
  {
    nameProduct: "Cáp Lightning 1 m Xmobile L-bending",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fcap-lightning-1m-xmobile-l-bending-add-600x600-1-fixx-600x600.jpg?alt=media&token=614b4e95-2d75-49cf-b987-f270a37e8abf",
    price: 4,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fcap-lightning-1m-xmobile-l-bending-add-600x600-1-fixx-600x600.jpg?alt=media&token=614b4e95-2d75-49cf-b987-f270a37e8abf",
    ],
    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 75,
    properties: {},
    isActive: true,
    categoryId: 4,
    producerId: 21,
    createdAt: "2020-12-05T16:53:53.470Z",
    updatedAt: "2020-12-29T06:28:23.847Z",
  },
  {
    nameProduct: "Laptop HP 14s dk0097au R3 3200U/4GB",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fhp-14s-amd-ryzen-3-3200u-4gb-1tb-win10-7vh92pa-15-600x600.jpg?alt=media&token=b9ebfef1-7cf5-4f29-a0b2-63d10b08d35d",
    price: 411,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fhp-14s-amd-ryzen-3-3200u-4gb-1tb-win10-7vh92pa-15-600x600.jpg?alt=media&token=b9ebfef1-7cf5-4f29-a0b2-63d10b08d35d",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 0,
    properties: {},
    isActive: true,
    categoryId: 5,
    producerId: 14,
    createdAt: "2020-12-05T16:48:46.944Z",
    updatedAt: "2020-12-30T12:00:17.484Z",
  },
  {
    nameProduct: "Apple Watch S4 GPS 44mm viền nhôm dây vải",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fapple-watch-s4-gps-44mm-vien-nhom-day-vai-hong-nt-400x400.jpg?alt=media&token=c90cefcb-e559-4a55-8ccf-dc0c414430da",
    price: 458,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fapple-watch-s4-gps-44mm-vien-nhom-day-vai-hong-nt-400x400.jpg?alt=media&token=c90cefcb-e559-4a55-8ccf-dc0c414430da",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 7,
    properties: {},
    isActive: true,
    categoryId: 3,
    producerId: 25,
    createdAt: "2020-12-05T15:30:37.845Z",
    updatedAt: "2020-12-29T07:54:02.326Z",
  },
  {
    nameProduct: "Dây cáp Lightning 20 cm e.VALU LTL-02",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fcap-lightning-20cm-evalu-ltl-02-avatar-1-600x600.jpg?alt=media&token=15737a92-6396-4f1b-9ea7-b813501d2aac",
    price: 3,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fcap-lightning-20cm-evalu-ltl-02-avatar-1-600x600.jpg?alt=media&token=15737a92-6396-4f1b-9ea7-b813501d2aac",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 77,
    properties: {},
    isActive: true,
    categoryId: 4,
    producerId: 20,
    createdAt: "2020-12-05T16:53:28.105Z",
    updatedAt: "2020-12-29T06:31:09.282Z",
  },
  {
    nameProduct: "Cáp Lightning 1 m e.VALU Spanker B Đỏ Đen",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fcap-lightning-1m-evalu-spanker-b-do-den-1-fixx1-600x600.jpg?alt=media&token=5b464d6f-99cf-4884-8942-2c6a411591cb",
    price: 3,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fcap-lightning-1m-evalu-spanker-b-do-den-1-fixx1-600x600.jpg?alt=media&token=5b464d6f-99cf-4884-8942-2c6a411591cb",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 74,
    properties: {},
    isActive: true,
    categoryId: 4,
    producerId: 20,
    createdAt: "2020-12-05T16:52:11.665Z",
    updatedAt: "2020-12-29T06:34:26.239Z",
  },
  {
    nameProduct: "Điện thoại iPhone 11 Pro Max 512GB",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fiphone-11-pro-max-512gb-gold-600x600.jpg?alt=media&token=2b65791e-e5c5-4781-8566-d9702caf01b0",
    price: 2001,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fiphone-11-pro-max-512gb-gold-600x600.jpg?alt=media&token=2b65791e-e5c5-4781-8566-d9702caf01b0",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 3,
    properties: {},
    isActive: true,
    categoryId: 1,
    producerId: 1,
    createdAt: "2020-12-05T15:40:46.052Z",
    updatedAt: "2020-12-29T07:34:55.158Z",
  },
  {
    nameProduct: "Apple Watch S5 LTE 44mm viền nhôm dây cao su",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fapple-watch-s5-lte-44mm-vien-nhom-day-cao-su-den-ava-400x400.jpg?alt=media&token=e84c8979-5947-4381-bb7d-27c1cc5af993",
    price: 632,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fapple-watch-s5-lte-44mm-vien-nhom-day-cao-su-den-ava-400x400.jpg?alt=media&token=e84c8979-5947-4381-bb7d-27c1cc5af993",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 7,
    properties: {},
    isActive: true,
    categoryId: 3,
    producerId: 25,
    createdAt: "2020-12-05T15:31:05.211Z",
    updatedAt: "2020-12-29T07:51:49.683Z",
  },
  {
    nameProduct: "Laptop HP 15 da0359TU N4417/4GB",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fhp-15-da0359tu-n4417-4gb-500gb-win10-6kd00pa-15-600x600.jpg?alt=media&token=37f684a9-2391-42db-bafd-709eed9bb26b",
    price: 325,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fhp-15-da0359tu-n4417-4gb-500gb-win10-6kd00pa-15-600x600.jpg?alt=media&token=37f684a9-2391-42db-bafd-709eed9bb26b",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 5,
    properties: {},
    isActive: true,
    categoryId: 5,
    producerId: 14,
    createdAt: "2020-12-05T16:48:25.142Z",
    updatedAt: "2020-12-29T06:46:23.932Z",
  },
  {
    nameProduct: "Laptop Asus VivoBook X441MA N5000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fasus-x441ma-ga024t-600x600.jpg?alt=media&token=8893d251-8b7c-4f5d-a5c0-cf0e58112c19",
    price: 327,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fasus-x441ma-ga024t-600x600.jpg?alt=media&token=8893d251-8b7c-4f5d-a5c0-cf0e58112c19",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 0,
    properties: {},
    isActive: true,
    categoryId: 5,
    producerId: 15,
    createdAt: "2020-12-05T16:46:26.341Z",
    updatedAt: "2020-12-29T06:55:28.844Z",
  },
  {
    nameProduct: "Laptop Apple Macbook Pro Touch 2019 i5",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fapple-macbook-pro-touch-2019-i5-14ghz-8gb-128gb-m-2-2-600x600.jpg?alt=media&token=7dcfc9cc-bb04-4a04-a1de-c5097f6a89fc",
    price: 1252,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fapple-macbook-pro-touch-2019-i5-14ghz-8gb-128gb-m-2-2-600x600.jpg?alt=media&token=7dcfc9cc-bb04-4a04-a1de-c5097f6a89fc",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 4,
    properties: {},
    isActive: true,
    categoryId: 5,
    producerId: 13,
    createdAt: "2020-12-05T16:38:21.866Z",
    updatedAt: "2020-12-29T06:58:55.813Z",
  },
  {
    nameProduct: "Laptop Apple Macbook Air 2019 i5 1.6GHz",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fapple-macbook-air-2019-i5-16ghz-8gb-128gb-mvfm2sa-13-32-600x600.jpg?alt=media&token=b564ff84-8498-4ba5-a8b5-64211290bf36",
    price: 1234,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fapple-macbook-air-2019-i5-16ghz-8gb-128gb-mvfm2sa-13-32-600x600.jpg?alt=media&token=b564ff84-8498-4ba5-a8b5-64211290bf36",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 4,
    properties: {},
    isActive: true,
    categoryId: 5,
    producerId: 13,
    createdAt: "2020-12-05T16:33:29.804Z",
    updatedAt: "2020-12-29T07:02:41.013Z",
  },
  {
    nameProduct: "Máy tính bảng iPad 10.2 inch Wifi Cellular 128GB",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fipad-10-2-inch-wifi-cellular-128gb-2019-gray-600x600.jpg?alt=media&token=7c3f548c-ba7b-4726-8fe4-6064fb3be48d",
    price: 658,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fipad-10-2-inch-wifi-cellular-128gb-2019-gray-600x600.jpg?alt=media&token=7c3f548c-ba7b-4726-8fe4-6064fb3be48d",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 6,
    properties: {},
    isActive: true,
    categoryId: 2,
    producerId: 7,
    createdAt: "2020-12-05T16:06:54.303Z",
    updatedAt: "2020-12-29T07:14:29.203Z",
  },
  {
    nameProduct: "Cáp Micro 2 m Xmobile LTMP-2006 Xanh Navy",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fcap-micro-2m-xmobile-ltmp-2006-xanh-navy-1-fix1-600x600.jpg?alt=media&token=a1278101-b889-4c78-bcda-ef473ff4cb1f",
    price: 2.2,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fcap-micro-2m-xmobile-ltmp-2006-xanh-navy-1-fix1-600x600.jpg?alt=media&token=a1278101-b889-4c78-bcda-ef473ff4cb1f",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 77,
    properties: {},
    isActive: true,
    categoryId: 4,
    producerId: 21,
    createdAt: "2020-12-05T16:55:47.490Z",
    updatedAt: "2020-12-29T06:21:00.370Z",
  },
  {
    nameProduct: "Pin sạc dự phòng 10.000 mAh Xmobile Gram 4 Xanh Navy",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fpin-sac-du-phong-10000mah-xmobile-gram-4-xanh-navy-1-600x600.jpg?alt=media&token=f3768a9b-0aee-48df-ae2b-6237ce4b5351",
    price: 13,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fpin-sac-du-phong-10000mah-xmobile-gram-4-xanh-navy-1-600x600.jpg?alt=media&token=f3768a9b-0aee-48df-ae2b-6237ce4b5351",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 77,
    properties: {},
    isActive: true,
    categoryId: 4,
    producerId: 23,
    createdAt: "2020-12-05T16:55:15.664Z",
    updatedAt: "2020-12-29T06:24:23.165Z",
  },
  {
    nameProduct: "USB 2.0 8 GB Sandisk SDCZ50",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fusb-sandisk-sdcz50-8gb-20-xanh-duong-1-5-600x600.jpg?alt=media&token=679a08de-51f8-4102-a15e-25d9d9c9b46c",
    price: 6,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fusb-sandisk-sdcz50-8gb-20-xanh-duong-1-5-600x600.jpg?alt=media&token=679a08de-51f8-4102-a15e-25d9d9c9b46c",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 76,
    properties: {},
    isActive: true,
    categoryId: 4,
    producerId: 24,
    createdAt: "2020-12-05T16:54:31.036Z",
    updatedAt: "2020-12-29T06:26:21.584Z",
  },
  {
    nameProduct: "Máy tính bảng Huawei MediaPad T3 10 (2017)",
    image:
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fhuawei-mediapad-t3-10-1-33397-thumb-600x600.jpg?alt=media&token=1c970b95-193b-4ef5-a2ab-494e1dbc708a",
    price: 201,
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/cdio-shopping-cart.appspot.com/o/images%2Fhuawei-mediapad-t3-10-1-33397-thumb-600x600.jpg?alt=media&token=1c970b95-193b-4ef5-a2ab-494e1dbc708a",
    ],

    description:
      "<p>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.</p>",
    numberAvailable: 5,
    properties: {},
    isActive: true,
    categoryId: 2,
    producerId: 9,
    createdAt: "2020-12-05T16:28:23.655Z",
    updatedAt: "2020-12-29T07:07:29.784Z",
  },
];

exports.seed = async function (knex, prom) {
  await Models.Role.query().delete();
  await Models.User.query().delete();
  await Models.Category.query().delete();
  await Models.Producer.query().delete();
  await Models.Product.query().delete();

  await Models.Role.query().insert(dataRole);
  await Models.User.query().insert(dataUser);
  await Models.Category.query().insert(dataCategory);
  await Models.Producer.query().insert(dataProducer);
  await Models.Product.query().insert(dataProduct);
};
