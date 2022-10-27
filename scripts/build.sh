#!/bin/sh
set -e

cd ..
rm -rf dist 

npm run build
cd -
