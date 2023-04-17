// Giong voi lesson1, neu gia tri cua bien truoc do la: null, undefined, false, 0,... (cac gia tri falsy trong lesson1)
// Thi khi su dung ||= se gan lai gia tri do voi gia tri moi
// Hien nhien khong ai di gan lai gia tri undefined hay null,... nen se gan voi mot gia tri truly
// Neu no khac cac gia tri falsy tren thi no se khong gan va tra lai gia tri cu
// Vi du: value = a
// Khi do value ||= b ~ value = a || b
let values1: number | null | undefined = null;
values1 ||= 10

let values2: number | null | undefined = 0;
values2 ||= 10

let values3: number | null | undefined | boolean = false;
values3 ||= 10

let values4: number | null | undefined = 20;
values4 ||= 9

console.table([values1, values2, values3, values4])

// Tuong tu voi toan tu || chi co deu voi truong hop su dung ?? chi xet gia tri do voi undefined va null la falsy thoi
// Vi du: value = a
// Khi do value ??= b ~ value = a ?? b
let values5: number | null | undefined = null;
values5 ??= 10

let values6: number | null | undefined = 0;
values6 ??= 10

let values7: number | null | undefined | boolean = false;
values7 ??= 10

let values8: number | null | undefined = 20;
values8 ??= 9

console.table([values5, values6, values7, values8])


// Tuong tu nhu toan tu &&. So sanh voi gia tri truoc do voi gia chuan bi gan, neu ca 2 deu la trutly, thi no se gan gia tri cho no
// Con neu nhu gia tri ban dau la falsy thi no se khong gan va tra ve chinh gia tri do
// Duong nhien neu gia tri duoc gan la falsy ma gia tri truoc do la truthly thi no se gan gia tri falsy
// Dai khai no se so sanh giong y chang toan tu &&. Neu ca 2 deu la truthly thi se tra ve gia tri cuoi
// Neu mot trong 2 la falsy thi no se tra ve gia tri falsy dau tien
// Vi du: value = a
// Khi do value &&= b ~ value = a && b
let values9: number | null | undefined = null;
values9 &&= 10

let values10: number | null | undefined = 0;
values10 &&= 10

let values11: number | null | undefined | boolean = false;
values11 &&= undefined

let values12: number | null | undefined = 20;
values12 &&= 9

let values13: number | null | undefined = 20;
values13 &&= null

console.table([values9, values10, values11, values12, values13])