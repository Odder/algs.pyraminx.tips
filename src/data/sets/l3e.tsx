import { AlgSet } from "../types";

const cases: AlgSet = {
  id: "l3e",
  name: "L3E",
  mask: "CORNERS:-D--,CORNERS2:-D--,EDGES:IDIDDI",
  description: " Standing for \"Last Three Edges\", the L3E is the concluding step in top-first solving methods. After arranging the 'top' of the Pyraminx, the final challenge involves strategically solving the remaining three edges on the same face.",
  subsets: [
    {
      id: "good",
      name: "Good",
      cases: [
        {
          name: "Sledge",
          algs: [
            "R' L R L'",
          ],
        },
        {
          name: "Hedge",
          algs: [
            "L R' L' R",
          ],
        },
      ],
    },
    {
      id: "bad",
      name: "Bad",
      cases: [
        {
          name: "CW Cycle",
          algs: [
            "L R' L' R R U' R' U",
          ],
        },
        {
          name: "CCW Cycle",
          algs: [
            "R' L R L' L' U L U'",
          ],
        },
      ],
    },
    {
      id: "flippy",
      name: "Flippy",
      cases: [
        {
          name: "2-flip",
          algs: [
            "L R' L' R U' R U R'",
          ],
          variants: [
            {
              name: "F",
              algs: [
                "L R' L' R L' U L U'",
              ],
            },
            {
              name: "F'",
              algs: [
                "U' R U R' L R' L' R",
              ],
            },
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