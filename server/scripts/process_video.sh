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

ffmpeg -i $source_path -s 160x90 -c:v libx264 -b:v 250k -g 90 -an "${output_path}_video_160x90_250k.mp4"
ffmpeg -i $source_path -s 320x180 -c:v libx264 -b:v 500k -g 90 -an "${output_path}_video_320x180_500k.mp4"
ffmpeg -i $source_path -s 640x360 -c:v libx264 -b:v 1000k -g 90 -an "${output_path}_video_640x360_1000k.mp4"
ffmpeg -i $source_path -s 1280x720 -c:v libx264 -b:v 1500k -g 90 -an "${output_path}_video_1280x720_1500k.mp4"
# ffmpeg -i $source_path -s 1920x1080 -c:v libx264 -b:v 2000k -g 90 -an "${output_path}_video_1920x1080_2000k.mp4"

ffmpeg -i $source_path -c:a aac -b:a 128k -vn "${output_path}_audio_128k.mp4"


MP4Box -dash 5000 -rap -profile dashavc264:onDemand -mpd-title BBB \
  -out "${output_path}.mpd" \
  -frag 2000 \
  "${output_path}_audio_128k.mp4" \
  "${output_path}_video_160x90_250k.mp4" \
  "${output_path}_video_320x180_500k.mp4" \
  "${output_path}_video_640x360_1000k.mp4" \
  "${output_path}_video_1280x720_1500k.mp4"
  # "${output_path}_video_1920x1080_2000k.mp4"
