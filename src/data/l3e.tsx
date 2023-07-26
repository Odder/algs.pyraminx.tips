import { AlgSet } from "./types";

const cases: AlgSet = {
  id: "l3e",
  name: "L3E",
  description: "...",
  subsets: [
    {
      id: "good",
      name: "Good",
      cases: [{
        name: "Sledge",
        variant: "solved",
        algs: [
          "R' L R L'",
        ],
      },
      {
        name: "Sledge",
        variant: "F",
        algs: [
          "L' U L U'",
        ],
      },
      {
        name: "Sledge",
        variant: "F'",
        algs: [
          "U' R U R'",
        ],
      },
      {
        name: "Hedge",
        variant: "solved",
        algs: [
          "L R' L' R",
        ],
      },
      {
        name: "Hedge",
        variant: "F",
        algs: [
          "U L' U' L",
        ],
      },
      {
        name: "Hedge",
        variant: "F'",
        algs: [
          "R U' R' U",
        ],
      },
      ],

    },

    {
      id: "bad",
      name: "Bad",
      cases: [{
        name: "CW Cycle",
        variant: "solved",
        algs: [
          "L R' L' R2 U' R' U",
        ],
      },
      {
        name: "CCW Cycle",
        variant: "solved",
        algs: [
          "R' L R L2' U L U'",
        ],
      },],
    },
    {
      id: "flippy",
      name: "Flippy",
      cases: [{
        name: "2-flip",
        variant: "solved",
        algs: [
          "L R' L' R U' R U R'",
        ],
      },
      {
        name: "2-flip",
        variant: "F",
        algs: [
          "L R' L' R L' U L U'",
        ],
      },
      {
        name: "2-flip",
        variant: "F'",
        algs: [
          "U' R U R' L R' L' R",
        ],
      },
      ],
    },
  ],
};

export default cases;