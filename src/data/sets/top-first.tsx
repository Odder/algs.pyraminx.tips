import { AlgSet } from "../types";

const cases: AlgSet = {
  id: "top-first",
  name: "Top First",
  mask: "CORNERS:-DDD,CORNERS2:-DDD,EDGES:--III-",
  description: "The Top-First category focuses initially on solving a 'top' consisting of all the centres and three edges around one centre. These methods utilise strategic placement and orientation of edges to simplify the final step.",
  subsets: [
    {
      id: "keyhole",
      name: "Keyhole",
      cases: [
        {
          name: "Righty",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "R L R' L'",
          ],
        },
        {
          name: "Lefty",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L' R' L R",
          ],
        },
      ],
    },
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
          name: "Lefty right",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "U' R U R'",
          ],
        },
      ],
    },
    {
      id: "bell",
      name: "Bell",
      cases: [
        {
          name: "Righty",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "R' L R L'",
          ],
        },
        {
          name: "Lefty",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L R' L' R",
          ],
        },
        {
          name: "Bad Righty",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "R' R' L R L' R",
          ],
        },
        {
          name: "Bad Lefty",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L L R' L' R L'",
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
          avoid: true,
          algs: [
            "L R' L' R L' U L U'",
            "U' L' U' L U' R U R' U'"
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
            "U' R U R L' R'",
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
    {
      id: "nutella",
      name: "Nutella",
      cases: [
        {
          name: "0",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          avoid: true,
          algs: [
            "R' L R L' R L R' L'",
            "L R' L' R L' R' L R",
          ],
        },
        {
          name: "1 - CW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L R' L' R R",
          ],
        },
        {
          name: "1 - CCW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "R' L R L' L'",
          ],
        },
        {
          name: "2 - CW,CW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L R L' U B U'",
            "R U L' B L U'",
          ],
        },
        {
          name: "2 - CCW,CCW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "R' L' R U' B' U",
            "L' U' R B' R' U",
          ],
        },
        {
          name: "2 - CW,CCW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "R L R' L R' L'",
            "L' R' L R' L R",
          ],
        },
        {
          name: "2 - CCW,CW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L R L' R L' R'",
            "R' L' R L' R L",
          ],
        },
        {
          name: "3 - CCW,CCW,CCW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "R' L' U' B' U",
            "L' U' B' R' U",
          ],
        },
        {
          name: "3 - CW,CW,CW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L R U B U'",
            "R U B L U'",
          ],
        },
        {
          name: "3 - CW,CW,CCW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L R L U B U'",
          ],
        },
        {
          name: "3 - CCW,CCW,CW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "R' L' R' U' B' U",
          ],
        },
      ],
    },
    {
      id: "wo",
      name: "WO",
      cases: [
        {
          name: "0",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "",
          ],
        },
        {
          name: "1 - CW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L R L R' L'",
            "y' R' L' R L R y"
          ],
        },
        {
          name: "1 - CCW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "R' L' R' L R",
            "y L R L' R' L' y'"
          ],
        },
        {
          name: "2 - CW,CW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L R' L R L' R",
            "y' B U L' R L y U'",
          ],
        },
        {
          name: "2 - CCW,CCW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "y B' U' R L' R' y' U",
            "R' L R' L' R L'",
          ],
        },
        {
          name: "2 - CW,CCW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          avoid: true,
          algs: [
            "R L R L R' L' R",
            "L' R' L' R' L R L'",
            "y L' U' R U' B U R' y' U",
            "y' R U L' U B' U' L y U'",
          ],
        },
        {
          name: "2 - CCW,CW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          avoid: true,
          algs: [
            "y R U' B' U R' U L y' U'",
            "y' L' U B U' L U' R' y U",
            "R' L R L' R' L' R R",
            "L R' L' R L R L' L'",
          ],
        },
        {
          name: "3 - CCW,CCW,CCW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          avoid: true,
          algs: [
            "L R' L U y' L U L y U",
            "L R' L U y R U R y' U",
          ],
        },
        {
          name: "3 - CW,CW,CW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          avoid: true,
          algs: [
            "R' L R' U' y R' U' R' y' U'",
            "R' L R' U' y' L' U' L' y U'",
          ],
        },
        {
          name: "3 - CW,CW,CCW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "R U' B' U' L U'",
          ],
        },
        {
          name: "3 - CCW,CCW,CW",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L' U B U R' U",
            "R' L' U' R B R' U"
          ],
        },
      ],
    },
  ],
};

export default cases;