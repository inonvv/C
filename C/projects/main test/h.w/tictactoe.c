#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

const int SIZE =3;

bool vacant(int board[SIZE][SIZE],int choice)
{
     bool available = false;
     for(int i =0; i<SIZE; ++i)
     {  
          for (int j = 0; j < SIZE; ++j)
          {
               if(choice==board[i][j])
               {
                    available=true;
               }
          }
          
     } 
     return available;
}
 
 int turn(int player, int board[SIZE][SIZE])
 {
      int choice;
      printf("player %d turn\n",player);
      printf("choose your move!\n");
      scanf("%d" , &choice);
      while (!vacant(board,choice))
      {
           printf("slot already taken!!\n");
           scanf("%d",&choice);
      }
      
      for(int i =0; i<SIZE; ++i)
      {  
           for (int j = 0; j < SIZE; ++j)
           {
                if(choice==board[i][j])
                {
                     if(player==1)
                     {
                       board[i][j]=-1;
                     }
                     else
                     {
                          board[i][j]=0;
                     }
                }
           }
           
      } 
 }
 
void ticTacBoard( int board[SIZE][SIZE])
{
     for(int i =0; i<SIZE; i++)
     {
          for (int j = 0; j < SIZE; j++)
          {
               if(board[i][j]==-1)
               {
                    printf("x|");
               }
               else
               {
                    printf("%d|",board[i][j]);
               }
          }
          printf("\n");
     }
}

int mainDiagonal(int board[SIZE][SIZE])

{
     if(board[0][0]==-1&&board[1][1]==-1&&board[2][2]==-1)
     {
          return 1;
     }
     if(board[0][0]==0&&board[1][1]==0&&board[2][2]==0)
     {
          return 2;
     }
     return 0;
}

int secondaryDiagonal(int board[SIZE][SIZE])

{
     if(board[0][2]==-1&&board[1][1]==-1&&board[2][0]==-1)
     {
          return 1;
     }
     if(board[0][2]==0&&board[1][1]==0&&board[2][0]==0)
     {
          return 2;
     }
     return 0;
}

int checkRows(int board[SIZE][SIZE])
{
     for(int i=0; i<SIZE; ++i)
     {
          if(board[i][2]==-1&&board[i][1]==-1&&board[i][0]==-1)
          {
               return 1;
          }
          if(board[i][2]==0&&board[i][1]==0&&board[i][0]==0)
          {
               return 2;
          }
     }
     return 0;
}

int checkColumms(int board[SIZE][SIZE])
{
     for(int j=0; j<SIZE; ++j)
     {
          if(board[0][j]==-1&&board[1][j]==-1&&board[2][j]==-1)
          {
               return 1;
          }
          if(board[0][j]==0&&board[1][j]==0&&board[2][j]==0)
          {
               return 2;
          }
     }
     return 0;
}

bool checkTie(int board[SIZE][SIZE])
{
     bool isTie= true;
     for(int i=0;i<SIZE;++i)
     {
          for(int j=0;j<SIZE;++j)
          {
               if(board[i][j]!=0&&board[i][j]!=-1)
               {
                    isTie= false;
               }
          }
     }
     return isTie;
}

int untilWin(int board[SIZE][SIZE])
{
     if(mainDiagonal(board)==1)
     {
          return 1;
     }
     if(mainDiagonal(board)==2)
     {
          return 2;
     }

     if(secondaryDiagonal(board)==1)
     {
          return 1;
     }
     if(secondaryDiagonal(board)==2)
     {
          return 2;
     }

     if(checkRows(board)==1)
     {
          return 1;
     }
     if(checkRows(board)==2)
     {
          return 2;
     }

     if(checkColumms(board)==1)
     {
          return 1;
     }
     if(checkColumms(board)==2)
     {
          return 2;
     }
     if(checkTie(board) == true)
     {
          return 0;
     }
     return -1;
}

int main()
{
     int player = 1;
     int boraay[3][3]={{1,2,3}, {4,5,6}, {7,8,9}};
     ticTacBoard(boraay);
     int turnResult = -1;
     while (turnResult == -1)
     {
          if(player==1)
          {
               turn(1,boraay);
               player=2;
          }
          else
          {
               turn(2,boraay);
               player=1;
          }
          ticTacBoard(boraay);
          turnResult = untilWin(boraay);
     }
     
     if(untilWin(boraay)==1)
     {
          printf("Horray player 1 won!\n");
     }
     else if(untilWin(boraay)==2)
     {
          printf("Horray player 2 won!\n");
     }
     else 
     {
          printf("congratulation its a tie!");
     }
     return 0;
}

