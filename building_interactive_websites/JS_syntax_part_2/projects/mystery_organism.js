// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
// Create organism object factory function
const pAequorFactory = (specimenNum, dna) => {
    return {
        specimenNum,
        dna,
        // Mutate one random base in DNA strand
        mutate() {
            const mutateIndex = Math.floor(Math.random() * this.dna.length);
            while (true) {
                let newBase = returnRandBase();
                if (newBase !== this.dna[mutateIndex]) {
                    this.dna[mutateIndex] = newBase;
                    break;
                };
            };
        },
        // Compare number of bases in common
        compareDNA(pAequor) {
            let inCommon = 0;
            for (let i = 0; i < this.dna.length; i++) {
                if (this.dna[i] === pAequor.dna[i]) {
                    inCommon++;
                };
            };
            return `Specimen #1 and Specimen #2 have ${Math.round((inCommon / this.dna.length) * 100)}% DNA in common.`;
        },
        // Check if >=60% of bases are C or G
        willLikelySurvive() {
            let baseCount = 0;
            for (let i = 0; i < this.dna.length; i++) {
                if (this.dna[i] === 'C' || this.dna[i] === 'G') {
                    baseCount++;
                };
            };
            if (baseCount / this.dna.length >= 0.6) {
                return true;
            } else {
                return false;
            };
        }
    };
};

pAequorArray = [];

for (let i = 1; i <= 30; i++) {
    pAequorArray.push(pAequorFactory(i, mockUpStrand()));
};




