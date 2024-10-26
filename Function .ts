// function 
// funcrtion types 
// optional and default parameter 
// rest parameter 
// overloading 


///function types
function abcd(): string {
    return "Hello"
}

function abc(): void {
    console.log("Hello")
}
/// so on same way we can create function type 


/// optional and default parameter 

// function add(a:number,b:number,c?:number):number{
//     return a+b+c
// }

// default parameter 

function add2(a: number, b: number, c: number = 0): number {
    return a + b + c
}

// console.log(add(1,2,3))



//rest parameter 
function sum(...arr: number[]) {
    console.log(arr)
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9)


function overloading(a: number, b: number): number;
function overloading(a: string, b: string): string;

function overloading(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return b;
    }
    throw new Error('Invalid argument types');
}

