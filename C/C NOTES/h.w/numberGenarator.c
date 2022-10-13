#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main()
{
     int primeIndex=0;
     int index=0;
     int primeNum [100];
     primeNum[0] = 2;
     primeNum[1] = 3;
     
     for (int count=0; count<100;++count)
     {
          primeNum[count] = count;
     }
     printf("%d, the prime number is:",primeNum)




     return 0;
}

     
 

 