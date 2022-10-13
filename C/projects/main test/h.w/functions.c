int largestEL (int anArray[],int size)

{
     int theBigNum=anArray[0]; //initialze the first number in the array as the biggest
     for(int i=0; i<size; ++i) //checking the if the other numebrs are larger than the first
     {
          if(anArray[i]>theBigNum)
          {
               theBigNum=anArray[i];// if the anarray is bigger than bignum then we want to save the big 
                                    // num in the an array
          }

     }
     return theBigNum;
}

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <time.h>
//Write a program in C to get the largest element of an array
// using the function

int randNum(int max)

{
     int randomNumber = 0;
     randomNumber = rand() % (max+1);
     return randomNumber;
}

int largestEL (int anArray[],int size)

{
     int theBigNum=anArray[0]; //initialze the first number in the array as the biggest
     for(int i=0; i<size; ++i) //checking the if the other numebrs are larger than the first
     {
          if(anArray[i]>theBigNum)
          {
               theBigNum=anArray[i];// if the anarray is bigger than bignum then we want to save the big 
                                    // num in the an array
          }

     }
     return theBigNum;
}


int smallestEl (int anArray[],int size)

{
     int thesmallNum=anArray[0]; //initialze the first number in the array as the biggest
     for(int i=0; i<size; ++i) //checking the if the other numebrs are larger than the first
     {
          if(anArray[i]<thesmallNum)
          {
               thesmallNum=anArray[i];// if the anarray is bigger than bignum then we want to save the big 
                                    // num in the an array
          }

     }
     return thesmallNum;
}

int main()
{
     

     int anrray[100];// initialazing an array
     for(int i=0; i<100; ++i)
     {
          anrray[i]=randNum(100);
     }
     for(int i=0; i<100; ++i)
     {
          printf("%d\n", anrray[i]);
     }

     
     int thesmallNum=smallestEl(anrray,100);
     int theBigNum= largestEL(anrray,100);
     printf("the largest number is :%d ",theBigNum);
     printf("the smallest number :%d ",thesmallNum);
    
    
    return 0;
}

 int even(int num )
{
bool calculate= true;
 
     if(calculate%2==0)
     {
          calculate = true;
     }
     else
     {
          calculate= false;   
     }
 return calculate;
}





int main()
{
    int calculation =even;
    bool number= true;

     printf("enter number please: ");
     scanf("%d");
     printf("%d",calculation);
     return 0;

}

/*int gcd(int r1, int r2 )
{
     int min;
     int rslt;
     if(r1<r2)
     {
          min=r1;
     }
     else
     {
          min=r2;
     }

     for(int i=1 ; i<=min; ++i)
     {
          if ((r1%i==0)&&(r2%i==0))
          {
               rslt=i;
          }
     }    
     return rslt;
}
float absulteValueOfNumber( float number)
{
     float absolute;
     if (number<0)
     {
     absolute=-number;
     }
     else
     absolute=number;
     return absolute ;
}*/
int squareRoot(int number1)
{
     
     int root = -1;
     for(int i=1;i<=number1; i++)
     {
           if(i*i==number1)
           {
                root=i;
           }
     }
     return root;
}

int main()
{
    /* int num1,num2;
     int gcdRslt;
     printf("Enter numbers:");
     scanf("%d",&num1);
     printf("Enter numbers:");
     scanf("%d",&num2);
     gcdRslt=gcd(num1,num2);
     printf("The results are: %d\n",gcdRslt);

     float abSoluTe;
     printf("please enter your absolute number:\n");
     scanf("%f",&abSoluTe);
     abSoluTe=absulteValueOfNumber(abSoluTe);
     printf("Your absolute number is: %.2f\n",abSoluTe);*/

     int num;
     int sqRoot;
     printf("please your number:");
     scanf("%d",&num);
     sqRoot=squareRoot(num);
     if (sqRoot==-1)
     {
          printf("there is no valid number for this number");
     }
     else
     {
          printf("the square root number is %d",sqRoot);
     }
     return 0;