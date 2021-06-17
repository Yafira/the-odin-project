// FUNCTIONS BASICS

// Will the function work differently if else is removed?
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
      // ...
        return confirm('Did parents allow you?');
    }
}
// No difference

// Rewrite the function using '?' or '||'
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}
// using the '?' operator
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

// using ||
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

// Write a function min(a,b) which returns the least of two numbers a and b.
function min(a,b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// using the '?' operator
function min(a,b) {
    return a < b ? a : b;
}

// ARROW FUNCTIONS
// Replace Function Expressions with arrow functions
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
    );

// Rewrite with arrow functions
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);