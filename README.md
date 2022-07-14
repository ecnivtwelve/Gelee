![Gelée](https://user-images.githubusercontent.com/32978709/179021920-f1ecc238-378f-4000-83cb-0fe04de28817.png)
##

Make stunning Electron apps on Gnome with components based on Gnome Human Interface Guidelines

## What does it looks like ?
![image](https://user-images.githubusercontent.com/32978709/179023311-49bb7180-a8b2-4b54-976b-c84554f45202.png)
Components and animations have been remade in CSS to look as closely as possible like a native app.

## Installation
Just import the JS and CSS files into a vanilla JS electron project.
```html
<link rel="stylesheet" href="../gel/gel.css">
<script src="../gel/gel.js"></script>
```

## Usage
Gelée uses custom HTML tags and JS functions like :
###### Examples for Searchbar
```html
<SearchBar>
  <InputField>
    <img src="assets/searchIcon.svg"/>
    <input id="mainInput" type="text" placeholder="Search">
  </InputField>
</SearchBar>
```
```js
Gel.SearchBar.toggle();
Gel.SearchBar.hide();
```
**All available components and functions will be available in the [wiki](https://github.com/ecnivtwelve/Gelee/wiki) very soon.**

## Why Gelée
GJS is really different from Node.js, and i thought that desktop app development on Gnome needed a
way to make cool apps with technologies most developers already know.
