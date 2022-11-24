// // code your solution here


function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun(`bathe my dog`);

function mondayWork (activity = `go to the office`){
    return `This Monday, I will ${activity}.`;
}

mondayWork();


function wrapAdjective(highlight = '*'){
    return function(adj = "a hard worker"){
        return `You are ${highlight}${adj}${highlight}!`;
    }
}
wrapAdjective();






// function saturdayFun(){
    
// }
// function saturdayFun(does ="roller-skate"){
//     return("This Saturday, I want to roller-skate!");
// }
// // function saturdayFun(){
// //    return ("This Saturday, I want to bathe my dog!");

// saturdayFun(`bathe my dog`);

// function mondayWork (activity = `go to the office`){
//     return `This Monday, I will ${activity}.`;
// }

// mondayWork();


// function wrapAdjective(highlight = '*'){
//     return function(adj = "a hard worker"){
//         return `You are ${highlight}${adj}${highlight}!`;
//     }
// }
// wrapAdjective();



