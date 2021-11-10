//Please Wait function
function pleaseWait() {
    var wait = "Searching for the perfect destinaton...";
    alert(wait);
}

//Random Destinaton Generator function
function randomLocation() {
    let countries = ['France', 'Germany',
        'Spain', 'Portugal', 'Norway', 'Sweden', 'Iceland', 'Greece', 'the USA', 'Brazil', 'Mexico', 'South Africa', 'the UAE', 'Vietnam', 'Australia', 'Ireland'
    ]

    var randomCountry = countries[Math.floor(Math.random() * countries.length)];

    var string1 = "You should visit";
    var sentence = `${string1} ${randomCountry}`;

    alert(sentence);
}