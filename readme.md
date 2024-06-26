# Mutation testing examples using StrykerJS

It should be a universal truth that 100% code coverage doesn't mean good tests. It would be good if there was a tool that could help us increase the quality of our tests by identifying some of the more obvious issues with them.

Enter Mutation testing. Mutation testing reports on how many of our tests still pass when something (i.e. another developer) modifies some code in some way that should have resulted in a difference in the test results. If the tests still pass after this mutated code was introduced, then it indicates gaps in test quality.

It's also an additional tool for learning how to write better unit tests.

In summary, mutation testing is the process of testing the tests, another layer of quality control.

## This Project

- This project contains some examples of simple methods and unit tests that give 100% code coverage, however, for various reasons will fail StrykerJS's mutation tests.
- These tests are often contrived and deliberately bad for demo purposes.
- You will likely spot plenty of missing tests you would write in the real world - GOOD!
- Generally a mutation report won't be as bad as the one generated by this report, unless you're unfamiliar with unit testing.


## StrykerJS and other things

- See https://stryker-mutator.io/docs/mutation-testing-elements/supported-mutators/ for information about the supported mutation types for StrykerJS.
- Note that there are other types of mutations that Stryker.NET and Stryker4s would pick up that are not relevant to StrykerJS, these aren't covered by this project.

## General comments about mutation testing

- Sometimes when writing tests we forget to write tests to protect against future modifications.
- So, even experienced developers won't be infallible and could miss some scenarios.
- It's okay to not have a 100% mutation-free set of tests, this tool is to make you verify and validate your tests.

- NOTE: I've not been able to implement a Unary Operator Mutation example yet.

## Running locally

- ```npm install``` to install typescript, jest and strykerjs etc
- ```npm run test``` to run the tests
- ```npx strkyer run``` to generate the mutation report
  
