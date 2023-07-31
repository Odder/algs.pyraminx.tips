import { AlgSet } from "../types";

const cases: AlgSet = {
  id: "ml4e-left",
  name: "ML4E-Left",
  mask: "CORNERS:D---,CORNERS2:D---,EDGES:II--II",
  description: "ML4E is a variant of L4E where you orient the V differently. The V in the Left set is oriented such that the unsolved edge piece on the bottom is on your left making the set L-turn heavy.",
  subsets: [
    {
      id: "l3e",
      name: "L3E",
      cases: [
        {
          name: "Sledge",
          avoid: true,
          algs: [
            "y' R' L R L' y",
          ],
        },
        {
          name: "Hedge",
          avoid: true,
          algs: [
            "y' L R' L' R y",
          ],
        },
        {
          name: "CW Cycle",
          algs: [
            "U' L L R' L' R L' U",
            "L U' R U' R' U' L'",
          ],
        },
        {
          name: "CCW Cycle",
          algs: [
            "U' L R' L R L' L' U",
            "L U R U R' U L'",
          ],
        },
        {
          name: "Righty",
          algs: [
            "L U' L' U",
          ],
        },
        {
          name: "Lefty",
          avoid: true,
          algs: [
            "y' L' U L U' y",
          ],
        },
        {
          name: "Sexy",
          algs: [
            "U' L U L'",
          ],
        },
        {
          name: "Ugly",
          avoid: true,
          algs: [
            "y' U L' U' L y",
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
          avoid: true,
          algs: [
            "U' L R U' R' L' U' L U L' U",
            "L2' U' L U R U' R' L"
          ],
        },
        {
          name: "Left Polish Flip",
          avoid: true,
          algs: [
            "L R U' R' L' U L U' L' U",
            "U' L2' U L R U R' U' L"
          ],
        },
        {
          name: "SUS",
          algs: [
            "L R U' R' R' L R L' L' U",
          ],
        },
        {
          name: "HUH",
          algs: [
            "L L R' L' R R U R' L' U'",
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
            "L R U R' L' U'",
          ],
        },
        {
          name: "Good Sochi",
          algs: [
            "L R U R' L' U'",
          ],
        },
        {
          name: "Bad Niky",
          algs: [
            "U L U R U' R' U' L'",
          ],
        },
        {
          name: "Bad Sochi",
          algs: [
            "L U R U R' U' L' U'",
          ],
        },
        {
          name: "Super Sledge",
          algs: [
            "L U R' L R L' L' U'",
            "U L L R' L' R U' L'",
          ],
        },
        {
          name: "Super Hedge",
          avoid: true,
          algs: [
            "y' L' U L L R' L' R y U'",
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
            "L U R U' R' U L' U'",
            "U L U' R U' R' L' U",
          ],
        },
        {
          name: "Left Spam",
          avoid: true,
          algs: [
            "L R U' R' R' L R L' U' L' U'",
          ],
        },
        {
          name: "Bad Sledge",
          algs: [
            "L R U R' U L' U",
            "U' L U' R U R' U' L' U'"
          ],
        },
        {
          name: "Bad Hedge",
          avoid: true,
          algs: [
            "y R' L' U' L U' R y' U'",
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
            "U L L R' L' R R U' R' L'",
            "y' L' U' L U' R U' R' y",
          ],
        },
        {
          name: "Bad Ugly",
          algs: [
            "L R U R' R' L R L' L' U'",
            "y' R U R' U L' U L y",
          ],
        },
        {
          name: "Bad Righty",
          algs: [
            "L U' L R' L' R U' L' U'",
          ],
        },
        {
          name: "Bad Lefty",
          algs: [
            "L U R' L R L' U L' U",
          ],
        },
        {
          name: "Double Sexy",
          algs: [
            "L U' L' U' L U L' U",
            "U L U L' U' L U' L'",
            "U' L U' L' U L U L'",
          ],
        },
        {
          name: "Double Ugly",
          avoid: true,
          algs: [
            "y R' U' R U' R' U R y' U",
            "y' L' U L U L' U' L y U'",
          ],
        },
      ],
    },
  ],
};

export default cases;