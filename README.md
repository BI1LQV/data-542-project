# Project for data 542

## File Structure

```
|---ra1_lint_issues/        # codes for rearch 1 questions
|   |---extractor.ipynb     # extract code blocks from dataset 
|   |---analysis.ipynb      # analysis the 
|   |---package.json        # config for eslint
|   |---pnpm-lock.yaml      # config for eslint
|   |---eslint.config.mjs   # config for eslint
|   |---js_linter.sh        # bash shell for eslint report 
|   |---py_linter.sh        # bash shell for pylint report 
|   |---eslint_report.json  # report of eslint
|   |---py_linter.sh        # report of pylint
|
|---some_others/
|   |---a.ipynb
|   |---b.ipynb
|
|---LICENSE
|---README.md
```


## for ra1 lint issues

### Environment Preparations:

1. Install Node.js(https://nodejs.org/en) which is runtime for ESLint.

2. run `npm i -g pnpm` to install pnpm.

3. run `pnpm i` to install JavaScript dependencies.

4. run `pip install pylint` to install `pylint`.

5. put the dataset in `./data` folder

### Usage:

1. run `extractor.ipynb` first to extract all code snippets from dataset.

2. run `./py_linter.sh` and `./js_linter.sh` to generate lint report.

3. run `analysis.ipynb` to get the plots and analysis.

## License

[MIT](./LICENSE) License © 2025-PRESENT Aamna, Jason, Jiahao