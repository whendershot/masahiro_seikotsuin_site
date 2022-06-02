Name: William Hendershot
Project: A Solo Project for CodingDojo program
Stack: React, Express, WordPress, MySQL, Docker
GitHub: https://github.com/whendershot/masahiro_seikotsuin_site.git/

Description:
A simple site for a Japanese seikotsuin practice, a chiropractor.

Key Wants:
-give a basic description of the business and owner
-contact information and location relative to nearest train station
-communicate with Line phone app

Nice to haves:
-Internationalization for Japanese and English languages
-allow patients to sign in, reserve and track their appointments

Learning Goals:
-WordPress with a React front end rendering system
    -Wordpress "headless" mode with Frontity(?)
    -WordPress to allow easier content updating by business owner.
-Test Driven Development in JavaScript
    -No goal for WordPress testing kit at this time
-Docker deployment on a single server with multiple containers.
    -One container for the React client server and one for the WordPress API services.
    -Possibly additional container for mySql database for the WordPress server.
-Integrating Line API services into a React site to allow customers to call in from a QR code or link on site.
    -Possibly allow sign-in authentication services with Line?
-Desktop and mobile site versions

Week 1 features:
-Generate Docker compose files for frontend, WordPress, and MySql servers.
-Install WordPress and setup headless mode
-Create login, signup, and landing pages

Week 2 features:
-Line API integration
-Clean up CSS styling