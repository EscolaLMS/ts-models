# Escola LMS (Wellms) TypeScript Definitions

[npm](https://www.npmjs.com/package/@escolalms/ts-models) | [typedoc page](https://escolalms.github.io/ts-models/)

## Automatic transformation of Eloquent Models and Request rules to TypeScript Definition

This package transforms all Eloquent Models defined in

- main [composer.json](composer.json)
- config [typescript.php](config/typescript.php)

to Typescript definitions

- pure [definitions](models.d.ts)
- generated [typedoc](https://escolalms.github.io/ts-models/)

## Installing

1. install dependencies `npm i @escolalms/ts-models` or `yarn add @escolalms/ts-models`
2. import in main `index.d.ts` (if you have one)

```js
import "@escolalms/ts-models";
```

3. add this to `tsconfig` in include section

```json
  "include": ["node_modules/@escolalms/ts-models"]
```

The above is declaring namespaces, example ns `EscolaLms.StationaryEvents.Models.StationaryEvent` that are take from PHP namespace.

Below is example

```ts
export async function stationaryEvents(
  params: API.PaginationParams & {
    name?: string;
  },
  options?: Record<string, any>
) {
  return request<
    API.DefaultMetaResponse<EscolaLms.StationaryEvents.Models.StationaryEvent>
  >(`/api/admin/stationary-events`, {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
```

## Adding new packages

1. Add new package to [composer.json](composer.json)
2. Set proper namespace and package path in the config [typescript.php](config/typescript.php)

## Releasing new version to `npm`

1. Run [generate](https://github.com/EscolaLMS/ts-models/actions/workflows/generate.yaml) action on main branch by pressing `re-run all jobs`
2. Wait until it's finished, new [models.d.ts](models.d.ts) should be pushed automatically to the repository
3. Once new [models.d.ts](models.d.ts) You create [new release](https://github.com/EscolaLMS/ts-models/releases/new) rest should be handled by [the script](.github/workflows/release.yaml)
4. Release version on GH is the same as on [npm](https://www.npmjs.com/package/@escolalms/ts-models) (done automatically)
