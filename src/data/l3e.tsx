const cases = [
  {
    name: "Sledge",
    variant: "solved",
    setup: "",
    set: "L3E",
    subset: "Good",
    algs: [
      "R' L R L'",
    ],
  },
  {
    name: "Sledge",
    variant: "F",
    setup: "",
    set: "L3E",
    subset: "Good",
    algs: [
      "L' U L U'",
    ],
  },
  {
    name: "Sledge",
    variant: "F'",
    setup: "",
    set: "L3E",
    subset: "Good",
    algs: [
      "U' R U R'",
    ],
  },
  {
    name: "Hedge",
    variant: "solved",
    setup: "",
    set: "L3E",
    subset: "Good",
    algs: [
      "L R' L' R",
    ],
  },
  {
    name: "Hedge",
    variant: "F",
    setup: "",
    set: "L3E",
    subset: "Good",
    algs: [
      "U L' U' L",
    ],
  },
  {
    name: "Hedge",
    variant: "F'",
    setup: "",
    set: "L3E",
    subset: "Good",
    algs: [
      "R U' R' U",
    ],
  },
  {
    name: "CW Cycle",
    variant: "solved",
    setup: "",
    set: "L3E",
    subset: "Bad",
    algs: [
      "L R' L' R2 U' R' U",
    ],
  },
  {
    name: "CCW Cycle",
    variant: "solved",
    setup: "",
    set: "L3E",
    subset: "Bad",
    algs: [
      "R' L R L2' U L U'",
    ],
  },
  {
    name: "2-flip",
    variant: "solved",
    setup: "",
    set: "L3E",
    subset: "Flippy",
    algs: [
      "L R' L' R U' R U R'",
    ],
  },
  {
    name: "2-flip",
    variant: "F",
    setup: "",
    set: "L3E",
    subset: "Flippy",
    algs: [
      "L R' L' R L' U L U'",
    ],
  },
  {
    name: "2-flip",
    variant: "F'",
    setup: "",
    set: "L3E",
    subset: "Flippy",
    algs: [
      "U' R U R' L R' L' R",
    ],
  },
];

export default cases;