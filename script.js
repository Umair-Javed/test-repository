
var umair = {
    name: 'Umair',
    height: 165,
    mass: 78,
    calcBMI: function(){
        return this.mass/(this.height*this.height);
    }
}

var sohaib = {
    name: 'Sohaib',
    height: 165,
    mass: 75,
    calcBMI: function(){
        return this.mass/(this.height*this.height);
    }
}

var umairBMI = umair.calcBMI();
var sohaibBMI = sohaib.calcBMI();

if(umairBMI<sohaibBMI){console.log('Sohaib has greater BMI then Umair');}
else if(umairBMI>sohaibBMI){console.log('Umair has greater BMI then Sohaib');}
else{console.log('Same BMI')}
