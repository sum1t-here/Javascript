const course = {
  coursename: 'js',
  price: '999',
  courseInstructor: 'boogieman',
};

// course.courseInstructor
const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor); // boogieman

// destructuring in react

// const navbar = ({company}) => {

// };

// navbar((company = 'hitesh'));

//                        API

// Json

// {
//     "name": 'Sumit',
//     "coursename": 'js',
//     "price": 'free'
// }

[{}, {}, {}];

//  random user api

// {
//     "results": [
//       {
//         "gender": "female",
//         "name": {
//           "title": "Ms",
//           "first": "Anka",
//           "last": "Adamovi\u0107"
//         },
//         "location": {
//           "street": {
//             "number": 971,
//             "name": "\u017Divani\u0107eva"
//           },
//           "city": "Srbobran",
//           "state": "P\u010Dinja",
//           "country": "Serbia",
//           "postcode": 71423,
//           "coordinates": {
//             "latitude": "58.0572",
//             "longitude": "175.5731"
//           },
//           "timezone": {
//             "offset": "-11:00",
//             "description": "Midway Island, Samoa"
//           }
//         },
//         "email": "anka.adamovic@example.com",
//         "login": {
//           "uuid": "10f01fca-a434-408b-b5cd-e858ffc342e4",
//           "username": "tinytiger560",
//           "password": "roofer",
//           "salt": "rmsaITDu",
//           "md5": "3b29b94dba2f66192de303e4fe7ca9e8",
//           "sha1": "642d4920f5d047f6cfbc652cc9aef2290eb5066a",
//           "sha256": "65a079c7a5bdc2bed0b1999febee9fa6d6829a357df553a0fcd542714e70fc3b"
//         },
//         "dob": {
//           "date": "1965-03-13T17:40:26.608Z",
//           "age": 58
//         },
//         "registered": {
//           "date": "2013-06-19T09:51:30.952Z",
//           "age": 10
//         },
//         "phone": "037-2218-265",
//         "cell": "062-3375-370",
//         "id": {
//           "name": "SID",
//           "value": "651011345"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/women/92.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/women/92.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/women/92.jpg"
//         },
//         "nat": "RS"
//       }
//     ],
//     "info": {
//       "seed": "9f090d99eaf5de59",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }
