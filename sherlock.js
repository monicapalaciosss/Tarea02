//Input Example

_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/


//----- Start your code here -------
//1.hacerlo n casos
//2.hacerlo para cada numero entero entre el rango dado
//3.sacar raiz
//4.checar si es una raiz exacta 
var a;
var b;
var i;
var j;
var raiz;
var contador;
var numcasos;

input=_INPUT.split("\n");
numcasos=parseInt(input[0]);
j=1;
while (1<=numcasos<=100) //realizar n numcasos
{
	input2=input[j].split(" ");
	a=parseInt(input2[0]);
	b=parseInt(input2[1]);
	for(i=a; i<=b; i++) //checar cada numero entero entre a-b
	{
		raiz=Math.ceil(Math.sqrt(i)); //saca raiz y redondea un numero arriba 
		if(raiz*raiz==i) //multiplica la raiz y checa si es igual a i 
		{
			contador++; //numero de raices exactas
		}
	}
	numcasos--;
	j++;
	console.log(contador); 
}


