from interpreter import draw
from chessPictures import *


tableRow = square.join(square.negative()).horizontalRepeat(4)
darkPieces = rock.join(knight).join(bishop).join(queen).join(king).join(bishop).join(knight).join(rock).negative()
darkPawn = pawn.negative().horizontalRepeat(8)


rowsPiecesDark = darkPieces.under(tableRow).up(darkPawn.under(tableRow.negative()))

tableSquare = tableRow.up(tableRow.negative()).verticalRepeat(2)

rowPiecesLight = darkPawn.negative().under(tableRow).up(darkPieces.negative().under(tableRow.negative()))

draw(rowsPiecesDark.up(tableSquare).up(rowPiecesLight))