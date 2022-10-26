def add_two_numbers():    
  print("Enter a number")
  num1 = input()
  print("Enter a second number")
  num2 = input()
  try:    
    result = int(num1) + int(num2)
    return result
  except:
    return "you think you're smarter than me punk? Try again"

# print(add_two_numbers())

# def fizzBuzz(number):
#   if number % 5 == 0:
#     return "Fizz"
#   if number % 3 == 0:
#     return "Buzz"
#   if number % 5 == 0 and number % 3 == 0:
#     return "FizBuzz"

# def counter():
#   for i in range(50):
#     print(fizzBuzz(i))

# name = "Richmond"

# print(10 % 3)


class Pizza:
  def __init__(self, name, toppings, slices):
    self.name = name
    self.toppings = toppings
    self.slices = slices
  
  def showcase_pizza(self):
    return f"this is a {self.name} with {self.toppings} and {self.slices} slices"
  
  def pizza_fight(self, other_pizza):
    other_pizza.slices -= 1
    self.slices += 1
    return f"{other_pizza.name} just got smacked upside the head and lost 1 slice! It now has {other_pizza.slices}"

pepperoni_pizza = Pizza("Pepperoni", ["pepperoni", "sauce", "cheese"], 8)
print(pepperoni_pizza.showcase_pizza())

cheese_pizza = Pizza("cheese", ["cheese", "sauce"], 8)
print(cheese_pizza.pizza_fight(pepperoni_pizza))
print(pepperoni_pizza.slices)
print(cheese_pizza.slices)
