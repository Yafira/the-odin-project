## Assignment

- Implement a method #substrings that takes a word as the first argument and then an array of valid substrings (your dictionary) as the second argument. It should return a hash listing each substring (case insensitive) that was found in the original string and how many times it was found.


<code> dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

=>["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

substrings("below", dictionary)

=> { "below" => 1, "low" => 1 } </code>

- Next, make sure your method can handle multiple words:

<code> substrings("Howdy partner, sit down! How's it going?", dictionary)

  => { "down" => 1, "go" => 1, "going" => 1, "how" => 2, "howdy" => 1, "it" => 2, "i" => 3, "own" => 1, "part" => 1, "partner" => 1, "sit"

  => 1 } </code>


Quick Tips:
- Recall how to turn strings into arrays and arrays into strings.


----------------------
## Outcome
- This Ruby method searches a string parameter and counts occurrences of words from a dictionary parameter
<br>
<br>
<b>Parameters</b>
<br>
(String, Array)
<br>
<br>
<b>Returns</b>
<br>
Hash

### Findings
- How to iterate over an array, create a hash, and modify a hash.


