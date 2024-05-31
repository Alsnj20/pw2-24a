from picture import Picture
from chessPictures import *
from pieces import *

def test():
  for row in Picture(KING).verticalMirror():
    print(row)


if(__name__ == "__main__"):
  test()