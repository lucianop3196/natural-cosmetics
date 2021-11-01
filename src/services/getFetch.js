const products = [
    {
      id: "1",
      name: "prueba1",
      category: "shampoo sólido",
      price: "350",
      pictureURL:"",
      stock: "10"
      },
    {
      id: "2",
      name: "prueba2",
      category: "shampoo sólido",
      price: "380",
      pictureURL:"",
      stock: "10"
      },
    {
      id: "3",
      name: "prueba3",
      category: "desodorante",
      price: "300",
      pictureURL: "",
      stock: "10"
    },
    {
      id: "4",
      name: "prueba4",
      category: "desodorante",
      price: "320",
      pictureURL: "",
      stock: "10"
    },
  ];

  export const getFetch = new Promise((res, rej) => {
    setTimeout(() => {
      res(products);
    }, 2000);
  });