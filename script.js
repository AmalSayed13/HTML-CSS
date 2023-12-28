var Rectangle = {
    width: 5,
    height: 8,

    // Method to calculate area
    calculateArea: function () {
        return this.width * this.height;
    },

    // Method to calculate perimeter
    calculatePerimeter: function () {
        return 2 * (this.width + this.height);
    },

    // Method to display information
    displayInfo: function () {
        console.log("Rectangle Information:=> Width: " + this.width +"Height: " + this.height
        +"Area: " + this.calculateArea() +"Perimeter: " + this.calculatePerimeter());
    },
};

Rectangle.displayInfo();