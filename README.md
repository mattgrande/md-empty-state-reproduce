Reproduce for this issue: https://github.com/vuematerial/vue-material/issues/1614

1. `nvm use 9.8.0`
1. `yarn`
1. Open two terminal windows
1. In the first window, run `yarn startapi` (sets up a `json-graphql-server` environment on port 3000)
1. In the second window, run `yarn serve`
1. Navigate to `http://localhost:8080/#/assets`
1. Scroll to the bottom of the page

**Expected**

The end of the table.

**Actual**

You see the empty state