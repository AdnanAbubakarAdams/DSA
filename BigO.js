/** Big O give us a precise, numeric and objective way of judging the performance of our code
 * The name Big O comes from the discipline of math and is used to describe the relationship between functions and their growth rates.
 * Big O is measured by TIME COMPLEXITY AND SPACE COMPLEXITY
 * Time complexity - the amount of time it takes to execute. It is measured in the number of steps an algorithm takes rather than measures of time like seconds or minutes.
  Space complexity - the amount of memory (RAM) required an algorithm needs to run.
  Each complexity can be described with notation like O(n): Where n represents the number of elements.
  Additionally, Big O can be represented visually with the execution time/memory on the y-axis and input size on the x-axis.
  As the input size increases the execution time can change, based on the algorithm being used

 */
  const artists = [
    {
      name: "Miles Davis",
      albums: [
        {
          title: "In a Silent Way",
          songs: ["Shhh/Peaceful", "In a Silent Way/It's About That Time"],
        },
        {
          title: "Milestones",
          songs: [
            "Dr. Jekyl",
            "Sid's Ahead",
            ///...
          ],
        },
      ],
    },
    {
      name: "Dolly Parton",
      albums: [
        {
          title: "Jolene",
          songs: [
            //...
          ],
        },
        {
          title: "9 to 5 and Other Odd Jobs",
          songs: [
            // ...
          ],
        },
      ],
    },
  ];