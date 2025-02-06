Here are some instructions about how to run these codes.

Environment Preparations:

1. Install Node.js(https://nodejs.org/en) which is runtime for ESLint.

2. run `npm i -g pnpm` to install pnpm.

3. run `pnpm i` to install JavaScript dependencies.

4. run `pip install pylint` to install `pylint`.

Code Exec:

1. run `extractor.ipynb` first to extract all code snippets from dataset.

2. run `./py_linter.sh` and `./js_linter.sh` to generate lint report.

3. run `analysis.ipynb` to get the plots and analysis.