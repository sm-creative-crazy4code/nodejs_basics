//const items =['items1','item2']
 module.exports.items =['items1','item2'] //==> module.exports returns an objexct which we are setting equal to array

const person={
    name:'bob'
}
module.exports.singlePerson =person //==> module.exports returns an objexct which we are setting equal to the object person
//thoughwe had mot exported the code the code is not exported on its own Node 1wraps it inside the function and exports it


// Build in modules 
// Os
// Path
// Fs
// Http