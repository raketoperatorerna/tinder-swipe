import { ProfilePreferencesT, ProfileAccountDetailsT, ProfileCreditCardInfoT, ProfileShippingAddressT } from "../../types";

const ProfilePreferencesDemo: ProfilePreferencesT[] = [
    {
      id: 1,
      itemPriceRange: [200, 600],
      sustainabilityPreference: [1, 2],
      sizesPreference: ["S", "M"]
    },
    {
      id: 2,
      itemPriceRange: [500, 1000],
      sustainabilityPreference: [3],
      sizesPreference: ["L", "XL"]
    },
];

const ProfileAccountDetailsDemo: ProfileAccountDetailsT[] = [
  {
    id: 1,
    name: "Karl Svensson",
    email: "karl.svensson@gmail.com",
    phoneNumber: 737489201,
    password: "hejhej",
  },
  {
    id: 2,
    name: "Oscar Andersson",
    email: "oscar.andersson@gmail.com",
    phoneNumber: 771829304,
    password: "misse",
  },
];

const ProfileCreditCardInfoDemo: ProfileCreditCardInfoT[] = [
  {
    id: 1,
    cardNumber: 2377892378723,
    expirationDate: new Date("2022-07-08"),
    cvv: 122,
  },
  {
    id: 2,
    cardNumber: 3272877583298523,
    expirationDate: new Date("2023-09-011"),
    cvv: 245,
  },
];

const ProfileShippingAddressDemo: ProfileShippingAddressT[] = [
  {
    id: 1,
    country: "Sweden",
    city: "Stockholm",
    postalCode: 12345,
    streetName: "Regeringsgatan",
    streetNumber: 4,
  },
  {
    id: 2,
    country: "Sweden",
    city: "Öresund",
    postalCode: 36789,
    streetName: "Hemliga stigen",
    streetNumber: 22,
  },
];

export {
  ProfilePreferencesDemo,
  ProfileAccountDetailsDemo,
  ProfileCreditCardInfoDemo,
  ProfileShippingAddressDemo
}
