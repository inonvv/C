#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <time.h>

int even(int num)
{
     bool calculate= true;

if(num%2==0)
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
     int number;
     bool isEeven;
     printf("enter number please: ");
     scanf("%d",&number);
     isEeven=even(number);
     printf("%d",isEeven);
     return 0;
}
//example 2
int even(int);

int main()
{
 int no,r=0;
 printf("Enter the number\n");
 scanf("%d",&no);
 
 r=even(no);
 
 if(r==0)
 printf("Given number is even");
 else
 printf("Given number is odd");
}
int even(int no)
{
 if(no%2==0)
 {
  return 0;
 }
 else
 {
  return 1;
 }
}