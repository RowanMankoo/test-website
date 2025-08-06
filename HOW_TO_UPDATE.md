# How to Update Your Portfolio Website

This guide explains how to easily add and update content on your portfolio website without touching any code.

## Quick Start

Your website is organized so that all the content you need to change is in simple text files in the `data/` folder. You never need to edit the HTML, CSS, or JavaScript files.

## File Structure

```
zahra_website/
├── data/                    ← YOUR CONTENT GOES HERE
│   ├── artworks.json       ← Add/edit your artworks
│   ├── research.json       ← Add/edit research content  
│   ├── cv.json            ← Add/edit CV information
│   └── contact.json       ← Update contact information
├── images/                 ← PUT YOUR IMAGES HERE
├── index.html             ← Don't edit these
├── artworks.html          ← Don't edit these
├── research.html          ← Don't edit these
├── cv.html               ← Don't edit these
├── contact.html          ← Don't edit these
├── styles/               ← Don't edit these
└── js/                   ← Don't edit these
```

## Adding New Artworks

### Step 1: Add Your Image
1. Put your artwork image in the `images/` folder
2. Name it something descriptive like `painting-sunset-2024.jpg`

### Step 2: Update the artworks.json file
Open `data/artworks.json` and add your new artwork to both the "featured" and "all" sections:

```json
{
  "id": "unique-name",
  "title": "Your Artwork Title",
  "description": "Description of your artwork",
  "image": "images/your-image-filename.jpg",
  "year": "2024",
  "medium": "Oil on canvas"
}
```

**Example:**
```json
{
  "id": "sunset-dreams",
  "title": "Sunset Dreams",
  "description": "An exploration of color and light during golden hour",
  "image": "images/sunset-dreams-2024.jpg", 
  "year": "2024",
  "medium": "Acrylic on canvas"
}
```

### Important Notes:
- Add a comma `,` after the previous artwork entry
- Make sure the image filename matches exactly
- Each artwork needs a unique "id"
- "featured" artworks appear on the homepage
- "all" artworks appear on the artworks page

## Adding Research Content

Open `data/research.json` and add new entries:

```json
{
  "id": "unique-research-id",
  "title": "Your Research Title", 
  "date": "2024-01-15",
  "content": "Your research text goes here. This can be multiple paragraphs.",
  "image": "images/research-image.jpg"
}
```

## Updating Your CV

Open `data/cv.json` to add education, exhibitions, or awards:

### Adding Education:
```json
{
  "institution": "University Name",
  "degree": "Master of Fine Arts",
  "year": "2020-2022",
  "description": "Brief description of your studies"
}
```

### Adding Exhibitions:
```json
{
  "title": "Exhibition Name",
  "venue": "Gallery Name",
  "year": "2024", 
  "description": "Description of the exhibition"
}
```

### Adding Awards:
```json
{
  "title": "Award Name",
  "organization": "Organization Name",
  "year": "2024",
  "description": "Description of the award"
}
```

## Updating Contact Information

Open `data/contact.json` and update your details:

```json
{
  "email": "your-email@example.com",
  "phone": "+1 (555) 123-4567", 
  "location": "Your City, Country",
  "social": {
    "instagram": "@your_instagram",
    "website": "www.your-website.com"
  },
  "bio": "Write a brief bio about yourself here."
}
```

## Publishing to Netlify

### First Time Setup:
1. Create account at netlify.com (free)
2. Connect your GitHub account (if using GitHub)
3. Or drag and drop your entire `zahra_website` folder to Netlify

### Updating the Live Site:
- If using GitHub: Just push your changes and Netlify updates automatically
- If using drag-and-drop: Upload the updated folder to Netlify

## Important Tips

### Image Guidelines:
- Use JPG for photographs, PNG for graphics
- Keep file sizes under 1MB for faster loading
- Use descriptive filenames (no spaces, use hyphens)
- Images should be at least 800px wide for good quality

### JSON File Rules:
- Always use double quotes `"` not single quotes `'`
- Don't forget commas `,` between entries
- Last entry in a list should NOT have a comma
- Use a JSON validator online if you get errors

### Testing Your Changes:
- Open `index.html` in your web browser to preview
- Check that all images load correctly
- Make sure all pages work before uploading to Netlify

## Common Issues

**Images not showing?**
- Check the filename matches exactly in the JSON file
- Make sure the image is in the `images/` folder
- Check that the file isn't corrupted

**Website looks broken?**
- Validate your JSON files online
- Check for missing commas or quotes
- Make sure all curly braces `{}` and square brackets `[]` are closed

**Need help?**
- Use an online JSON validator to check your files
- Make small changes and test frequently
- Keep backups of working versions

## Example: Adding Your First Artwork

1. Save your artwork image as `images/my-first-painting.jpg`

2. Open `data/artworks.json`

3. Add this to both "featured" and "all" sections:
```json
{
  "id": "first-painting",
  "title": "My First Painting",
  "description": "This piece represents my journey into contemporary art", 
  "image": "images/my-first-painting.jpg",
  "year": "2024",
  "medium": "Oil on canvas"
}
```

4. Save the file and test by opening `index.html` in your browser

That's it! Your website is now updated with your new artwork.