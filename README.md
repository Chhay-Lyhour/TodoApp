# TodoApp

A small React app built for the "lifted state, effects, fetch, and routing" module.

## Run it

```bash
npm install
npm run dev
```

## Routes

- `/todos` — the todo list (add, toggle, filter, clear completed)
- `/users` — user directory (fetched from an API)
- `/users/:id` — single user detail page, read via `useParams`
- any other path — 404 page

## Effects and what their cleanup prevents

- **Clock** (`src/components/Clock.jsx`): the interval cleanup stops the `setInterval` from firing after the component unmounts, which would otherwise call `setState` on an unmounted component and leak a timer.
- **UserDirectory** (`src/components/users/UserDirectory.jsx`): the `cancelled` flag stops a late-arriving fetch response from calling `setState` after the component has unmounted, avoiding a race condition with stale data.
- **UserDetail** (`src/components/users/UserDetail.jsx`): the `cancelled` flag stops a fetch for a previous `:id` from overwriting state after the user has already navigated to a different user, avoiding a flash of the wrong person's data.

## Requirements checklist

- [x] `TodoApp` owns the todos array; `AddTodo`, `TodoList`, and `FilterBar` only receive props and call callbacks
- [x] "Clear completed" works
- [x] Live effect (clock) with correct dependency array and cleanup
- [x] `UserDirectory` fetch with loading skeleton, error, empty, and data states, plus a `cancelled` flag
- [x] React Router: `/todos`, `/users`, `/users/:id`, and a 404 catch-all
- [x] Navigation via `Link` / `NavLink`, no page reloads
