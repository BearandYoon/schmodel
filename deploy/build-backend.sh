#!/bin/bash
rm -R ~/schmodel-registration-backend/schmodel-registration-backend
git clone https://ec2-54-246-224-86.eu-west-1.compute.amazonaws.com/schmodel/schmodel-registration-backend.git
cd schmodel-registration-backend/schmodel-registration-backend
mvn install
