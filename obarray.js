var course ={
    name: 'Javascript Applications',
    awesome:true,
    teachers:['Assaf', 'Shane'],
    students:[
        {
            name:'Steve',
            computer: {
                OS: 'Linux',
                type: 'Laptop'
            }
        },
        {
            name: 'Katy',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        },
        {
            name: 'Chuck',
            computer:{
                OS: 'OSX',
                type:'macbook'
            }
        }
    ],
    preRegs : {
        skills : ['html', 'css', 'git'],
        equipment:{
            laptop: true,
            OSOptions:['linux', 'osx']
        }
    }
};
console.log(course[0]);
console.log(course.teacher[1]);
console.log(course.student[0]);
console.log(course.student[1].computer.type);
console.log(course.preRegs.equipment);
console.log(course.preRegs.equipment.OSOptions[1]);


var i=0
var osxlist =[];
while(i<course.students.length){
    if course.student[i].computer.os === "OSX"
    osxlist.push(course.student[i].name);i++
}
console.log(osxlist);
