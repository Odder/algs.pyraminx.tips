const cases = [
  {
    name: "Sledge",
    variant: 'solved',
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
    variant: 'solved',
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
    variant: 'solved',
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
    variant: 'solved',
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
    variant: 'solved',
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
    variant: 'solved',
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
];

export default cases;