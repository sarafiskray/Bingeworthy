# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

shows = Show.create([
	{
		title: "Weeds",
		image_url: "https://bingeworthy.s3.us-east-2.amazonaws.com/weeds.jpg",
		genre: "Drama/Comedy",
		year: 2005
	},
	{
		title: "Barry",
		image_url: "https://bingeworthy.s3.us-east-2.amazonaws.com/barry.png",
		genre: "Drama/Comedy",
		year: 2018
	},
	{
		title: "Detroiters",
		image_url: "https://bingeworthy.s3.us-east-2.amazonaws.com/detroiters.jpg",
		genre: "Comedy",
		year: 2017
	},
	{
		title: "Son of Zorn",
		image_url: "https://bingeworthy.s3.us-east-2.amazonaws.com/son-of-zorn.jpg",
		genre: "Comedy",
		year: 2016
	}
])

users = User.create([
	{
		username: "testuser1"
	}
])

reviews = Review.create([
	{
		headline: "I liked",
		description: "Good",
		score: 5,
		show: shows.first,
		user_id: 1
	},
	{
		headline: "I did not like",
		description: "Bad",
		score: 1,
		show: shows.first,
		user_id: 1
	}
])

