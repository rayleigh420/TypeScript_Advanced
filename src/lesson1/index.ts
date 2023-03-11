// Operator: ? ! ?? || &&

// Toán tử || được sử dụng để trả về giá trị "đầu tiên" khác null hoặc undefined trong danh sách các giá trị được cung cấp. 
// Nếu tất cả các giá trị đều là null hoặc undefined, toán tử này sẽ trả về giá trị cuối cùng trong danh sách. 
// Kieu x || y || z || t: nếu x không tồn tại thì trả về y, nếu t không tồn tại thì trả về z mãi cho đến t, nếu t không tồn tại thì vẫn trả về t
// Không tồn tại ở đây bao gồm tất cả fasly (null, undefined, false, 0, '', ...)
const value0 = '' || 'default value';
const value1 = null || 'default value';
const value2 = undefined || 'default value';
const value3 = 0 || 'default value';
const value4 = 0 || null || 'Le Nhat Duy' || '' || undefined;
const value5 = 0 || null || '' || undefined;
console.log("|| Operator")
console.table([value0, value1, value2, value3, value4, value5])

// Toán tử ?? cũng trả về giá trị đầu tiên khác null hoặc undefined trong danh sách các giá trị được cung cấp. 
// Tuy nhiên, nếu giá trị đó là một giá trị "falsy" (ví dụ: '', 0, false), toán tử này vẫn sẽ trả về giá trị đó. 
// Vì vậy, toán tử ?? thường được sử dụng để xác định giá trị mặc định cho một biến khi giá trị của nó có thể là một giá trị "falsy"
// const value2 = '' ?? 'default value';
// const value3 = undefined && null

// Trong JavaScript (và TypeScript), các giá trị sau được xem là falsy (giá trị sai):
// false: giá trị boolean false
// 0: giá trị số 0
// -0: giá trị số âm 0
// 0n: giá trị số BigInt 0
// '': chuỗi rỗng (empty string)
// null: giá trị null
// undefined: giá trị undefined
// NaN: giá trị NaN (Not a Number)\

// Kieu x ?? y ?? z ?? t: nếu x không tồn tại thì trả về y, y không tồn tại thì trả về z cho đến t, nếu t không tồn tại thì vẫn trả về mặc định là t
// Không tồn tại ở đây chỉ là null và undefined

const value6 = '' ?? 'default value';
const value7 = null ?? 'default value';
const value8 = undefined ?? 'default value';
const value9 = 0 ?? 'default value';
const value10 = false ?? 0 ?? null ?? 'Le Nhat Duy' ?? '' ?? undefined;

// Neu tat ca deu la gia tri null hoac undefined thi se la gia tri cuoi cung
const value11 = null ?? undefined
const value12 = undefined ?? null
console.log("?? Operator")
console.table([value6, value7, value8, value9, value10, value11, value12])

// Toán tử && được sử dụng để kiểm tra xem tất cả các biến đều tồn tại hay không. 
// Nếu tất cả các biến đều tồn tại, toán tử && sẽ trả về giá trị cuối cùng của biểu thức. 
// Ngược lại, nếu một trong các biến không tồn tại (được xem như là giá trị null hoặc undefined), toán tử && sẽ trả về giá trị "đầu tiên không tồn tại".
// Kiểu x && y && z && t: Dò từ x đến t, gặp cái nào null hoặc undefined thì trả ra, nếu tất cả đều khác thì đi đến cuối trả về cái cuối cùng.
const value13 = '' && 'default value';
const value14 = null && 'default value';
const value15 = undefined && 'default value';
const value16 = 0 && 'default value';
const value17 = false && 0 && null && 'Le Nhat Duy' && '' && undefined;
const value18 = 10 && 'Le Nhat Duy';
console.log("&& Operator")
console.table([value13, value14, value15, value16, value17, value18])

// Note: || và && sẽ giống logic chút: Ví dụ || sẽ lấy cái nào "true" đầu tiên nếu có.
// Tương tự, trong && thì nếu có cái nào đó "false thì sẽ trả ra cái đó luôn"

// Toán tử ?: Toán tử điều kiện, dùng để kiểm tra xem một biến có tồn tại hay không
// Toán tử !: Toán tử phủ định, dùng để xác nhận rằng một biến không phải là null hoặc undefined.
