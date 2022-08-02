// const gpu = {
//     id: 1,
//     name: "RTX 3090",
//     maker: "Nvidia",
//     price: 1499,
//     weight: 7.24
// }

// const cpu = {
//     id: 2,
//     name: "5950X",
//     maker: "Advanced Micro Devices",
//     price: 499,
//     wieght: 0.255
// }
const pcParts = [
  {
    id: 1,
    name: "5950X",
    maker: "Advanced Micro Devices",
    price: 499,
    weight: 0.255,
  },
  {
    id: 2,
    name: "RTX 3090",
    maker: "Nvidia",
    price: 1499,
    weight: 7.24,
  },
];

// for (const parts of pcParts){
//     console.log(parts.maker)
// }

const psu = {
  id: 3,
  name: "Prime Ultra 1000 Titanium",
  maker: "Seasonic",
  price: 299,
  weight: 4.6,
};

const motherboard = {
  id: 4,
  name: "ROG Crosshair VIII Hero",
  maker: "ASUS",
  price: 393,
  weight: 2.2,
};

pcParts.push(psu);
pcParts.push(motherboard);
for (const parts of pcParts) {
  console.log(
    `The PC part: ${parts.maker} ${parts.name} costs ${parts.price} USD`
  );
}

for (const part of pcParts) {
  console.log(
    `Due to inflation prices have increased by 5%. New prices are: ${
      part.maker
    } ${part.name} is now ${Math.ceil(part.price * 1.05)}`
  );
}
