from picture import Picture
from chessPictures import *
from pieces import *
from interpreter import draw;

def test():
  p = Picture(ROCK).under(Picture(SQUARE))
  draw(p)
  
  
def printPicture(p):
  for row in p:
    print(row)

if(__name__ == "__main__"):
  test()