#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

/*{
     char myString[]="My name is jason";
     char temp[50];
     strcpy(temp,myString,sizeof(temp) -1);
     printf("the length is %d", temp);
     return 0;
}*/

int reverse( int num)
{

int rev;
while (num>0)
     {
      int temp;
      temp= num%10;
      num=num/10;
      rev=rev*10;
      rev+=temp;
     }
     return rev;
}

int main()
{
int num;
int reversee;
printf("please enter number");
scanf("%d",&num);
reversee=reverse(num);
if(reversee==num)
{
     printf("your number is palindrome  %d",reversee);
}
else
{
printf("the number is invalid");
}

     return 0;
}