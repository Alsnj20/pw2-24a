from interpreter import draw
from chessPictures import *


tableRow = square.join(square.negative()).horizontalRepeat(4)
draw(tableRow.negative())
