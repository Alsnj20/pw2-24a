from interpreter import draw
from chessPictures import *


tableRow1 = square.join(square.negative()).horizontalRepeat(4)
tableRow2 = tableRow1.negative()
draw(tableRow1.up(tableRow2).verticalRepeat(2))
