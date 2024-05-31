from interpreter import draw
from chessPictures import *
from picture import Picture

row1 = Picture(KNIGHT).join((Picture(KNIGHT)).negative())
draw(row1.up(row1.horizontalMirror()))