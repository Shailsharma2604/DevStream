let nameList = [
  "Aarav Patel",
  "Aditi Sharma",
  "Akshay Desai",
  "Arun Kumar",
  "Aryan Singh",
  "Avani Shah",
  "Dia Verma",
  "Esha Gupta",
  "Ishaan Choudhary",
  "Kabir Mehta",
  "Kavya Sharma",
  "Kiran Joshi",
  "Mira Kapoor",
  "Neha Patel",
  "Nikhil Gupta",
  "Pooja Sharma",
  "Rahul Mehta",
  "Rajesh Singh",
  "Riya Verma",
  "Rohan Patel",
  "Sanjay Sharma",
  "Shreya Gupta",
  "Siddharth Joshi",
  "Tanya Kapoor",
  "Vikram Desai",
  "Vishal Kumar",
];

let complimentList = [
  "You're looking absolutely stunning in that traditional attire!",
  "Your intelligence and charm are truly admirable.",
  "Your smile brightens up my day like a ray of sunshine.",
  "Your impeccable manners reflect the richness of our Indian culture.",
  "I'm loving your sense of style! It's a perfect blend of tradition and trend.",
  "Your laughter is infectious and brings joy to everyone around you.",
  "I deeply appreciate your content and the value it brings to the community.",
  "You are a unique and perfect individual, shining brightly in your own way.",
  "Your presence lights up the room, spreading positivity and warmth.",
  "Sending you a virtual hug right now because you deserve it!",
  "That color suits you perfectly, enhancing your natural beauty.",
  "You're like a guiding light in the darkness, inspiring others with your brilliance.",
  "You're a true inspiration and a great role model for others.",
];
export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function generateRandomCompliment() {
  return complimentList[Math.floor(Math.random() * complimentList.length)];
}

export function generateRandomId(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
