#!/bin/bash
mkdir music-library
cd music-library

touch something-about-us.txt
touch skylark.txt
touch blue-in-green.txt

mkdir dance
mkdir jazz

mkdir daft-punk
mkdir chet-baker
mkdir miles-davis

echo "Something About Us - https://www.youtube.com/watch?v=em0MknB6wFo" > something-about-us.txt
echo "Skylark - https://www.youtube.com/watch?v=Sk0HWp1WupQ" > skylark.txt
echo "Blue in Green - https://www.youtube.com/watch?v=TLDflhhdPCg" > blue-in-green.txt

mv something-about-us.txt dance/
mv skylark.txt jazz/
mv blue-in-green.txt jazz/

cp dance/something-about-us.txt daft-punk/
cp jazz/skylark.txt chet-baker/
cp jazz/blue-in-green.txt miles-davis/

mkdir genres
mkdir artists

mv dance genres/
mv jazz genres/

mv daft-punk artists/
mv chet-baker artists/
mv miles-davis artists/

ls -R