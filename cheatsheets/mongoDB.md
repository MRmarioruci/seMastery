--- MongoDB --- 
	# General

	# show dbs -> List Databases
	# use dn_name -> Use a certain database
	# show collections -> List all collections inside a database -> Like tables
	# db.dropDatabase() -> Deletes database
	# exit -> Exit database

	# QUERY
	db.users.insertOne({name: "John"}) -> Insert an entry
	db.users.insertMany([
		{name: "John"},
		{name: "Mike"}
	]) -> Insert multiple entries
	db.users.find() -> Retrieve all the list of entries
	db.users.find().limit(2) -> Limit the results
	db.users.find().skip(1).limit(2) -> Skip the first entry, Limit the results
	db.users.find().sort({name: 1}).limit(2) -> Sort the results // -1 reverse order
	db.users.find().sort({age:1, name: 1}).limit(2) -> Multiple Sort
	db.users.find({name: 'John'}) -> Essentialy where statement
	db.users.find({name: 'John'}, {name: 1, _id: 0}) -> Essentialy where statement with which fields to fetch
	db.users.find({name: {$eq: 'Sally'}}) -> Equality
	db.users.find({name: {$ne: 'Sally'}}) -> All except the ones
	db.users.find({age: {$gte: 19}}) -> Greater or equal than
	db.users.find({age: {$gt: 19}}) -> Greater than
	db.users.find({age: {$lte: 19}}) -> Less than
	db.users.find({age: {$gte: 19, $lte: 30}}) -> Greater or equal than
	db.users.find({age: {$in: ["Kyle", "Dora"]}}) -> Less than
	db.users.find({age: {$nin: ["Kyle", "Dora"]}}) -> Not in
	db.users.find({age: {$exists: true}}) -> The records that have that key in them
	db.users.find({$and: [{name: "Kyle"}, {age: 20}]}) -> And statement
	db.users.find({$or: [{age: {$gte: 20}}, {name: "Kyle"}]}) -> Age is grater or equal than 20 or the name is Kyle
	db.users.insertMany([
		{name: 'Kyle', balance: 100, debt: 120},
		{name: 'John', balance: 120, debt: 20}
	]) -> Insert multiple
	db.users.find({$expr: { $gt: ["debt", "balance"]}})
	db.users.find({"address.street": "123 Main str"})
	db.users.findOne({age: { $lte: 40}})
	db.users.countDocuments({age: { $lte: 40}})


	# UPDATE
	db.users.updateOne({age: 26}, { $set: {age: 27}}) -> Set new value
	db.users.updateOne({_id: 123}, { $inc: {age: 3}}) --> Increment by 3
	db.users.updateOne({_id: 123}, { $rename: {name: "firstName"}}) --> Rename key
	db.users.updateOne({_id: 123}, { $unset: "age"}) --> Unset a property
	db.users.updateOne({_id: 123}, { $unset: {age: ""}}) --> Unset property value
	db.users.updateOne({_id: 123}, { $push: {hobbies: "Swimming"}}) --> Push to an array
	db.users.updateOne({_id: 123}, { $pull: {hobbies: "Swimming"}}) --> Remove from an array
	db.users.updateMany({address: {$exists: true}}, {$unset: { address: ""}}) -> Remove address field from all the users that have it
	db.users.replaceOne({_id: 123}, {name: "John"})

	# DELETE
	db.users.deleteOne({name: "John"})
	db.users.deleteMany({age: { $exists: false }})
	

	Cheatsheets project
		Collection -> Navigation
		Collection -> MongoDBCheatsheet
		{
			_id: 1, 
			groupTitle: "General",
			docs: {
				{_id: 1},
				{ code: ''},
				{ description: ''}
			}
		},
		{
			_id: 1, 
			groupTitle: "Query",
			docs: {
				{_id: 1},
				{ code: ''},
				{ description: ''}
			}
		}
		Collection -> OOPCheatsheet
		{
			_id: 1,
			groupTitle: "Basics",
			docs: [
				{
					_id: 1,
					title: "Abstraction",
					description: "",
					code: "",
,				}
			]
		}

