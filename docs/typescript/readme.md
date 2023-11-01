# What and Why ?
- Add static type definitions to JS
    - bar.foo
    - property foo does not exist on type bar
- super set of JS. It is compiled (trans-piled) to JS, then run
- Use the latest features of JS
- Advanced features like Classes, interfaces, instance variable, access modifiers, decorators

# how can we run TS code ? 
    - Compile to JS ->  node, browser
    - Directly with ts-node
    - Bundle with a bundligtool (webpack, parcel) and run in browser

# Tyscript compiler (tsconfig.js)
- to start : tsc --init
```bash
{
  "compilerOptions": {
    "lib": [
      "DOM", # to user console.log()
      "ES6" # To use function of ES6
    ],
    "target": "ESNext", # what is the output in JS
    "rootDir": "src", # where is my tsc scripts
    "outDir": "dist" # output directory with js scripts
  }
}
```