# svg-animated-map-plugin
DK Map is a WordPress plugin for an interactive svg map that shows cool things to do in the Kalispell MT area.

For the live demo, visit http://discoverkalispell.com

## Libraries
The plugin is built on the following libraries.
+ snap.svg
+ tippy.js

## Instructions
1. upload .svg file to /svg/ folder
2. add an ID to <svg> element
3. bind post & thumbnail to $posts_array on index.php (similar to lines 20-47)
4. add svg filename as a var on /js/main.js (similar to lines 88-101)
5. add var to array myLoadList on /js/main.js (similar to line 105)
6. bind file to animation type on /js/main.js (similar to lines 106-121)
7. add id from step 2 to /styles/styles.css (similar to lines 6 - 23)

## Behavior
SVG will animate on hover according to the animate binded from step 6. On click, a tooltip opens displaying the post thumbnail, excerpt and permalink.