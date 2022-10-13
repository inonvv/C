 #include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main()
{
     /*int primeIndex=0;
     int index=0;
     int primeNum[100];
     primeNum[0] = 2;
     primeNum[1] = 3;*/
     int pNumber;
     bool isPrime=true;
     printf("enter number");
     scanf("%d",&pNumber);

     for (int count=pNumber-1; count>1;--count)
     {
          if(pNumber%count==0)
          {
               isPrime=false;
          }
     }
     if(isPrime==true)
     {
          printf("the number %d, is prime\n",pNumber);
     }
     else
     {
          printf("the number %d is not prime\n",pNumber);
     }

               




     return 0;
}

     
 

int main()
{
float i;
float num;
float sum;
float avg;
printf("pls input a number: ");
scanf("%f",&num);
	printf("The  numbers are:");
	for (i=1;i<=num;i++)
	{      
	printf("%.f,",i);
     sum= (sum+i);
     avg= sum/num;
     }
printf("the sum is: %.f\n",sum); 
printf("the avg is: %.1f\n",avg); 
//calculating sum of numbers and avrage.

return 0;

}

     
 

 
 int main()
{
int grades[10];  //array storing 10 values
int count=10;    // number of values to be read
long sum=0;    // sum of the numbers
float average =0.0f; // average of the numbers

printf("\nEnter the 10 grades:\n"); // prompt for the input

//read the ten numbers to be averaged          
for(int i=0;i<count;++i)                        	
{
printf("%2u>",+1);
scanf("%d",&grades[i]);     //read the grade    
sum+=grades[i]             // add to sum
}
average=(float)sum/count;
printf("\naverage of the ten grades entered is:%.2f\n"avarage);
{
return 0;

int arr[15]; 
    int i;  
       printf("\n\nRead and Print elements of an array:\n");
       printf("-----------------------------------------\n");	
  
    printf("Input 15 elements in the array :\n");  
    for(i=0; i<=15; i++)  
    {  
	    printf("element - %d : ",i);
        scanf("%d", &arr[i]);  
    }  
  
    printf("\nElements in array are: ");  
    for(i=0; i<=15; i++)  
    {  
        printf("%d  ", arr[i]);  
    } 
    printf("\n");	
return 0;
#define months 12
#define years 5
int main()
float rain [years][months]={

     {4.3,4.3,4.3,0.2,1.2,0.2,0.2,0.2,0.4,2.4,
     3.5,6.6,8.5,8.2,1.2,1.6,2.4,0.1,5.2,0, }
}
int years months;
float subtotal,total;
printf(YEARS/t/tRAINFALL)
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
     
     int anrray[6]={3,5,8,7,15,45};// initialazing an array
     int thesmallNum=smallestEl(anrray,6);
     int theBigNum= largestEL(anrray,6);
     printf("the largest number is :%d ",theBigNum);
     printf("the smallest number :%d ",thesmallNum);
    return 0;
}
