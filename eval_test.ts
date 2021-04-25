// Let's say there's a custom, dangerous function
// we want to flag or ban. Because it's unique to *our*
// repo, it's not going to be covered by any tool
// out of the box. But no problem, this is easy with Semgrep!
function my_eval(str) {
    eval(str);
}

// Match a variable as an argument
// ruleid:juice-shop-eval
my_eval(some_var);

// Match a hard-coded string
// ruleid:juice-shop-eval
my_eval("ls");

// Can be part of a conditional statement
// ruleid:juice-shop-eval
if (my_eval() && true) {

    // Called inside a conditional or function call
    // ruleid:juice-shop-eval
    my_eval(a, b, c, d);
}

// Whitespace doesn't trip up Semgrep
// ruleid:juice-shop-eval
my_eval (foo);

// Or new lines
// ruleid:juice-shop-eval
my_eval (
  bar
);

// grep would flag this, but it's not an issue, it's in a comment
// my_eval(foo)

// grep would also flag this, but it's a string, not a function call
console.log("my_eval(bar)")

// In some cases, Semgrep can even reason about when a variable
// is definitely a hard-coded string
const x = "semgrep";
// ruleid:juice-shop-eval
my_eval(x);

var y = "r2c";
// ruleid:juice-shop-eval
my_eval(y);