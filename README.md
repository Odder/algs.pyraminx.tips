# algs.pyraminx.tips

## How to use

Install it and run:

```bash
npm ci
npm start
```

## How to contribute with algs

### I do not know how to use Git

* Create a new issue on GitHub ([GitHub Issues](https://github.com/Odder/algs.pyraminx.tips/issues/new/choose))
* Select the "Algorithms - Suggest" issue template.
* Update the title and replace the `[PLEASE SPECIFY]` with the relevant info, this will help identify the case a lot faster!
* Press the "Submit new issue" button
* Tada, you are done! 🎊

### I'm a magician! I can Git

* Fork the repo
* Update the data files accordingly
* Create a PR with your changes ❤️

## How to create a new Alg Set

### Creating the data file

Inside the folder `src/data/sets`, you can create a new file for your set.

Inside this file you will have to describe your set:

```typescript
import { AlgSet } from "../types";

const cases: AlgSet = {
  id: "l3e",
  name: "L3E",
  description: "Lorem ipsum",
  mask: "CORNERS:-D--,CORNERS2:-D--,EDGES:IDIDDI",
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
      ...
    },
  ]
};
```

* `id`: Used for routing, this wil be a part of the URL and will need to be in "kebab-case"
* `name`: Name of the set, this will be displayed on the website in menus and titles
* `description`: Description of the set, will be displayed when you are on the page
* `mask`: (optional) Used for displaying a pyraminx at the top of the page. There's no documentation for this
* `subsets[].id`: Used internally. Needs to be in "kebab-case"
* `subsets[].name`: Name of the subset, this will be displayed on the website in menus and titles
* `subsets[].cases[].name`: Name of the case, this will be displayed on the website"
* `subsets[].cases[].mask`: (optional) Used if you want to grey out pieces. There's no documentation for this"
* `subsets[].algs[]`: List the algs that are used for this case, read more about alg formatting later on"

### Alg formatting

The images are generated based on the algorithms listed in the datafile. In order to keep a consistent user experience across the page I ask you to follow following rules:

* **Reset to original position**: If you are doing a U-turn during your algorithm, make sure to "reset" the position by adding a U' at the end. Same goes for y rotations, make sure you "reset" at the end of the alg. If you have both U and y rotations that needs to be reset, always reset the rotation first
* **Do not use double moves**: If you want to use a double move in an alg, please write it out as 2 moves: "R R" instead of "R" and "L' L'" instead of "L2'". Double moves will be shown correctly as "R2" on the page this way and it allows the page to manipulate algs in a more predictable way. (move counts will count double moves as 1 move)

### Registering the set

Inside the file `src/data/AlgSets.tsx` you will have to import your new data-file:

```typescript
import { AlgSet } from "./types";
import L3E from "./sets/l3e";
...
import BEST_METHOD from "./sets/best-method"; // Add import here

type AlgSetMap = { [key: string]: AlgSet };

const algSetMap = {
  l4e: L4E,
  ...
  'best-method': BEST_METHOD, // Add set to mapping
} as AlgSetMap;

export const algSets = Object.values(algSetMap) as AlgSet[];
export default algSetMap as AlgSetMap;
```

###

When you run `npm run start`, you should see your new set on the page.