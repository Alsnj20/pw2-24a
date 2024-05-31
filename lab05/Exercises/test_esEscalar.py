import esEscalar as esEscalar;

def prueba(M):
  if(esEscalar.esEscalar(M)):
    print("La matriz es escalar")
  else:
    print("La matriz no es escalar")


# Test 1
Z = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
prueba(Z)
# Test 2
Z = [[1, 2, 3], [4, 1, 6], [7, 8, 1]]
prueba(Z)
# Test 3
Z = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
prueba(Z)