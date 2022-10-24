1. 3 
   Reason: Since the variable 'i' is of the type 'var' it will have the function scope. At the end of the input the value of i will be 3 and hence it will output 3.
2. 150
   Reason: Since the variable 'discountedPrice' is of the type 'var' it will have the function scope. It will contain the last discounted price which will be 300 * 0.5 = 150
3. 150
   Reason: Since the variable 'finalPrice' is of the type 'var' it will have the function scope. It will contain the last final price of input i.e. 300 which will be 150
4. [50, 100, 150]
   Reason: Since all the variables are of the type 'var', they have the function scope and can be accessed. Since the discounted price is 0.5 times which is 50% and the prices were [100, 200, 300], the for loop first finds the price i.e. half of the original price and then rounds it off and then pushes to the discounted array. The prices pushed will be half of the original prices and returns the discounted array.
5. Error:
   Reason: Since the variable 'i' is of the type 'let' it will have the block scope. It is declared in the for loop and hence loses its value after the completion of the for loop
6. Error:
   Reason: Since the variable 'discountedPrice' is of the type 'let' it will have the block scope. It is declared in the for loop and hence loses its value after the completion of the for loop.
7. 150
   Reason: Since the variable 'finalPrice' is of the type 'let' it will have the block scope. It is declared first in the discountedPrices and then again in the for loop. So it has the scope of the complete function and the last input was at 300, so the value of finalPrice stored will be 150.
8. [50, 100, 150]
   Reason: Since all the variables are of the type 'let', they have the block scope and can be accessed only within the block. We have declared the 'discounted' array and the 'finalPrice' in the discountedPrices function scope and can be accessed throughout the function. Since 'i' and 'discountedPrices' are in the for loop and can only be accessed there. We are computing the calculations as mentioned in the 4th question and pushing it to the 'discounted' array. Since the 'discounted' array can be accessed in the 'discountedPrices' functions we return the same. Since the discounted price is 0.5 times which is 50% and the prices were [100, 200, 300], the for loop first finds the price i.e. half of the original price and then rounds it off and then pushes to the discounted array. The prices pushed will be half of the original prices and returns the discounted array.
9. Error:
   Reason: Since the variable 'i' is of the type 'const' we will not be able to modify its value. In the initialization of the for loop we declared its value to be 0 and when we are trying to increment it, it would give an error. Hence, it wouldn't print anything  Otherwise the value would have been what we initialized it to i.e. 0.
11. 3
   Reason: Since the variable 'length' is of the type 'const' and we have assigned it to the length of the array passed in it would remain the same and not change. Hence, it would output the length of the original prices i.e. 3 in this case.
11. [50, 100, 150]
    Reason: Even though we are using the 'const' type of variables we can still append in the array. So, we compute the discounted prices from the passed array and in the for loop for all the elements and push it to the 'discounted' array and then we return the array which results in [50, 100, 150]
12. a. student.name
    b. student["Grad Year"]
    c. student.greeting() //CHECK
    d. student['Favorite Teacher'].name
    e. student.courseLoad[0]
13. a. '32'
    Reason: '3' is a string and 2 gets added to the string
    b. 1
    Reason: Since it is subtraction, '3' as a string gets converted to a number and we get 1 as a result.
    c. 3
    Reason: Since 3 is a number and the value of null is 0, we get 3
    d. 3null
    Reason: Since '3' is a string, we concatenate 3 and null which gives us 3null.
    e. 4
    Reason: Since we are adding a number and the value of true is 1, we get 4 to be the result.
    f. 0
    Reason: Since the value of false is 0 and null is also 0 and we are doing a numeric addition. hence the resultant will be 0.
    g. '3undefined'
    Reason: Since we are adding undefined to the second part to a string i.e., '3' which concatenates it and becomes the aforementioned.
    h. NaN
    Reason: Since we are subtracting undefined from a string which becomes to a number and undefined has a value of NaN, hence the result is NaN.
14. a. True
    Reason: Since the string '2' gets converted to a number and 2 > 1 is true and hence the result is true.
    b. False
    Reason: Since we are comparing 2 strings so we compare the first character first and 2 > 1, so the result will be false
    c. True
    Reason: Since the String '2' gets converted to a number, and the value of both 2 and 2 are equal, so the result will be true.
    d. False
    Reason: Since we are comparing the types first and one is a number and the other is a string, so the result will be false.
    e. False
    Reason: True gets converted to 1 and we are comparing it with 2 and they aren't equal. So the result will be false
    f. True
    Reason: Boolean is true for all the values except (0, null, undefined, NaN, and ""). Hence, it is true and we are strictly comparing it with true and both are booleans hence it outputs true.
15. == is a regular equality operator whereas === is a strict equality operator. === compares without type conversion whereas == compares with type conversion.
    For example:
    a.  1 == true   //Returns true because the value of true is 1(conversion)
    b.  1 === true  //Returns false because there is a type mismatch i.e., number and boolean
16. part2-question16.js file
17. Result = [2, 4, 6]
    Irrespective of newArr being of the type 'const' we can still reassign or change its value, hence it will output [2, 4, 6]. The steps are as follows:
    Passing in the array [1, 2, 3] and the function to be doSomething
    doSomething simply takes in a number and doubles it and returns it back.
    We create a new Empty array and loop through the elements in the array passed in.
    We take every value in the array and pass it to do something and push the result (double of the each element) to the newArray. Hence the newArray which we return will give us [2, 4, 6]
18. part2-question18.js file
19. Output:
    1
    4
    3
    2
