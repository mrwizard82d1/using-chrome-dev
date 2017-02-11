doStuff = function() {
    console.log("hi");
    console.warn("uh oh");
    console.error("it broke!");
    console.debug("Squish, squish"); // Debug output
    console.info("Informative, isn't it"); // information
    console.assert(10 == 2 * 5); // an assert passes
    console.assert(2 + 2 == 5); // failing assertion logs an error
}
