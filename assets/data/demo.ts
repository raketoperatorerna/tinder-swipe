import { DataT } from "../../types";
//import IMAGE_01 from "../images/01.jpg";
import IMAGE_01 from "../images/one.jpg";
import IMAGE_011 from "../images/two.jpg";
import IMAGE_02 from "../images/three.jpg";
import IMAGE_022 from "../images/four.jpg";
import IMAGE_03 from "../images/03.jpg";
import IMAGE_04 from "../images/04.jpg";
import IMAGE_05 from "../images/05.jpg";
import IMAGE_06 from "../images/06.jpg";
import IMAGE_07 from "../images/07.jpg";
import IMAGE_08 from "../images/08.jpg";
import IMAGE_09 from "../images/09.jpg";
import IMAGE_10 from "../images/10.jpg";

const data: DataT[] = [
    {
        id: 1,
        name: "Basic jeans",
        isOnline: true,
        match: "78",
        description: `5-pocket jeans in stretch cotton denim with a regular waist, zip fly and button, and slim legs.\n
Fit - Slim fit\n
Fabric -
\t - Shell: Cotton 99%, Elastane 1%
\t - Pocket lining: Polyester 65%, Cotton 35%`,
        price: 299,
        deliveryTime: "2-3 days",
        sizes: ["S", "M", "L"],
        images: [IMAGE_01, IMAGE_011],
      },
      {
        id: 2,
        name: "Black jeans",
        isOnline: false,
        match: "93",
        description: "Placeholder for description and size selection black jeans",
        price: 399,
        deliveryTime: "1-2 days",
        sizes: ["S", "M", "L", "XL"],
        images: [IMAGE_02, IMAGE_022],
    } /*
  {
    id: 3,
    name: "Ervin Howell",
    match: "45",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: false,
    message:
      "Oh, hee-hee, aha. Ha, ooh, hee, ha-ha, ha-ha. And I thought my jokes were bad.",
    image: IMAGE_03,
  },
  {
    id: 4,
    name: "John Lebsack",
    match: "88",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: true,
    message: "Bats frighten me. It's time my enemies shared my dread.",
    image: IMAGE_04,
  },
  {
    id: 5,
    name: "James Dietrich",
    match: "76",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: false,
    message: "It's not who I am underneath but what I do that defines me.",
    image: IMAGE_05,
  },
  {
    id: 6,
    name: "Patricia Schulist",
    match: "95",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: true,
    message:
      "You have nothing, nothing to threaten me with. Nothing to do with all your strength.",
    image: IMAGE_06,
  },
  {
    id: 7,
    name: "Chelsey Weissnat",
    match: "67",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: true,
    message:
      "Never start with the head. The victim gets all fuzzy. He can't feel the next... See?",
    image: IMAGE_07,
  },
  {
    id: 8,
    name: "Nicky Runol",
    match: "85",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    age: "27",
    location: "Irvine, CA",
    info1: 'Straight, Single, 5"10',
    info2: "Tea Totaller, Loves Photography & Travel",
    info3: "Beaches, Mountain, Cafe, Movies",
    info4: "Last seen: 23h ago",
    isOnline: true,
    message:
      "And as for the television's so-called plan, Batman has no jurisdiction.",
    image: IMAGE_08,
  },
  {
    id: 9,
    name: "Glenna Reichert",
    match: "74",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: true,
    message:
      "This is what happens when an unstoppable force meets an immovable object.",
    image: IMAGE_09,
  },
  {
    id: 10,
    name: "Kurtis DuBuque",
    match: "98",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: false,
    message:
      "You want order in Gotham. Batman must take off his mask and turn himself in.",
    image: IMAGE_10,
  },*/,
];

export default data;
