# MergeTwoTablesMongoDBNodejs
Merge Two Tables in MongoDB in Nodejs

Step 1 : npm init -y

Step 2 : npm install express

Step 3 : npm install mongoose



Populate the userInformation collection with two documents:

 [
        {
            fullname: 'Mehvish Ashiq',
            age: 30,
            gender: 'Female',
            nationality: 'Pakistani'
        },
        {
            fullname: 'James Daniel',
            age: 45,
            sex: 'male',
            nationality: 'Canadian'
        }
    ]
    
    
    Populate the userAddress collection with two documents:
    
    [
        {
            fullname: 'Mehvish Ashiq',
            block_number: 22,
            street: 'Johar Town Street',
            city: 'Lahore'
        },
        {
            fullname: 'James Daniel',
            block_number: 30,
            street: 'Saint-Denis Street',
            city: 'Montreal'
        }
    ]
    
    
    
    After Merging the Two Tables are given below Data Output :
    
    {
        "_id" : ObjectId("628bc4a45c544feccff5a566"),
        "fullname" : "Mehvish Ashiq",
        "age" : 30,
        "gender" : "Female",
        "nationality" : "Pakistani",
        "address" : [
                {
                        "_id" : ObjectId("628bc4ae5c544feccff5a568"),
                        "fullname" : "Mehvish Ashiq",
                        "block_number" : 22,
                        "street" : "Johar Town Street",
                        "city" : "Lahore"
                }
        ]
}
{
        "_id" : ObjectId("628bc4a45c544feccff5a567"),
        "fullname" : "James Daniel",
        "age" : 45,
        "sex" : "male",
        "nationality" : "Canadian",
        "address" : [
                {
                        "_id" : ObjectId("628bc4ae5c544feccff5a569"),
                        "fullname" : "James Daniel",
                        "block_number" : 30,
                        "street" : "Saint-Denis Street",
                        "city" : "Montreal"
                }
        ]
}
