const hireModelData = {
  "companyName": "",
  "eventName": "",
	"eventStartDate": "1970-01-01",
	"eventEndDate": "1970-01-01",
	"eventCountry": "United Kingdom",
  "eventCity": "London",
  "roles": [
    {
      "id": 1,
      "name": "PR"
    },
    {
      "id": 2,
      "name": "HOST"
    },
    {
      "id": 3,
      "name": "GRID"
    }
  ],
  "talents": [
    {
      "id": 1,
      "firstName": "Lindsay",
      "billingCompanyName": "Some Company",
      "hired": true,
      "photoUrl": "localhost:4200/assets/img/img_home.png",
      "applications": [
        {
          "id": 1,
          "roleId": 1,
          "clauses": [
            "Clause 1",
            "Clause 2"
          ],
          "pay": 6000,
          "liked": true
        },
        {
          "id": 3,
          "roleId": 3,
          "clauses": [
            "Clause 1",
            "Clause 2"
          ],
          "pay": 6000,
          "liked": false
        }
      ]
    },
    {
      "id": 2,
      "firstName": "Anne",
      "billingCompanyName": "Some Company",
      "hired": false,
      "photoUrl": "localhost:4200/assets/img/img_home.png",
      "applications": [
        {
          "id": 2,
          "roleId": 2,
          "clauses": [
            "Clause 1",
            "Clause 2"
          ],
          "pay": 6000,
          "liked": false
        },
        {
          "id": 3,
          "roleId": 3,
          "clauses": [
            "Clause 1",
            "Clause 2"
          ],
          "pay": 6000,
          "liked": true
        }
      ]
    }
  ]
};

export default hireModelData;
