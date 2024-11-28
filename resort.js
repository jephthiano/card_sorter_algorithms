//DEFIEN AMYTU RESULT ARRAY
const resultArray = [];

function sortRule2(arrayData) {
    const ranking = [2, 3, 6, 8, 'Jack', 'Queen', 'King', 'Ace'];
    const resultArray = []

    ranking.forEach( (value) => {
        for (let i = 0; i < arrayData.length; i++){   
            
            if(arrayData[i] == value){
                if(arrayData.includes(value)){
                    const index = arrayData.indexOf(arrayData[i])
                    const x = arrayData.splice(index, 1);
                    // console.log(index);
                    resultArray.push(x[0]);
                }
                
            }
            
        }
    })

    return resultArray
}


function sortRule(arrayData){
    
    for(let i = 0; i < arrayData.length; i++){

        // DEFINE RULES THAT SORTS ARRAY WITH HIERARCHY LIST
        if(arrayData.includes(2)){
            //get the index of value from the array
            const index = arrayData.indexOf(2)

            // remove value from the array 
            
            arrayData.splice(index, 1);
            //return the value and the new array
            return {value: 2, arrayData};
        }

        if(arrayData.includes(3)){
            const index = arrayData.indexOf(3)
            arrayData.splice(index, 1);
            return {value: 3, arrayData};
        }

        if(arrayData.includes(6)){
            const index = arrayData.indexOf(6)
            arrayData.splice(index, 1);
            return {value: 6, arrayData};
        }

        if(arrayData.includes(8)){
            const index = arrayData.indexOf(8)
            arrayData.splice(index, 1);
            return {value: 8, arrayData};
        }

        if(arrayData.includes("Jack")){
            const index = arrayData.indexOf('Jack')
            arrayData.splice(index, 1);
            return {value: 'Jack', arrayData};
        }

        if(arrayData.includes('Queen')){
            const index = arrayData.indexOf('Queen')
            arrayData.splice(index, 1);
            return {value: 'Queen', arrayData};
        }

        if(arrayData.includes('King')){
            const index = arrayData.indexOf('King')
            arrayData.splice(index, 1);
            return {value: "King", arrayData};
        }

        if(arrayData.includes('Ace')){
            const index = arrayData.indexOf('Ace')
            arrayData.splice(index, 1);
            return {value: "Ace", arrayData};
        }
    }

}


// FUNCTION THAT RUNS THE SORTING
function recursiveFunction(arrayData){
    
    if(arrayData.length !== 0){
        //get value and new array data from sort Rule
        const result = sortRule(arrayData);
        
        //add value to new result  array
        resultArray.push(result.value);

        // assign the new  array to 
        const newArrayData = result.arrayData;

        // use the new array to re-run recursive fucntion until the array is empty
        recursiveFunction(newArrayData);
        
        return resultArray;
    } 

}

const firstData = [2, 3, 6, 'King', 'Jack', 'Queen', 'Ace', 8]

const secondData = firstData.concat(["Jack", "Queen", "King", "Ace"]);

console.log(recursiveFunction(secondData));