#!/bin/sh
set -e

cd ..
echo "sdf"
rm -rf dist 

npm run build
cd -
echo "sdf"