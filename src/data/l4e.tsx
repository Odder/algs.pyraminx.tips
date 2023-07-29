import { AlgSet } from "./types";

const cases: AlgSet = {
  id: "l4e",
  name: "L4E",
  mask: "CORNERS:D---,CORNERS2:D---,EDGES:III--I",
  description: "The Last Four Edges (L4E) method, favoured in the V-first approach, begins with solving three centres connected by two edges, forming a 'V'. The final task involves employing a set of algorithms to arrange the remaining four edges.",
  subsets: [
    {
      id: "l3e",
      name: "L3E",
      cases: [
        {
          name: "Sledge",
          algs: [
            "R' L R L'",
          ]
        },
        {
          name: "Hedge",
          algs: [
            "L R' L' R",
          ],
        },
        {
          name: "CW Cycle",
          algs: [
            "L R' L' R R U' R' U",
          ],
          variants: [
            {
              name: "U",
              algs: [
                "U R U' R' L R' L' R",
                "U' L R' L' R R U' R' U'",
              ],
            },
            {
              name: "U'",
              algs: [
                "R U' R' L R' L' R U",
                "U L R' L' R R U' R'",
              ],
            },
          ],
        },
        {
          name: "CCW Cycle",
          algs: [
            "R' L R L' L' U L U'",
          ],
          variants: [
            {
              name: "U",
              algs: [
                "L' U L R' L R L' U'",
                "U' R' L R L' L' U L",
              ],
            },
            {
              name: "U'",
              algs: [
                "U' L' U L R' L R L'",
                "U R' L R L' L' U L U",
              ],
            },
          ],
        },
        {
          name: "Sexy",
          algs: [
            "U' R U R'",
          ],
        },
        {
          name: "Ugly",
          algs: [
            "U L' U' L",
          ],
        },
      ],
    },
    {
      id: "last-layer",
      name: "Last Layer ",
      cases: [
        {
          name: "Lefty Bars",
          algs: [
            "R' U' L' U L R",
          ],
          variants: [
            {
              name: "U",
              algs: [
                "L R U R' U' L'",
              ],
            },
          ],
        },
        {
          name: "Righty Bars",
          algs: [
            "L U R U' R' L'",
          ],
          variants: [
            {
              name: "U'",
              algs: [
                "R' L' U' L U R",
              ],
            },
          ],
        },
        {
          name: "Sune",
          algs: [
            "L' U L U L' U L",
            "L U L' U L U L'",
            "R' U R U R' U R",
            "R U R' U R U R'",
          ],
        },
        {
          name: "Anti-Sune",
          algs: [
            "L' U' L U' L' U' L",
            "L U' L' U' L U' L'",
            "R' U' R U' R' U' R",
            "R U' R' U' R U' R'",
          ],
        },],
    },
    {
      id: "flippy",
      name: "Flippy",
      cases: [
        {
          name: "2 flip",
          algs: [
            "L R' L' R U' R U R'",
          ],
        },
        {
          name: "D flip",
          algs: [
            "R U R' U L' U' L U'",
          ],
        },
        {
          name: "4 flip",
          algs: [
            "R U' R' L' U L R U' R' L' U L",
          ],
        },
      ],
    },
    {
      id: "polish-flip",
      name: "Polish Flip",
      cases: [
        {
          name: "Right Polish Flip",
          algs: [
            "R U' R' L' U' L U'",
          ],
        },
        {
          name: "Left Polish Flip",
          algs: [
            "L' U L R U R' U",
          ],
        },
        {
          name: "SUS",
          algs: [
            "R' L R L' U' R' L R L' U",
          ],
        },
        {
          name: "HUH",
          algs: [
            "L R' L' R U L R' L' R U'",
          ],
        },
      ],
    },
    {
      id: "separated-bar",
      name: "Separated Bar",
      cases: [
        {
          name: "Good Niky",
          algs: [
            "R U' R' L' U L",
          ],
          variants: [
            {
              name: "U",
              algs: [
                "R U R' L' U' L",
              ],
            },
          ],
        },
        {
          name: "Good Sochi",
          algs: [
            "L' U L R U' R'",
          ],
          variants: [
            {
              name: "U'",
              algs: [
                "L' U' L R U R'",
              ],
            },
          ],
        },
        {
          name: "Bad Niky",
          algs: [
            "R U' R' U' L' U L U",
            "U R U R' U' L' U' L",
          ],
        },
        {
          name: "Bad Sochi",
          algs: [
            "L' U L U R U' R' U'",
            "U' L' U' L U R U R'",
          ],
        },
        {
          name: "Super Sledge",
          algs: [
            "R U' R' R' L R L' U",
            "U' L R' L' R R U' R'",
          ],
        },
        {
          name: "Super Hedge",
          algs: [
            "L' U L L R' L' R U'",
            "U R' L R L' L' U' L",
          ],
        },
      ],
    },
    {
      id: "connected-bar",
      name: "Connected Bar",
      cases: [
        {
          name: "Right Spam",
          algs: [
            "R U R' U R' L R L' U",
            "U R U' R' L' U L R U' R'",
          ],
        },
        {
          name: "Left Spam",
          algs: [
            "L' U' L U' L R' L' R U'",
            "U' L' U L R U' R' L' U L",
          ],
        },
        {
          name: "Bad Sledge",
          algs: [
            "L R' L' R U' R U' R'",
          ],
        },
        {
          name: "Bad Hedge",
          algs: [
            "R' L R L' U L' U L",
          ],
        },
      ],
    },
    {
      id: "no-bar",
      name: "No Bar",
      cases: [
        {
          name: "Bad Sexy",
          algs: [
            "L' U' L U' R U' R'",
          ],
        },
        {
          name: "Bad Ugly",
          algs: [
            "R U R' U L' U L",
          ],
        },
        {
          name: "Bad Righty",
          algs: [
            "U' L' U L U' R U R'",
          ],
        },
        {
          name: "Bad Lefty",
          algs: [
            "R U' R' U L' U' L U",
          ],
        },
        {
          name: "Double Sexy",
          algs: [
            "R U' R' U' R U R' U",
            "U' R U' R' U R U R'",
            "U R U R' U' R U' R'",
          ],
        },
        {
          name: "Double Ugly",
          algs: [
            "L' U L U L' U' L U'",
            "U L' U L U' L' U' L",
            "U' L' U' L U L' U L",
          ],
        },
      ],
    },
  ],
};

export default cases;