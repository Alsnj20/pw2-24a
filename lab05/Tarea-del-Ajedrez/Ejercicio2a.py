from interpreter import draw
from chessPictures import *
from picture import Picture

#row1 = knight.join(knight.negative)
#row2 = (knight.negative).join(knight)

row1 = Picture(KNIGHT).join((Picture(KNIGHT)).negative())
draw(row1.up(row1.negative()))