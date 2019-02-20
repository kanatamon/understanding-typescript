/*
Basically, TypeScript-Compiler won't know about `$`, which is JQuery library.
So, you can't absolutely benefit to TypeScript. 

The way that make JQuery, which is a JavaScript library, to work with TypeScript
is to declare type definition. Letting the compiler know type of the wanna-used library.

The easiest way to do is to declare `$` to type any as did below.
```
declare var $: any;
```
With this way the compiler won't complain about any error, but you won't also
benefit to TypeScript neither

Note: If you want to use a library quickest, This is the best way to.


The other way to benefit the TypeScript is either to write specific type instead of type any. 
Then declare it to `$` like above code, or to install the type definition that others one did
you can download it directly to your project or install via npm.
```
npm install --save-dev @types/jquery
```  
Then with any configuration the compiler will automatically know where to find the defination
that will be any file in project ending with `*.d.ts`

Note: `*.d.ts` is where the type definition was written.
*/

$('button').click(function() {
  alert('Button was clicked!!');
  alert('Hello Nunan!!');
  alert('I\'m glad knew you, thanks :)');
  alert('I still full of hope to be waiting for you');
});