# Vairn

The name **Vairn** comes from the idea that code should not be understood from a single fixed view, but through a continuous shift of perspective.

The initial **V** stands for **View**: the act of seeing, framing, and interpreting code.
The center sound, **air**, evokes a bird’s-eye perspective: the ability to rise above the codebase and see its architecture, dependencies, and structure as a whole.
The final **rn** carries the sense of **return** and **navigation**: moving back from the details to the larger system after diving into implementation.

Understanding code requires two complementary perspectives.

One is the bird’s-eye view: seeing architecture, relationships, boundaries, and flow.
The other is the bug’s-eye view: moving into functions, state, behavior, and the intent behind a single line.

**Vairn** is a Spatial IDE built for moving between those perspectives.
It treats code not as a pile of files, but as a layered structure that developers can navigate, inspect, and reshape.

Vairn is not only a place to write code.
It is a tool for seeing code, diving into it, returning from it, and turning understanding into structure.

## Run Vairn

```
git clone https://github.com/yu-ki-m/Vairn.git
cd Vairn
npm ci
npm run server:start "--" --project-root "{fullpath}" --data-dir "{fullpath}"
```
