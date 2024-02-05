/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CONNECTION_STRING: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
