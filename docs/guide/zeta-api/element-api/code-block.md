# Code Block

Create a code block element.

## Signature

```TypeScript
function codeBlock(props: {
  lang: string;
  code: string;
}): Element;
```

## Parameters

- `props`: Object containing the language of the code block as well as the code.

## Returns

- A code block element.

## Examples

```TypeScript
zeta.v1.api.insert(
  zeta.v1.element.codeBlock({
    lang: "JavaScript",
    code: "[x, y] = [y, x];",
  })
);
```

## Supported languages

- Bash
- C
- C#
- C++
- Clojure
- CSS
- Dart
- Diff
- Dockerfile
- Elixir
- Elm
- Erlang
- Go
- GraphQL
- Groovy
- Haskell
- HTML
- Java
- JavaScript
- JSON
- Julia
- Kotlin
- Less
- Lisp
- Lua
- Makefile
- Markdown
- MATLAB
- Mathematica
- Nix
- Objective-C
- Perl
- PHP
- Protobuf
- Python
- R
- Ruby
- Rust
- SCSS
- Scala
- Scheme
- Shell
- Solidity
- SQL
- Swift
- Text
- TypeScript
- Verilog
- VHDL
- XML
- YAML
