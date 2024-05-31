import esUnitaria as esUnitaria

def prueba(M):
  if(esUnitaria.esUnitaria(M)):
    print("Es unitaria")
  else:
    print("No es unitaria")

# Test 1
#Z = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# Test 2
#Z = [[1, 2, 3], [4, 1, 6], [7, 8, 1]]
# Test 3
Z = [[2, 0, 0], [0, 2, 0], [0, 0, 2]]
#Z = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
prueba(Z)