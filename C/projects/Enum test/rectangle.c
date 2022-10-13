#include <stdio.h>

 int main()
{
    
    //דוגמה של חישוב פשוט עם משתנים פשוטים
    double width=1.25;
    double height=2;
    double perimeter;
    double area;
    double surface;

    perimeter = 2*width + 2*height;
    area = width * height;
    surface = perimeter + area;

    printf("width is:%.1f, height is: %.1f, perimeter is : %.1f\n",width,height,perimeter);
    printf("area is : %.1f\n",area);
    printf("surface is : %.1f\n",surface);
   
    return 0;
}


   


