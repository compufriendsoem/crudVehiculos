// Marca, Modelo, Color, Año, Precio
let concessionaire = [
  {
    id: "car1",
    brand:"Toyota",
    models: "picanto",
    color: "white",
    year: 2018,
    price: 80000000
  },
  {
    id: "car2",
    brand:"Renault",
    models: "hehey",
    color: "bluelight",
    year: 2010,
    price: 8500000
  },
  {
    id: "car3",
    brand:"Nissan",
    models: "Versa",
    color: "blacklight",
    year: 2008,
    price: 50000000
  },
  {
    id: "car4",
    brand:"Nissan",
    models: "Tidda",
    color: "bluelight",
    year: 2020,
    price: 160000000
  },
  {
    id: "car5",
    brand:"Nissan",
    models: "March",
    color: "silver",
    year: 2020,
    price: 250000000
  }
]

function printCars(){
  // donde quiero mostrar los elementos de mi tabla
  // genero el html de los usuarios
  // pongo el html
  
  let myhtml = '';
   concessionaire.forEach((cars) => {
     myhtml += `<tr class="text-center">
                  <td class="">${cars.id}</td>
                  <td>${cars.brand}</td>
                  <td>${cars.models}</td>
                  <td>${cars.color}</td>
                  <td>${cars.year}</td>
                  <td>${cars.price}</td>
                  <td class=""><button  onclick="deleteCars(${cars.id})" class="p-1 text-dark"><i class="fas fa-trash-alt fa-3x"></i></button></td>
                </tr>`
   });
   document.getElementById('cars-body').innerHTML = myhtml;
}

function deleteCars(id){
  // siempre que vaya a eliminar un usuario o un elemento se utiliza splice
  // para recorrer el indice es con findIndex

  const index = concessionaire.findIndex((cars)=> cars.id == id);
  concessionaire.splice(index, 1);
  
  printCars();
}

function addCars(id) {
  // obtener el valor del input
  // agregar el usuario al arreglo
  // imprimo nuevamente el cars
  const myBrand = document.getElementById("brand").value;
  const myModels = document.getElementById("models").value;
  const myColor = document.getElementById("color").value;
  const myYear = document.getElementById("year").value;
  const myPrice = document.getElementById("price").value;
  const myRef = document.getElementById("ref").value;
  const vehiCars = {
    id: myRef,
    brand: myBrand,
    models: myModels,
    color: myColor,
    year: myYear,
    price: myPrice
  }
  concessionaire.push(vehiCars);
  printCars();
  document.getElementById('form-reset').request();
} 

function myBotton(){
  document.getElementById('addCarsBotton').classList.toggle('hiden')
}

printCars();