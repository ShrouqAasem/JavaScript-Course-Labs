// Create a function that transforms an array of user objects into the following user
// object format.

// Function input example:
var detailedUsers = [
  {
    firstName: 'Ahmed',
    lastName: 'Ali',
    dateOfBirth: '1995-10-10',
    address: 'Alexadria, Egypt'
  },
  {
    firstName: 'Hossam',
    lastName: 'Mohamed',
    dateOfBirth: '1980-05-10',
    address: 'Nasr City, Cairo, Egypt'
  },
  {
    firstName: 'John',
    lastName: 'James',
    dateOfBirth: '1975-03-05',
    address: 'Nasr street, Nasr City, Cairo, Egypt'
  },
  {
    firstName: 'Tarek',
    lastName: 'Hassan',
    dateOfBirth: '1999-12-03',
    address: '15, street name, district, city, country'
  },
  {
    firstName: 'Hussein',
    lastName: 'Youssuf',
    dateOfBirth: '2005-12-03',
    address: 'abc, street name, district, city, country'
  }
];


  
  var output = [];
detailedUsers.forEach( user => {
  var obj = {};
  obj.fullName = user.firstName + ' ' + user.lastName;
  obj.age = new Date().getFullYear() - new Date(user.dateOfBirth).getFullYear();
  var address_array = user.address.split(', ');
  if (address_array.length === 2) {
    obj.country = address_array[1];
    obj.city = address_array[0];
  
  }
  else if (address_array.length === 3) {

    obj.country = address_array[2];
    obj.city = address_array[1];
    obj.district = address_array[0];
  }
  else if (address_array.length === 4) {

    obj.country = address_array[3];
    obj.city = address_array[2];
    obj.district = address_array[1];
    obj.streetName = address_array[0];
  }

  else if (address_array.length === 5) {

    obj.country = address_array[4];
    obj.city = address_array[3];
    obj.district = address_array[2];
    obj.streetName = address_array[1];
  
    if (typeof address_array[0] === "number") {
  
      obj.buildingNumber = address_array[0];
    }
  
  }

  output.push(obj);
}
)

console.log(output);

  

// Required function output:
var formattedUsers = [
  {
    fullName: 'Ahmed Ali',
    age: 27,
    country: 'Egypt',
    city: 'Alexadria',
  },
  {
    fullName: 'Hossam Mohamed',
    age: 42,
    country: 'Egypt',
    city: 'Cairo',
    district: 'Nasr City',
  },
  {
    fullName: 'John James',
    age: 47,
    country: 'Egypt',
    city: 'Cairo',
    district: 'Nasr City',
    streetName: 'Nasr street'
  },
  {
    fullName: 'Tarek Hassan',
    age: 23,
    country: 'country',
    city: 'city',
    district: 'district',
    streetName: 'street name',
    buildingNumber: 15
  },
  {
    fullName: 'Hussein Youssuf',
    age: 17,
    country: 'country',
    city: 'city',
    district: 'district',
    streetName: 'street name',
  }
];

/**
 * Notes:
 * - Address is always in the following format: 'building number, street name, district, city, country'
 * - Address has at least the city and country, if the rest is missing the missing properties 
 *   should not exist in the user.
 * - Age should be an integer. If age is float, ignore the fraction and do not round, for 
 *   example, 23.95 should be 23.
 * - buildingNumber should be a number not a string, if buildingNumber is not a valid number,
 *   it should be ignored.
 * - The original array should remain unchanged.
 */


  