int main()
{
int num;
int rev;
printf("reverse number\n");
scanf("%d",&num);
while (num>0)
     {
      int temp;
      temp= num%10;
      num=num/10;
      rev=rev*10;
      rev+=temp;

      
     }
printf("reverse is %d",rev);