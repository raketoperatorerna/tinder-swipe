import { ItemT } from "../../types";
import IMAGE_01 from "../images/one.jpg";
import IMAGE_011 from "../images/two.jpg";
import IMAGE_02 from "../images/three.jpg";
import IMAGE_022 from "../images/four.jpg";

const data: ItemT[] = [
    {
        id: 1,
        name: "Basic jeans",
        description: `5-pocket jeans in stretch cotton denim with a regular waist, zip fly and button, and slim legs.\n
Fit - Slim fit\n
Fabric -
\t - Shell: Cotton 99%, Elastane 1%
\t - Pocket lining: Polyester 65%, Cotton 35%`,
        images: [IMAGE_01, IMAGE_011],
        price: 299,
        sizes: ["S", "M", "L"],
        deliveryTime: "2-3 days",
      },
      {
        id: 2,
        name: "Black jeans",
        description: "Placeholder for description and size selection black jeans",
        images: [IMAGE_02, IMAGE_022],
        price: 399,
        sizes: ["S", "M", "L", "XL"],
        deliveryTime: "1-2 days",
    }
];

export default data;
