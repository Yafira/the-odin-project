## Constant declaration
# are used for storing data that never needs to change.
MY_CONSTANT = 'I am available throughout your app.'

##  Global variable declaration
# are available throughout your entire app, overriding all scope boundaries.
$var = 'I am also available throughout your app.'

### Instance variable declaration
# are available throughout the current instance of the parent class.
@var = 'I am available throughout the current instance of this class.'

## Local variable declaration
# are declared by starting the variable name with neither $ nor @, as well as not capitalizing the entire variable name.
# obey all scope boundaries
var = 'I must be passed around to cross scope boundaries.'