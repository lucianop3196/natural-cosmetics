const products = [
  {
    id: "1",
    name: "Calendula",
    category: "Shampoo",
    price: "350",
    pictureURL: "https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=945&q=80",
    stock: "10",
    initial: 1,
    detail: "Shampoo de calendula. Aplicar con el cabello humedecido"
  },
  {
    id: "2",
    name: "Detox",
    category: "Shampoo",
    price: "380",
    pictureURL: "https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=945&q=80",
    stock: "10",
    initial: 1,
    detail: "Shampoo detox. Aplicar con el cabello humedecido"
  },
  {
    id: "3",
    name: "Hibiscus y rosa mosqueta",
    category: "Shampoo",
    price: "380",
    pictureURL: "https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=945&q=80",
    stock: "10",
    initial: 1,
    detail: "Shampoo de hibiscus y rosa mosqueta. Aplicar con el cabello humedecido"
  },
  {
    id: "4",
    name: "Ortiga y diente de leon",
    category: "Shampoo",
    price: "380",
    pictureURL:
      "https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=945&q=80",
    stock: "10",
    initial: 1,
    detail: "Shampoo de ortiga y diente de leon. Aplicar con el cabello humedecido"
  },
  {
    id: "5",
    name: "Cacao y manteca de cacao",
    category: "Shampoo",
    price: "380",
    pictureURL: "https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=945&q=80",
    stock: "10",
    initial: 1,
    detail: "Shampoo de cacao y manteca de cacao. Aplicar con el cabello humedecido"
  },
  {
    id: "6",
    name: "Desodorante refrescante y protector",
    category: "Limpieza",
    price: "300",
    pictureURL: "https://images.unsplash.com/photo-1614859280183-76e352127ca7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGVvZG9yYW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stock: "10",
    initial: 1,
    detail: "Desodorante en crema. Aplicar y masajear de forma circular en el lugar de aplicación"
  },
  {
    id: "7",
    name: "Mouse de rosa mosqueta",
    category: "Cuidado personal",
    price: "320",
    pictureURL: "https://images.unsplash.com/photo-1591134608223-67005960e763?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    stock: "10",
    initial: 1,
    detail: "Crema humectante con mouse de rosa mosqueta. Aplicar en el rostro con movimientos suaves circulares"
  },
  {
    id: "8",
    name: "Mouse de lavanda",
    category: "Cuidado personal",
    price: "320",
    pictureURL: "https://images.unsplash.com/photo-1591134608223-67005960e763?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    stock: "10",
    initial: 1,
    detail: "Crema humectante con mouse de lavanda. Aplicar en el rostro con movimientos suaves circulares"
  },
  {
    id: "9",
    name: "Crema corporal",
    category: "Cuidado personal",
    price: "320",
    pictureURL: "https://images.unsplash.com/photo-1591134608223-67005960e763?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    stock: "10",
    initial: 1,
    detail: "Crema corporal humectante. Aplicar en cualquier parte del cuerpo."
  },
  {
    id: "10",
    name: "Jabon de calendula",
    category: "Jabon",
    price: "320",
    pictureURL: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    stock: "10",
    initial: 1,
    detail: "Jabón natural de calendula"
  },
  {
    id: "11",
    name: "Agua micelar",
    category: "Limpieza",
    price: "320",
    pictureURL: "https://images.unsplash.com/photo-1597106776019-b4ecc878c202?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    stock: "10",
    initial: 1,
    detail: "Agua micelar para limpiar las impurezas del rostro. Aplicar con un algodon y masajear suavemente. Retirar con agua tibia"
  }
];

export const getFetch = new Promise((res, rej) => {
  setTimeout(() => {
    res(products);
  }, 2000);
});
