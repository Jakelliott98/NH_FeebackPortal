

let rawdataReturned = [
  {
    "id": 1,
    "name": "John Doe",
    "clinician": "Dr. Smith",
    "responses": { "q1": 4, "q2": 5, "q3": 3, "q4": 2, "q5": 5 },
    "averageScore": 3.8,
    "comments": "Overall, a good experience.",
    "timestamp": "2025-08-20T09:15:00Z"
  },
  {
    "id": 2,
    "name": null,
    "clinician": "Dr. Adams",
    "responses": { "q1": 2, "q2": 3, "q3": 2, "q4": 1, "q5": 2 },
    "averageScore": 2.0,
    "comments": "I prefer to remain anonymous but not satisfied.",
    "timestamp": "2025-08-20T10:05:00Z"
  },
  {
    "id": 3,
    "name": "Emily Clark",
    "clinician": "Dr. Jones",
    "responses": { "q1": 5, "q2": 5, "q3": 4, "q4": 5, "q5": 5 },
    "averageScore": 4.8,
    "comments": "Fantastic service!",
    "timestamp": "2025-08-20T11:22:00Z"
  },
  {
    "id": 4,
    "name": "Michael Green",
    "clinician": "Dr. Smith",
    "responses": { "q1": 3, "q2": 3, "q3": 3, "q4": 3, "q5": 3 },
    "averageScore": 3.0,
    "comments": "Neutral experience.",
    "timestamp": "2025-08-20T12:41:00Z"
  },
  {
    "id": 5,
    "name": null,
    "clinician": "Dr. Adams",
    "responses": { "q1": 1, "q2": 2, "q3": 1, "q4": 2, "q5": 1 },
    "averageScore": 1.4,
    "comments": "Would not recommend.",
    "timestamp": "2025-08-20T13:07:00Z"
  },
  {
    "id": 6,
    "name": "Sophia Turner",
    "clinician": "Dr. Jones",
    "responses": { "q1": 5, "q2": 4, "q3": 4, "q4": 5, "q5": 5 },
    "averageScore": 4.6,
    "comments": "Friendly and professional.",
    "timestamp": "2025-08-20T13:55:00Z"
  },
  {
    "id": 7,
    "name": "Daniel White",
    "clinician": "Dr. Smith",
    "responses": { "q1": 2, "q2": 2, "q3": 3, "q4": 2, "q5": 2 },
    "averageScore": 2.2,
    "comments": "Not the best experience.",
    "timestamp": "2025-08-20T14:33:00Z"
  },
  {
    "id": 8,
    "name": "Ava Martinez",
    "clinician": "Dr. Adams",
    "responses": { "q1": 4, "q2": 4, "q3": 5, "q4": 4, "q5": 4 },
    "averageScore": 4.2,
    "comments": "Very satisfied.",
    "timestamp": "2025-08-20T15:12:00Z"
  },
  {
    "id": 9,
    "name": null,
    "clinician": "Dr. Jones",
    "responses": { "q1": 3, "q2": 4, "q3": 2, "q4": 3, "q5": 3 },
    "averageScore": 3.0,
    "comments": "Anonymous but decent service.",
    "timestamp": "2025-08-20T16:09:00Z"
  },
  {
    "id": 10,
    "name": "Chris Evans",
    "clinician": "Dr. Smith",
    "responses": { "q1": 5, "q2": 5, "q3": 5, "q4": 4, "q5": 5 },
    "averageScore": 4.8,
    "comments": "Highly recommend!",
    "timestamp": "2025-08-20T17:27:00Z"
  },
  {
    "id": 11,
    "name": "Olivia Brown",
    "clinician": "Dr. Adams",
    "responses": { "q1": 2, "q2": 3, "q3": 2, "q4": 3, "q5": 2 },
    "averageScore": 2.4,
    "comments": "Could be better.",
    "timestamp": "2025-08-20T18:05:00Z"
  },
  {
    "id": 12,
    "name": "Liam Wilson",
    "clinician": "Dr. Jones",
    "responses": { "q1": 5, "q2": 5, "q3": 4, "q4": 4, "q5": 5 },
    "averageScore": 4.6,
    "comments": "Smooth process.",
    "timestamp": "2025-08-20T19:02:00Z"
  },
  {
    "id": 13,
    "name": "Isabella Lee",
    "clinician": "Dr. Smith",
    "responses": { "q1": 4, "q2": 3, "q3": 4, "q4": 4, "q5": 3 },
    "averageScore": 3.6,
    "comments": "Helpful staff.",
    "timestamp": "2025-08-21T09:30:00Z"
  },
  {
    "id": 14,
    "name": null,
    "clinician": "Dr. Adams",
    "responses": { "q1": 1, "q2": 1, "q3": 2, "q4": 1, "q5": 1 },
    "averageScore": 1.2,
    "comments": "Poor experience.",
    "timestamp": "2025-08-21T10:14:00Z"
  },
  {
    "id": 15,
    "name": "James Scott",
    "clinician": "Dr. Jones",
    "responses": { "q1": 3, "q2": 3, "q3": 3, "q4": 3, "q5": 4 },
    "averageScore": 3.2,
    "comments": "Okay overall.",
    "timestamp": "2025-08-21T11:07:00Z"
  },
  {
    "id": 16,
    "name": "Mia Johnson",
    "clinician": "Dr. Smith",
    "responses": { "q1": 5, "q2": 4, "q3": 5, "q4": 5, "q5": 5 },
    "averageScore": 4.8,
    "comments": "Excellent treatment.",
    "timestamp": "2025-08-21T12:45:00Z"
  },
  {
    "id": 17,
    "name": "Noah Davis",
    "clinician": "Dr. Adams",
    "responses": { "q1": 2, "q2": 2, "q3": 2, "q4": 3, "q5": 2 },
    "averageScore": 2.2,
    "comments": "Not great.",
    "timestamp": "2025-08-21T13:11:00Z"
  },
  {
    "id": 18,
    "name": "Charlotte Hall",
    "clinician": "Dr. Jones",
    "responses": { "q1": 4, "q2": 5, "q3": 4, "q4": 4, "q5": 5 },
    "averageScore": 4.4,
    "comments": "Very happy.",
    "timestamp": "2025-08-21T14:20:00Z"
  },
  {
    "id": 19,
    "name": null,
    "clinician": "Dr. Smith",
    "responses": { "q1": 3, "q2": 3, "q3": 3, "q4": 2, "q5": 3 },
    "averageScore": 2.8,
    "comments": "Anonymous feedback.",
    "timestamp": "2025-08-21T15:37:00Z"
  },
  {
    "id": 20,
    "name": "Benjamin King",
    "clinician": "Dr. Adams",
    "responses": { "q1": 5, "q2": 5, "q3": 5, "q4": 5, "q5": 5 },
    "averageScore": 5.0,
    "comments": "Perfect service!",
    "timestamp": "2025-08-21T16:59:00Z"
  },
  {
    "id": 21,
    "name": "Amelia Carter",
    "clinician": "Dr. Jones",
    "responses": { "q1": 2, "q2": 3, "q3": 2, "q4": 2, "q5": 3 },
    "averageScore": 2.4,
    "comments": "Could improve.",
    "timestamp": "2025-08-21T17:30:00Z"
  },
  {
    "id": 22,
    "name": "Ethan Wright",
    "clinician": "Dr. Smith",
    "responses": { "q1": 4, "q2": 4, "q3": 3, "q4": 4, "q5": 4 },
    "averageScore": 3.8,
    "comments": "Happy with the outcome.",
    "timestamp": "2025-08-21T18:02:00Z"
  },
  {
    "id": 23,
    "name": "Harper Lewis",
    "clinician": "Dr. Adams",
    "responses": { "q1": 5, "q2": 4, "q3": 5, "q4": 4, "q5": 5 },
    "averageScore": 4.6,
    "comments": "Thank you for the care.",
    "timestamp": "2025-08-21T19:15:00Z"
  },
  {
    "id": 24,
    "name": null,
    "clinician": "Dr. Jones",
    "responses": { "q1": 1, "q2": 1, "q3": 1, "q4": 2, "q5": 1 },
    "averageScore": 1.2,
    "comments": "Not happy at all.",
    "timestamp": "2025-08-21T20:40:00Z"
  },
  {
    "id": 25,
    "name": "Lucas Baker",
    "clinician": "Dr. Smith",
    "responses": { "q1": 3, "q2": 4, "q3": 3, "q4": 3, "q5": 4 },
    "averageScore": 3.4,
    "comments": "Reasonable service.",
    "timestamp": "2025-08-22T09:12:00Z"
  },
  {
    "id": 26,
    "name": "Ella Morris",
    "clinician": "Dr. Adams",
    "responses": { "q1": 4, "q2": 5, "q3": 4, "q4": 5, "q5": 4 },
    "averageScore": 4.4,
    "comments": "Great experience.",
    "timestamp": "2025-08-22T10:05:00Z"
  },
  {
    "id": 27,
    "name": "William Harris",
    "clinician": "Dr. Jones",
    "responses": { "q1": 2, "q2": 2, "q3": 3, "q4": 2, "q5": 2 },
    "averageScore": 2.2,
    "comments": "Needs improvement.",
    "timestamp": "2025-08-22T11:18:00Z"
  },
  {
    "id": 28,
    "name": "Grace Martin",
    "clinician": "Dr. Smith",
    "responses": { "q1": 5, "q2": 5, "q3": 4, "q4": 5, "q5": 5 },
    "averageScore": 4.8,
    "comments": "Wonderful staff!",
    "timestamp": "2025-08-22T12:30:00Z"
  },
  {
    "id": 29,
    "name": "Henry Thompson",
    "clinician": "Dr. Adams",
    "responses": { "q1": 3, "q2": 3, "q3": 3, "q4": 3, "q5": 3 },
    "averageScore": 3.0,
    "comments": "Average service.",
    "timestamp": "2025-08-22T13:22:00Z"
  },
  {
    "id": 30,
    "name": null,
    "clinician": "Dr. Jones",
    "responses": { "q1": 4, "q2": 4, "q3": 4, "q4": 4, "q5": 4 },
    "averageScore": 4.0,
    "comments": "Anonymous but satisfied.",
    "timestamp": "2025-08-22T14:45:00Z"
  }
]

export default rawdataReturned;