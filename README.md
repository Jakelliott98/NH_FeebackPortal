
# Customer Feedback Form & Portal

The project is a two part project which consists of a feedback form and portal. The form is accesible through scanning a QR code and pulls open a clinic specific form. The form has rating questions, comment section and dropdowns for clinician selects. The second part of the project is the portal which is a portal to highlight responses specifically trends, unhappy clients and overall satisfaction. The portal is a analytic portal with different graphs, question by question average ratings. Filters for month, assessment type and sorting functionality. Additionally, the portal allows configuration of the form questions and clinician dropdown options.

## Live Demo

https://nh-feedbackportal.netlify.app/

## Features

- Live UI and dataset - Pulls data from supabase and displays the data in graphs and tables.
- Configurable - Allows the admin to handle the clinician dropdown options and the form questions allowing for tailoring data based on site specific interests. 
- Authentication - Allows the data to be protected for authenticated users only. Each dataset is protected to a specific user.
- Filtering & Sorting - Allows users to filter the data based on time period, assessment type, clinician and sort by date or alphabetical order which makes it easy to make the date relevant.

## Tech Stack

HTML
CSS
JavaScript
React
Supabase
Clerk

## What I learned

The project was my first full real world project and taught me a lot. The main lessons have been highlighted below.

- Handling live datasets both from inputing data into a database and pulling data. This also provided me with a glimpse into SQL and the core basics.
- Using reducers. Previously, my practice projects all used states and props. Therefore, learing to use reducers gave me my first insight into state management and the pros and cons if different methods.
- Structuring projects. I used css modules for this project and tried to structure the project as closely to a professional layout as I know. This gave me a better understanding on how to structure but also think about code and the bigger picture of each component.  