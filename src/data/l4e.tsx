import { AlgSet } from "./types";

const cases: AlgSet = {
  id: "L4E",
  name: "L4E",
  description: "...",
  subsets: [
    {
      id: "l3e",
      name: "L3E",
      cases: [
        {
          name: "Sledge",
          variant: "solved",
          setup: "",
          algs: [
            "R' L R L'",
          ],
        },
        {
          name: "Sledge",
          variant: "U",
          setup: "",
          algs: [
            "U' R' L R L' U",
          ],
        },
        {
          name: "Sledge",
          variant: "U'",
          setup: "",
          algs: [
            "U R' L R L' U'",
          ],
        },
        {
          name: "Hedge",
          variant: "solved",
          setup: "",
          algs: [
            "L R' L' R",
          ],
        },
        {
          name: "Hedge",
          variant: "U",
          setup: "",
          algs: [
            "U' L R' L' R U",
          ],
        },
        {
          name: "Hedge",
          variant: "U'",
          setup: "",
          algs: [
            "U L R' L' R U'",
          ],
        },
        {
          name: "CW Cycle",
          variant: "solved",
          setup: "",
          algs: [
            "L R' L' R2 U' R' U",
          ],
        },
        {
          name: "CW Cycle",
          variant: "U",
          setup: "",
          algs: [
            "U R U' R' L R' L' R",
            "U' L R' L' R2 U' R' U'",
          ],
        },
        {
          name: "CW Cycle",
          variant: "U'",
          setup: "",
          algs: [
            "R U' R' L R' L' R U",
            "U L R' L' R2 U' R'",
          ],
        },
        {
          name: "CCW Cycle",
          variant: "solved",
          setup: "",
          algs: [
            "R' L R L2' U L U'",
          ],
        },
        {
          name: "CCW Cycle",
          variant: "U",
          setup: "",
          algs: [
            "L' U L R' L R L' U'",
            "U' R' L R L2' U L",
          ],
        },
        {
          name: "CCW Cycle",
          variant: "U'",
          setup: "",
          algs: [
            "U' L' U L R' L R L'",
            "U R' L R L2' U L U",
          ],
        },
        {
          name: "Sexy",
          variant: "solved",
          setup: "",
          algs: [
            "U' R U R'",
          ],
        },
        {
          name: "Sexy",
          variant: "U",
          setup: "",
          algs: [
            "U R U R' U",
          ],
        },
        {
          name: "Sexy",
          variant: "U'",
          setup: "",
          algs: [
            "R U R' U'",
          ],
        },
        {
          name: "Ugly",
          variant: "solved",
          setup: "",
          algs: [
            "U L' U' L",
          ],
        },
        {
          name: "Ugly",
          variant: "U",
          setup: "",
          algs: [
            "L' U' L U",
          ],
        },
        {
          name: "Ugly",
          variant: "U'",
          setup: "",
          algs: [
            "U' L' U' L U'",
          ],
        },
      ]
    },
    {
      id: "last-layer",
      name: "Last Layer ",
      cases: [{
        name: "Lefty Bars",
        variant: "solved",
        setup: "",
        algs: [
          "R' U' L' U L R",
        ],
      },
      {
        name: "Lefty Bars",
        variant: "U",
        setup: "",
        algs: [
          "L R U R' U' L'",
        ],
      },
      {
        name: "Lefty Bars",
        variant: "U'",
        setup: "",
        algs: [
          "U R' U' L' U L R U'",
          "U' L R U R' U' L' U",
        ],
      },
      {
        name: "Righty Bars",
        variant: "solved",
        setup: "",
        algs: [
          "L U R U' R' L'",
        ],
      },
      {
        name: "Righty Bars",
        variant: "U",
        setup: "",
        algs: [
          "U R' L' U' L U R U'",
          "U' L U R U' R' L' U",
        ],
      },
      {
        name: "Righty Bars",
        variant: "U'",
        setup: "",
        algs: [
          "R' L' U' L U R",
        ],
      },
      {
        name: "Sune",
        variant: "solved",
        setup: "",
        algs: [
          "L' U L U L' U L",
          "L U L' U L U L'",
          "R' U R U R' U R",
          "R U R' U R U R'",
        ],
      },
      {
        name: "Anti-Sune",
        variant: "solved",
        setup: "",
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
      cases: [{
        name: "2 flip",
        variant: "solved",
        setup: "",
        algs: [
          "L R' L' R U' R U R'",
        ],
      },
      {
        name: "2 flip",
        variant: "U",
        setup: "",
        algs: [
          "U' L R' L' R U' R U R' U",
        ],
      },
      {
        name: "2 flip",
        variant: "U'",
        setup: "",
        algs: [
          "U L R' L' R U' R U R' U'",
        ],
      },
      {
        name: "D flip",
        variant: "solved",
        setup: "",
        algs: [
          "R U R' U L' U' L U'",
        ],
      },
      {
        name: "D flip",
        variant: "U",
        setup: "",
        algs: [
          "U' R U R' U L' U' L",
        ],
      },
      {
        name: "D flip",
        variant: "U'",
        setup: "",
        algs: [
          "U R U R' U L' U' L U",
        ],
      },
      {
        name: "4 flip",
        variant: "solved",
        setup: "",
        algs: [
          "R U' R' L' U L R U' R' L' U L",
        ],
      },],
    },
    {
      id: "polish-flip",
      name: "Polish Flip",
      cases: [{
        name: "Right Polish Flip",
        variant: "solved",
        setup: "",
        algs: [
          "R U' R' L' U' L U'",
        ],
      },
      {
        name: "Right Polish Flip",
        variant: "U",
        setup: "",
        algs: [
          "U' R U' R' L' U' L",
        ],
      },
      {
        name: "Right Polish Flip",
        variant: "U'",
        setup: "",
        algs: [
          "U R U' R' L' U' L U",
        ],
      },
      {
        name: "Left Polish Flip",
        variant: "solved",
        setup: "",
        algs: [
          "L' U L R U R' U",
        ],
      },
      {
        name: "Left Polish Flip",
        variant: "U",
        setup: "",
        algs: [
          "U' L' U L R U R' U'",
        ],
      },
      {
        name: "Left Polish Flip",
        variant: "U'",
        setup: "",
        algs: [
          "U L' U L R U R'",
        ],
      },
      {
        name: "SUS",
        variant: "solved",
        setup: "",
        algs: [
          "R' L R L' U' R' L R L' U",
        ],
      },
      {
        name: "HUH",
        variant: "solved",
        setup: "",
        algs: [
          "L R' L' R U L R' L' R U'",
        ],
      },],
    },
    {
      id: "separated-bar",
      name: "Separated Bar",
      cases: [{
        name: "Good Niky",
        variant: "solved",
        setup: "",
        algs: [
          "R U' R' L' U L",
        ],
      },
      {
        name: "Good Niky",
        variant: "U",
        setup: "",
        algs: [
          "R U R' L' U' L",
          "U' R U' R' L' U L U",
        ],
      },
      {
        name: "Good Niky",
        variant: "U'",
        setup: "",
        algs: [
          "U' R U R' L' U' L U",
          "U R U' R' L' U L U'",
        ],
      },
      {
        name: "Good Sochi",
        variant: "solved",
        setup: "",
        algs: [
          "L' U L R U' R'",
        ],
      },
      {
        name: "Good Sochi",
        variant: "U",
        setup: "",
        algs: [
          "U L' U' L R U R' U'",
          "U' L' U L R U' R' U",
        ],
      },
      {
        name: "Good Sochi",
        variant: "U'",
        setup: "",
        algs: [
          "L' U' L R U R'",
          "U L' U L R U' R' U'",
        ],
      },
      {
        name: "Bad Niky",
        variant: "solved",
        setup: "",
        algs: [
          "R U' R' U' L' U L U",
          "U R U R' U' L' U' L",
        ],
      },
      {
        name: "Bad Niky",
        variant: "U",
        setup: "",
        algs: [
          "R U R' U' L' U' L U",
          "U' R U' R' U' L' U L U'",
        ],
      },
      {
        name: "Bad Niky",
        variant: "U'",
        setup: "",
        algs: [
          "U R U' R' U' L' U L",
          "U' R U R' U' L' U' L U'",
        ],
      },
      {
        name: "Bad Sochi",
        variant: "solved",
        setup: "",
        algs: [
          "L' U L U R U' R' U'",
          "U' L' U' L U R U R'",
        ],
      },
      {
        name: "Bad Sochi",
        variant: "U",
        setup: "",
        algs: [
          "U' L' U L U R U' R'",
          "U L' U' L U R U R' U",
        ],
      },
      {
        name: "Bad Sochi",
        variant: "U'",
        setup: "",
        algs: [
          "U L' U L U R U' R' U",
          "L' U' L U R U R' U'",
        ],
      },
      {
        name: "Super Sledge",
        variant: "solved",
        setup: "",
        algs: [
          "R U' R2' L R L' U",
          "U' L R' L' R2 U' R'",
        ],
      },
      {
        name: "Super Sledge",
        variant: "U",
        setup: "",
        algs: [
          "U' R U' R2' L R L' U'",
          "U L R' L' R2 U' R' U",
        ],
      },
      {
        name: "Super Sledge",
        variant: "U'",
        setup: "",
        algs: [
          "U R U' R2' L R L'",
          "L R' L' R2 U' R' U'",
        ],
      },
      {
        name: "Super Hedge",
        variant: "solved",
        setup: "",
        algs: [
          "L' U L2 R' L' R U'",
          "U R' L R L2' U' L",
        ],
      },
      {
        name: "Super Hedge",
        variant: "U",
        setup: "",
        algs: [
          "U' L' U L2 R' L' R",
          "R' L R L2' U' L U",
        ],
      },
      {
        name: "Super Hedge",
        variant: "U'",
        setup: "",
        algs: [
          "U L' U L2 R' L' R U",
          "U' R' L R L2' U' L U'",
        ],
      },],
    },
    {
      id: "connected-bar",
      name: "Connected Bar",
      cases: [{
        name: "Right Spam",
        variant: "solved",
        setup: "",
        algs: [
          "R U R' U R' L R L' U",
          "U R U' R' L' U L R U' R'",
        ],
      },
      {
        name: "Right Spam",
        variant: "U",
        setup: "",
        algs: [
          "U' R U R' U R' L R L' U'",
          "R U' R' L' U L R U' R' U",
        ],
      },
      {
        name: "Right Spam",
        variant: "U'",
        setup: "",
        algs: [
          "U R U R' U R' L R L'",
          "U' R U' R' L' U L R U' R' U'",
        ],
      },
      {
        name: "Left Spam",
        variant: "solved",
        setup: "",
        algs: [
          "L' U' L U' L R' L' R U'",
          "U' L' U L R U' R' L' U L",
        ],
      },
      {
        name: "Left Spam",
        variant: "U",
        setup: "",
        algs: [
          "U' L' U' L U' L R' L' R",
          "U L' U L R U' R' L' U L U",
        ],
      },
      {
        name: "Left Spam",
        variant: "U'",
        setup: "",
        algs: [
          "U L' U' L U' L R' L' R U",
          "L' U L R U' R' L' U L U'",
        ],
      },],
    },
    {
      id: "no-bar",
      name: "No Bar",
      cases: [{
        name: "Bad Sexy",
        variant: "solved",
        setup: "",
        algs: [
          "L' U' L U' R U' R'",
        ],
      },
      {
        name: "Bad Sexy",
        variant: "U",
        setup: "",
        algs: [
          "U' L' U' L U' R U' R' U",
        ],
      },
      {
        name: "Bad Sexy",
        variant: "U'",
        setup: "",
        algs: [
          "U L' U' L U' R U' R' U'",
        ],
      },
      {
        name: "Bad Ugly",
        variant: "solved",
        setup: "",
        algs: [
          "R U R' U L' U L",
        ],
      },
      {
        name: "Bad Ugly",
        variant: "U",
        setup: "",
        algs: [
          "U' R U R' U L' U L U",
        ],
      },
      {
        name: "Bad Ugly",
        variant: "U'",
        setup: "",
        algs: [
          "U R U R' U L' U L U'",
        ],
      },
      {
        name: "Bad Righty",
        variant: "solved",
        setup: "",
        algs: [
          "L' U L U' R U R' U'",
        ],
      },
      {
        name: "Bad Righty",
        variant: "U",
        setup: "",
        algs: [
          "U' L' U L U' R U R'",
        ],
      },
      {
        name: "Bad Righty",
        variant: "U'",
        setup: "",
        algs: [
          "U L' U L U' R U R' U",
        ],
      },
      {
        name: "Bad Lefty",
        variant: "solved",
        setup: "",
        algs: [
          "R U' R' U L' U' L U",
        ],
      },
      {
        name: "Bad Lefty",
        variant: "U",
        setup: "",
        algs: [
          "U' R U' R' U L' U' L U'",
        ],
      },
      {
        name: "Bad Lefty",
        variant: "U'",
        setup: "",
        algs: [
          "U R U' R' U L' U' L",
        ],
      },
      {
        name: "Double Sexy",
        variant: "solved",
        setup: "",
        algs: [
          "R U' R' U' R U R' U",
          "U' R U' R' U R U R'",
          "U R U R' U' R U' R'",
        ],
      },
      {
        name: "Double Sexy",
        variant: "U",
        setup: "",
        algs: [
          "U' R U' R' U' R U R' U'",
          "U R U' R' U R U R' U",
          "R U R' U' R U' R' U",
        ],
      },
      {
        name: "Double Sexy",
        variant: "U'",
        setup: "",
        algs: [
          "U R U' R' U' R U R'",
          "R U' R' U R U R' U'",
          "U' R U R' U' R U' R' U'",
        ],
      },
      {
        name: "Double Ugly",
        variant: "solved",
        setup: "",
        algs: [
          "L' U L U L' U' L U'",
          "U L' U L U' L' U' L",
          "U' L' U' L U L' U L",
        ],
      },
      {
        name: "Double Ugly",
        variant: "U",
        setup: "",
        algs: [
          "U' L' U L U L' U' L",
          "L' U L U' L' U' L U",
          "U L' U' L U L' U L U",
        ],
      },
      {
        name: "Double Ugly",
        variant: "U'",
        setup: "",
        algs: [
          "U L' U L U L' U' L U",
          "U' L' U L U' L' U' L U'",
          "L' U' L U L' U L U'",
        ],
      },],
    },
  ],
};

export default cases;