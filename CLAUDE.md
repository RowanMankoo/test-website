# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a website project for Zahra who is an artist and she would like to create a portfolio website. The website will ne hosted on netifly on the free tier.
some requirments to consider:
- she must easily be able to add new portoflio images to website so must be easily editable to add with detailed instructions
- so should have nice seperation of code fo website and pieces of info zahra can just go into and chnage

The strucutre of website should be main homepage with images of each art work, then some pages such as:
- artworks
    - images section
- research writing and images
- education and cv section
- contact me page


## Development Commands

This is a static HTML/CSS/JavaScript website that doesn't require build tools.

**Local Development:**
- Open `index.html` in a web browser to preview
- Use a local server for better testing: `python -m http.server 8000` then visit `http://localhost:8000`

**Content Management:**
- All content is managed through JSON files in the `data/` directory
- Images are stored in the `images/` directory
- See `HOW_TO_UPDATE.md` for detailed instructions on adding content

**Deployment:**
- Deploy to Netlify by dragging the entire folder to netlify.com
- Or connect to GitHub repository for automatic deployments

## Architecture

**File Structure:**
- `data/`: JSON files containing all website content (artworks, research, CV, contact)
- `images/`: All artwork and research images
- `js/`: JavaScript files that load content dynamically from JSON files
- `styles/`: CSS styling
- HTML pages: Static structure that gets populated with content

**Key Features:**
- Responsive design that works on mobile and desktop
- Dynamic content loading from JSON files
- Easy content management without touching code
- Optimized for Netlify free tier hosting

**Content Management System:**
- Zahra can update all content by editing JSON files in `data/` folder
- Images are added to `images/` folder and referenced in JSON
- No technical knowledge required for updates
- Detailed instructions provided in `HOW_TO_UPDATE.md`