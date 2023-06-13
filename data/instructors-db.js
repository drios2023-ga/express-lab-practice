
const instructors = [
    {name: 'Matt Huntington', title: 'Head Instructor'},
    {name: 'Yulia Glushenko', title: 'Associate Instructor'},
    {name: 'Jason Horst', title: 'Associate Instructor'},
    {name: 'Alexis Peves', title: 'Homework Instructor'}
]

module.exports = {
    getInstructors: function(){
        return instructors;
    }
}