#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int randNum(int max)

{
     int randomNumber = 0;
     time_t t;

     srand((unsigned) time(&t));
     randomNumber = rand() % (max+1);

     

     return randomNumber;
}

     
 

 