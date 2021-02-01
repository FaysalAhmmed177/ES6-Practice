const ages1 = [22,23,25,24,26];
const ages2 = [18,19,20,22,27];
const ages3 = [23,26,25,27,78,34]
const allAges1 = ages1.concat(ages2).concat([5]).concat(ages3);
//console.log(allAges1);

//const allAges2 = [ages1 , ages2 , 5 ,ages3];
const allAges3 = [...ages1 , ...ages2 , 5 , ...ages3];
console.log(allAges3);

const business  = 650;
const minister = 450;
const sochib = 250;
//const maximum = Math.max(business,minister,sochib);

const takaPoysa = [250, 445 ,344 , 850];
const maximum = Math.max(...takaPoysa);
console.log(maximum);