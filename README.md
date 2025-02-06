# DATA 542 Project

This repository contains our project that explores the DevGPT dataset. This dataset contains information about conversations between developers and ChatGPT, and can be accessed from this repository: https://github.com/NAIST-SE/DevGPT/tree/main/snapshot_20230817

We have proposed three research questions and defined a methodology to answer each one, in hopes of better understanding any patterns or insights in the data. Our methods and findings are detailed in our final report. Each directory corresponds to the code written to answer the following research questions:

Research Question 1: What types of linter issues are common in the code generated by ChatGPT?

Research Question 2: How are AI-generated commits used in software development? Specifically, which programming language has the most AI-generated commits, what time of day are these commits made, how many make it to a pull request, and how long does it take for them to reach a PR?

Research Question 3: Can we reliably predict whether a developer’s issue will be resolved based on how old the conversation with ChatGPT is, or how often the issue is updated?

The file structure and requirements needed to run any code is listed below. 


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
|---JASONS-RQ2_FILE/
|   |---a.ipynb
|   |---b.ipynb
|
|---rq3_time_issues/
|   |---rq3.ipynb                             #code for research question 3
|   |---20230817_130502_issue_sharings.json   #original json file
|   |---issue.csv                             #json file converted to csv
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
