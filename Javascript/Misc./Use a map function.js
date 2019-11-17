let item = {
    car: [
      {
        id: 1,
        brand: 'toyota',
        make: 'camry',
        year: 2016
      },
      {
        id: 2,
        brand: 'kia',
        make: 'k5',
        year: 2019
      },
      {
        id: 3,
        brand: 'toyota',
        make: 'minivan',
        year: 1999
      }
    ]
  }
  
  console.log(item)
  
  item.car.map((car) => `${car.brand}  ${car.make}`)