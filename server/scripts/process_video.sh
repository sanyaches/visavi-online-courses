#!/bin/bash

while getopts 's:o:' flag;
do
  case "${flag}" in
      s) source_path=${OPTARG};;
      o) output_path=${OPTARG};;
  esac
done
echo "Source path: $source_path";
echo "Output path: $output_path";
