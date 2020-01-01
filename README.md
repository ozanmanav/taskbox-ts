This is a example project following by the this example (https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/) but bootstrapped by Typescript.

Here, I used Typescript and configured project for the typescript development with Storybook.

- Applied Visual TDD
- Used Automated Testing (Snapshot, Unit Tests)
- Visual Regression Test (Chromatic - https://www.chromaticqa.com/ )
- Storybook deployed to Netlify can access here -> https://taskbox-ts-storybook.netlify.com/
- Redux used with Storybook

Recommend:
Visual Testing Handbook dives deep into using Storybook to visual test components. Free 31-page ebook.
(https://www.chromaticqa.com/book/visual-testing-handbook)

# Run the test runner (Jest) in a terminal:

yarn test

# Start the component explorer on port 9009:

yarn run storybook

# Run the frontend app proper on port 3000:

yarn start
