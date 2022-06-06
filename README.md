Brief

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

- Only takes strings, separated with " ".
- return string with 5+ letter words reversed.
- no numbers.
- no additional spaces.
- Capital letters to be retained.



INPUT | OUTPUT

"test" | "test"
"This is a test" | "This is a test"

"Welcome" | "emocleW"
"Hey fellow warriors" | "Hey wollef sroirraw"

"This is another test" | "This is rehtona test"
"You are almost to the last test" | "You are tsomla to the last test"
"Just kidding there is still one more" | "Just gniddik ereht is llits one more"
"Seriously this is the last one" | "ylsuoireS this is the last one"