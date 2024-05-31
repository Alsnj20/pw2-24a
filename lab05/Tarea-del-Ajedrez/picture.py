from colors import *
class Picture:
  def __init__(self, img):
    self.img = img

  def __eq__(self, other):
    return self.img == other.img

  def _invColor(self, color):
    if color not in inverter:
      return color
    return inverter[color]

  def verticalMirror(self):
    img = self.img[::-1]
    return Picture(img)

  def horizontalMirror(self):
    img = [row[::-1] for row in self.img]
    return Picture(img)

  def negative(self):
    img = [[self._invColor(char) for char in row] for row in self.img]
    return Picture(img)

  def join(self, other):
    img = []
    for i in range(len(self.img)):
      img.append(self.img[i] + other.img[i])
    return Picture(img)

  def up(self, p):
    return Picture(None)

  def under(self, p):
    """ Devuelve una nueva figura poniendo la figura p sobre la
        figura actual """
    return Picture(None)
  
  def horizontalRepeat(self, n):
    """ Devuelve una nueva figura repitiendo la figura actual al costado
        la cantidad de veces que indique el valor de n """
    return Picture(None)

  def verticalRepeat(self, n):
    return Picture(None)

  #Extra: Sólo para realmente viciosos 
  def rotate(self):
    """Devuelve una figura rotada en 90 grados, puede ser en sentido horario
    o antihorario"""
    return Picture(None)

