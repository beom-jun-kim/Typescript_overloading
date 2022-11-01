// overloading 
// Function(=Method) Overloading은 직접 작성하기보다 
// 외부 라이브러리에 자주 보이는 형태로, 하나의 함수가 복수의 
// Call Signature를 가질 때 발생한다


// type Add = {
//     (a: number, b: number): number
//     (a: number, b: number, c: number): number,
// }

// const add: Add = (a, b, c?: number) => {
//     if (c) return a + b + c
//     return a + b
// }

// add(1,2)
// add(1,2,3)

// type Config = {
// path: string,
// state: number
// }

// type Push = {
// (config: Config): void,
// (config: string): void
// }

// const push: Push = (config) => {
// if (typeof config === "string") console.log(config);
// else console.log(config.path);
// }