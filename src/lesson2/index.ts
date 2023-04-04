interface user {
    name: string,
    email: string,
    age: number,
    password: string,
    1: 3
}

type arr = {
    [n: number | string]: string | number,
    1: 'Le',
    2: 'Nhat',
    3: 'Duy',
    "Le Nhat Duy": 10
}

// Type a = "name" | "email" | "age" | "password" | 1
let a: keyof user;
// Type b = number
let b: keyof arr = "Le Nhat Duy"
