declare module '*.png' {
  const value: string;
  export = value;
}

declare module '*.ico' {
  const value: string;
  export = value;
}


declare module '*.svelte' {
  import Svelte from 'svelte';
  export default Svelte;
}