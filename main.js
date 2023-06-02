// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  //console.log(returnRandBase()); // Will reutrn a single letter in arr
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  //console.log(mockUpStrand()); // This will return a new random array..
/*  
2.) 
Look over the starter code. There are two helper functions: returnRandBase() and mockUpStrand().

DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). When returnRandBase() is called, it will randomly select a base and return the base ('A','T','C', or 'G').

mockUpStrand() is used to generate an array containing 15 bases to represent a single DNA strand with 15 bases.

You’ll use these helper functions later to create your objects that represent P. aequor.
*/
//===========================================================================================
/*
3.
Since you need to create multiple objects, create a factory function pAequorFactory() that has two parameters:

The first parameter is a number (no two organisms should have the same number).
The second parameter is an array of 15 DNA bases.
pAequorFactory() should return an object that contains the properties specimenNum and dna that correspond to the parameters provided.

You’ll also add more methods to this returned object in the later steps.
*/

let pAequorFactory = (num, arr) => { // function with two params
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length); // This will select a random index in the DNA array.
      let newBase = returnRandBase(); // Used to get a new random base.
      // Have not used the while loop in a while....
      while (this.dna[randomIndex] === newBase) {
        newBase = returnRandBase;
      }

      this.dna[randomIndex] = newBase; // this will update the base at the random index with the new base.
      return this.dna; // is used to return the new mutated dna array
    }
  }  
};
  const organism = pAequorFactory(1, mockUpStrand());
  console.log('Original DNA:', organism.dna);
  organism.mutate();
  console.log('Mutated DNA:', organism.dna);

// Based on 4.) below I will test out calling the instance 
/*
4.) ^^^^^^^ (Completed)
Your team wants you to simulate P. aequor‘s high rate of mutation (change in its DNA).

To simulate a mutation, in pAequorFactory()‘s returned object, add the method .mutate().

.mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.

For example, if the randomly selected base is the 1st base and it is 'A', the base must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again.
*/
