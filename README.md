# Stoiq

A simple web application that displays random Stoic quotes with a clean, minimalist design.

## Features

- Random quote display on page load
- Black background with centered quote layout
- Responsive design using Bootstrap
- Manual quote management via JSON file
- Docker support for easy deployment

## Setup

### Docker Deployment (Recommended)

1. Build and run with Docker Compose:
```bash
docker-compose up --build
```

2. Open your browser and go to `http://localhost:3000`

The Docker setup automatically installs all dependencies including Express, Bootstrap, and Bootstrap Icons.

## Adding New Quotes

Edit the `quotes.json` file to add new quotes. The format is:

```json
{
  "quotes": [
    {
      "quote": "Your quote here",
      "author": "Author Name"
    }
  ]
}
```

## Project Structure

```
├── css/
│   └── style.css
├── html/
│   └── index.html
├── js/
│   └── app.js
├── quotes.json
├── server.js
├── Dockerfile
└── docker-compose.yml
```
