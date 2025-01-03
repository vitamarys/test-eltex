# Gulp Build System

A comprehensive Gulp-based build system for automating tasks such as HTML processing, SCSS compilation, image optimization (WebP conversion), JavaScript minification, and live reloading.

## Features

- **HTML processing**: Automatically replaces `.jpg` and `.png` references with `.webp`.
- **Image optimization**: Converts `.jpg` and `.png` images to WebP format and copies `.svg` files as-is.
- **SCSS compilation**: Compiles SCSS to CSS, adds vendor prefixes, and minifies CSS.
- **JavaScript minification**: Compresses JavaScript files with `terser`.
- **Live Reload**: Uses `browser-sync` for live reloading during development.

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v12 or later)
- **npm** (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### Development Mode

Run the following command to start the development server with live reload:

```bash
gulp dev
```

This will:

- Compile SCSS to CSS.
- Convert images to WebP.
- Minify JavaScript files.
- Start a local development server.
- Watch for changes in HTML, SCSS, images, and JavaScript.

### Build Tasks

#### Compile SCSS

```bash
gulp compileScss
```

Compiles SCSS files to CSS, adds vendor prefixes, and minifies the CSS output.

#### Convert Images to WebP

```bash
gulp convertToWebp
```

Converts `.jpg` and `.png` images to WebP format and copies `.svg` files to the `dist/images` directory.

#### Minify JavaScript

```bash
gulp minifyJs
```

Minifies all JavaScript files in the `src/js` directory and saves them in the `dist/js` directory.

#### Process HTML

```bash
gulp copyHtml
```

Replaces `.jpg` and `.png` references in HTML files with `.webp` and copies the processed HTML files to the `dist` directory.

### Watch Tasks

To watch for file changes and run corresponding tasks:

```bash
gulp watchFiles
```

## Project Structure

```
project-directory/
├── src/
│   ├── images/            # Source images
│   │   ├── example.jpg
│   │   ├── example.png
│   │   └── example.svg
│   ├── js/                # JavaScript source files
│   │   ├── app.js
│   │   └── utils.js
│   ├── scss/              # SCSS source files
│   │   └── styles.scss
│   └── index.html         # HTML source file
├── dist/                  # Compiled output files
│   ├── images/            # Optimized images
│   ├── js/                # Minified JavaScript
│   ├── css/               # Minified CSS
│   └── index.html         # Processed HTML
├── gulpfile.js            # Gulp configuration
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

## Dependencies

- [Gulp](https://gulpjs.com/): Task runner.
- [gulp-if](https://github.com/robrich/gulp-if): Conditionally run tasks.
- [gulp-webp](https://github.com/sindresorhus/gulp-webp): Converts images to WebP.
- [gulp-sass](https://github.com/dlmanning/gulp-sass): Compiles SCSS to CSS.
- [sass](https://sass-lang.com/): Dart Sass compiler.
- [gulp-clean-css](https://github.com/scniro/gulp-clean-css): Minifies CSS.
- [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer): Adds vendor prefixes to CSS.
- [browser-sync](https://browsersync.io/): Live-reloading server.
- [gulp-replace](https://github.com/lazd/gulp-replace): String replacement in files.
- [gulp-terser](https://github.com/terser/terser): Minifies JavaScript.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

