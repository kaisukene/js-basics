const person = {
	firstname:'Kadi',
	lastname : 'TRamm',
	age:16,
	email: 'kadi.tamm@gmaiul.com',
	hobbies: ['tennis','korvpall']
	address: {
		city:'Tallin',
		country: 'Harjumaa'
	},
	getBirthYear: function() { 
		return 2023 - this.age
	},
	showhobbies: function() { 
		this.hobbies.forEach(function(hibbie){
			console.log(hobbie)
		})
	},
	showAddressData: function(){
		for(addressKey in this.address)
			console.log(this.address[addressKey])
	}
}

let val = person.firstname
val = person.lastname
val =  person['lastname']
val = person.hobbies
val = person.hobbies[1]
val = person.address.city
val = person.getBirthYear()
person.showhobbies()
console.log(val)