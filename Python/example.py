# Types of Variables

name = "Matthew"
my_coworker = "Richard" #String
my_favorite_sentence = "The quick brown fox jumps over the lazy dogs." #String

my_favorite_num = 33
mY_Favorite_NUM = 44

is_hungry = True

pi = 3.14234234234

# print("My name is " + name + " and I like working with " + my_coworker)

# print(f"My name is {name} and I like working with {my_coworker}")

# print("My name is {} and I like working with {}".format(name, my_coworker))

students = ["AJ", "Kris", "Samuel", "Eyakem", 33, True, 3.15]
students[4] = "Matthew"
students.pop()
print(students)
students.append("Eyakem")
print(students)

new_student = {'name': 'AJ', 'age': 25, 'hobbies': 'cyber sec'}
print(new_student['hobbies'])

x = 15
if x > 20: # 15 > 20
  print("this number is greater than 20 or less than 50")
  x = 40
  print(x)
else:
  print("number is not greater than 20")

my_name = "Matthew"
my_name2 = "Matt222hew"

print(my_name != my_name2)
# x = 1 x < 10
for x in range(1, 10, 1):
  print(x)

for i in range(0, len(students)):
  if students[i] == "Matthew":
    students[i] = "Richard"
  print(students[i])


def say_hello(name):
  print("Hello " + name)

say_hello("Krisstopher")


print("hello!")

