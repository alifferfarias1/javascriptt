let varA = 'A';
let varB = 'B';  
let varC = 'C';

// let auxiliar = varA
// varA = varB
// varB = varC
// varC = auxiliar
[varA, varB, varC] = [varB, varC, varA]; // outra maneira de se fazer isso

console.log(varA, varB, varC);