#### Description

This is a repository for a project where I am learning how to use React-Query and Zustand. 
- React-Query is a library for managing remote and asynchronous data fetching.
  
- Zustand is a small, fast and flexible state management library.

#### Notes
- Create Project: `npm create vite react-query-zustand `
- Install dependencies: `npm i @tanstack/react-query react-query axios`
- create the global store
``` 
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useGlobalStore = create(
  persist( 👈 middleware 
    (set) => ({ 
      value: [], 👈 initial state
      fn: () => { set((state) => ({})); 👈  update state
      },
    { name: "name-storage" } 👈 Localstorage
  )
);

```


#### Project status

- [ ] Design UI/UX
- [x] Create React App ( Vite )
- [x] Create Custom Hook
- [x] Add React-Query
- [x] Add Zustand
- [x] Create a Global Store using Zustand
- [ ] Unit testing
- [ ] Production

| Name      | Time to complete  | Current Status | Finished                       | 
|------------|---------------|----------------|------------------------------------|
| React-Query-Zustand     |1 day |  Completed | ✅ done


#### Project Stack

\#React, \#React-Query, \#Zustand, \#GithubAPI