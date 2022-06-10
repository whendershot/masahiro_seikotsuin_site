const settings = {
  "name": "client",
  "state": {
    "frontity": {
      "url": "http://localhost",
      "title": "CodingDojo Solo Project",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      name: "main-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://wordpress"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
