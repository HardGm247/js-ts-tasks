/**
 * Write a function which returns a formatter function to format address based on input address data
 * Format should be the following: 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
module.exports.formatAddress = function formatAddress() {
  return function (data) {
    let street = data.street;
    let house = data.house
    let apartment = data.apartment;
    let city = data.city;
    let postalCode = data.postalCode;
    let country = data.country;
    let address  = street + ", " + house + ", " + apartment + ", " + city + ", " + postalCode + ", " + country;
    return address;
  }
};