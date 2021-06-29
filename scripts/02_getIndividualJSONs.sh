#!/bin/bash

for i in {0..25439}; do
  echo "$i"
  wget https://api.mooncat.community/traits/"$i" -O raw/"$i".json
done
