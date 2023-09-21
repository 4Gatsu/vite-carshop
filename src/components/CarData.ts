export interface Car {
  name: string;
  price: string;
  img: string;
  model: string;
  mark: string;
  year: string;
  doors: string;
  air: string;
  transmission: string;
  fuel: string;
}

export const CAR_DATA: Car[][] = [
  [
    {
      name: "Ford Fiesta",
      price: "22",
      img: "https://www.motortrend.com/uploads/sites/10/2018/10/2019-ford-fiesta-s-sedan-angular-front.png",
      model: "Fiesta",
      mark: "Ford",
      year: "2013",
      doors: "4/5",
      air: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
    },
  ],
  [
    {
      name: "BMW IX XDrive40",
      price: "120",
      img: "https://media-server3.modenamotorsgmbh.com/42859-large_default/bmw-ix-xdrive40-sportpaket.jpg",
      model: "iX",
      mark: "BMW",
      year: "2023",
      doors: "4/5",
      air: "Yes",
      transmission: "Automatic",
      fuel: "Electric",
    },
  ],
  [
    {
      name: "Opel Astra",
      price: "20",
      img: "https://www.pngmart.com/files/22/Opel-Astra-PNG-Isolated-Pic.png",
      model: "Astra",
      mark: "Opel",
      year: "2010",
      doors: "3/4",
      air: "Yes",
      transmission: "Automatic",
      fuel: "Gasoline",
    },
  ],
  [
    {
      name: "BMW 5GT",
      price: "50",
      img: "https://storage.carsmile.pl/uploads/2023/04/bmw_seria_6_gran_turismo_hatchback_thumb.png",
      model: "5GT",
      mark: "BMW",
      year: "2016",
      doors: "4/5",
      air: "Yes",
      transmission: "Auto",
      fuel: "Diesel",
    },
  ],
  [
    {
      name: "Audi Q7",
      price: "80",
      img: "https://juratuning.pl/wp-content/uploads/2018/03/audi-q7ret.png",
      model: "3.0 TDI",
      mark: "Audi",
      year: "2017",
      doors: "4/5",
      air: "Yes",
      transmission: "Auto",
      fuel: "Diesel",
    },
  ],
  [
    {
      name: "Volkswagen Polo",
      price: "25",
      img: "https://cdn.funcar.gr/wp-content/media/fun-car-vw-polo.png",
      model: "Polo",
      mark: "Volkswagen",
      year: "2016",
      doors: "4/5",
      air: "Yes",
      transmission: "Manual",
      fuel: "Gasoline",
    },
  ],
];
