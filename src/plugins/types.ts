// JS
const colorTable = { key: 'val' }
const colorMapper = (key: string) => colorTable[key] || '_val'
colorMapper('key')

// 部分関係
interface MyObj {
  foo: string
  bar: number
}
interface MyObj2 {
  foo: string
}
const a: (obj: MyObj2) => void = () => {}
const b: (obj: MyObj) => void = a
console.log(b)

// 型アサーション
// const sameValue = 100
// const strLength: number = (someValue as string).length
// console.log(strLength)

// switchをやめる
const objShape1 = {
  // shapeflag: 'triangle',
  // base: 5,
  width: 5,
  height: 4,
  area() {
    return this.width * this.height
  },
}
// function computedArea(shape: any) {
//   switch (shape.shapeFlag) {
//     case 'objShape1':
//       return (shape.base * shape.height) / 2
//     // default:
//     //   throw new Error()
//   }
// }
for (const shape of [objShape1]) {
  // console.log(computedArea(shape))
  console.log(shape.area())
}

// class Triangle {
//   public double Base { get; set; }
//   public double Height { get; set; }

//   public double Area() => Base * Height / 2;
// }
