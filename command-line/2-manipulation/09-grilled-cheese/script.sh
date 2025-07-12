#!/bin/bash
cd recipe/american
echo "Ingredients:" > grilled-cheese.txt
echo "- Bread 🍞" >> grilled-cheese.txt
echo "- Cheese 🧀" >> grilled-cheese.txt
echo "- Butter 🧈" >> grilled-cheese.txt
echo -e "\n" >> grilled-cheese.txt
echo "Instructions:" >> grilled-cheese.txt
echo "1. Place a piece of cheese between two bread slices" >> grilled-cheese.txt
echo "2. Add butter to the outside of the sandwich" >> grilled-cheese.txt
echo "3. Toast the sandwich until golden brown on both sides" >> grilled-cheese.txt
cat grilled-cheese.txt