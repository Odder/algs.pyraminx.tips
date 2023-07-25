import { AlgSet } from "./types";

const cases: AlgSet = {
  id: "top-first",
  name: "TopFirst",
  description: "...",
  subsets: [
    {
      id: "oka",
      name: "Oka",
      cases: [
        {
          name: "Righty - 0",
          variant: "solved",
          setup: "",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "R U' R' U",
          ],
        },
        {
          name: "Righty - 0",
          variant: "bad",
          setup: "",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "U L' U' L",
          ],
        },
        {
          name: "Lefty - 0",
          variant: "solved",
          setup: "",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L' U L U'",
          ],
        },
        {
          name: "Lefty - 0",
          variant: "bad",
          setup: "",
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
          variant: "solved",
          setup: "",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L R' L' R L' U L U'",
          ],
        },
        {
          name: "1 - CW",
          variant: "solved",
          setup: "",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L U' L' R' L R U",
          ],
        },
        {
          name: "1 - CCW",
          variant: "solved",
          setup: "",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "R' U R L R' L' U'",
          ],
        },
        {
          name: "2 - CW,CW",
          variant: "solved",
          setup: "",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L U' R U",
          ],
        },
        {
          name: "2 - CCW,CCW",
          variant: "solved",
          setup: "",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "R' U L' U'",
          ],
        },
        {
          name: "2 - CW,CCW",
          variant: "solved",
          setup: "",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "R L R' U' R' U",
            "U' L' R' L U L",
          ],
        },
        {
          name: "2 - CCW,CW",
          variant: "solved",
          setup: "",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L' U' L' R L U",
            "U R U R L' R'",
          ],
        },
        {
          name: "3 - CCW,CCW,CCW",
          variant: "solved",
          setup: "",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "R' U' B' U' L' U'",
          ],
        },
        {
          name: "3 - CW,CW,CW",
          variant: "solved",
          setup: "",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L U B U R U",
          ],
        },
        {
          name: "3 - CW,CW,CCW",
          variant: "solved",
          setup: "",
          mask: "CORNERS:----,CORNERS2:----,EDGES:--III-",
          algs: [
            "L U B' U R U",
          ],
        },
        {
          name: "3 - CCW,CCW,CW",
          variant: "solved",
          setup: "",
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