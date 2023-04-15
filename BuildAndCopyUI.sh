#!/bin/bash
current_datetime=$(date +"%Y-%m-%d_%H-%M-%S")
packageName="dist_$current_datetime.tar"

pnpm run build

tar cvf "$packageName" dist/

scp "$packageName" dekai@152.67.97.43:/home/dekai/upload/"$packageName"
