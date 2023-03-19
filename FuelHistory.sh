#!/bin/bash

while [ 1 ]
do
	fuelData=$(node scraper.js);
    echo $fuelData
    echo $fuelData >> history.txt
    sleep 50
done

