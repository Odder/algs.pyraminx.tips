import { AlgSet } from "./types";

const cases: AlgSet = {
  id: "top-first",
  name: "Top First",
  mask: "CORNERS:-DDD,CORNERS2:-DDD,EDGES:--III-",
  description: "The Top-First category focuses initially on solving a 'top' consisting of all the centres and three edges around one centre. These methods utilise strategic placement and orientation of edges to simplify the final step.",
  subsets: [
    {
      id: "oka",
      name: "Oka",
      cases: [
        {
          name: "Righty right",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "R U' R' U",
          ],
        },
        {
          name: "Lefty left",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L' U L U'",
          ],
        },
        {
          name: "Righty left",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "U L' U' L",
          ],
        },
        {
          name: "Lefty left",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "U' R U R'",
          ],
        },
      ],
    },
    {
      id: "one-flip",
      name: "1-flip",
      cases: [
        {
          name: "0",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L R' L' R L' U L U'",
          ],
        },
        {
          name: "1 - CW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L U' L' R' L R U",
          ],
        },
        {
          name: "1 - CCW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "R' U R L R' L' U'",
          ],
        },
        {
          name: "2 - CW,CW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L U' R U",
          ],
        },
        {
          name: "2 - CCW,CCW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "R' U L' U'",
          ],
        },
        {
          name: "2 - CW,CCW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "R L R' U' R' U",
            "U' L' R' L U L",
          ],
        },
        {
          name: "2 - CCW,CW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L' U' L' R L U",
            "U R U R L' R'",
          ],
        },
        {
          name: "3 - CCW,CCW,CCW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "R' U' B' U' L' U'",
          ],
        },
        {
          name: "3 - CW,CW,CW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L U B U R U",
          ],
        },
        {
          name: "3 - CW,CW,CCW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L U B' U R U",
          ],
        },
        {
          name: "3 - CCW,CCW,CW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "R' U' B U' L' U'",
          ],
        },
      ],
    },
  ],
};

export default cases;