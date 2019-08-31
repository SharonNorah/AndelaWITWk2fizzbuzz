function fizzBuzz(list1, list2) {
    // Your code here

    var lists = 0;
    lists = list1.concat(list2);
    var listlength = lists.length;
    //list = list1.length + list2.length;
    if (listlength % 3 === 0) {
        if (listlength % 5 === 0) {
            return "Fizzbuzz";
        } else {
            return "Fizz";
        }

    } else if (listlength % 5 === 0) {
        return "Buzz";
    } else {
        return listlength;
    }



}
module.exports = fizzBuzz; {
    console.log(fizzBuzz([1, 2, 3], [1, 2, 3, 4, 5]));
    console.log(fizzBuzz([1, 2, 3], []));
    console.log(fizzBuzz([1, 2, 3, 4, 5], []))
    console.log(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6]));

};
