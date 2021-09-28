// *** LOGICAL OPERATORS ***

alert( null || 2 || undefined );
// returns is 2 because it is the first truthy value

alert( alert(1) || 2 || alert(3) );
// returns alert(1) then 2 but not alert(3)
// alert(1) outputs 1, alert returns undefined so OR goes to the second operand searching for a truthy value
// the second operand is 2 because it's truthy, execution is then halted and doesn't reach alert(3)

alert( 1 && null && 2 );
// returns null, becasue it's the first falsey value

alert( alert(1) && alert(2) );
// returns 1 then undefined, && evaluates the left operand and outputs 1
// then it stops because undefined is a fasley value.

alert( null || 2 && 3 || 4 );
// returns 3, AND has higher precendence than OR so it executes first
// 2 && 3 = 3
// null || 3 || 4, result is 3


// Write an if condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.
if (age >= 14 && age <= 90)





// *** CONDITIONALS ***

// Will alert be shown?
if ("0") {
    alert( 'Hello' );
}
// Yes, any string except an empty one ("0" is not empty) becomes true in the logical context.


// Using if..else, write the code which gets a number via prompt and then shows in alert:
// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
let value = prompt('Type a number', 0);

if (value > 0) {
    alert( 1 );
} else if (value < 0) {
    alert( -1 );
} else {
    alert( 0 );
}

// Rewrite this if using the conditional operator '?':
let result;

if (a + b < 4) {
    result = 'Below';
} else {
    result = 'Over';
}
// Uisng '?'
let result = (a + b < 4) ? 'Below' : 'Over';

// Rewrite if..else using multiple ternary operators '?'
let message;

if (login == 'Employee') {
    message = 'Hello';
} else if (login == 'Director') {
    message = 'Greetings';
} else if (login == '') {
    message = 'No login';
} else {
    message = '';
}
// Uisng '?'
let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
    '';