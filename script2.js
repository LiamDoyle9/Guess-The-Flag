'use strict';

const flagCodes = {
    "ad": "Andorra",
    "ae": "United Arab Emirates",
    "af": "Afghanistan",
    "ag": "Antigua and Barbuda",
    "ai": "Anguilla",
    "al": "Albania",
    "am": "Armenia",
    "ao": "Angola",
    "aq": "Antarctica",
    "ar": "Argentina",
    "as": "American Samoa",
    "at": "Austria",
    "au": "Australia",
    "aw": "Aruba",
    "ax": "Åland Islands",
    "az": "Azerbaijan",
    "ba": "Bosnia and Herzegovina",
    "bb": "Barbados",
    "bd": "Bangladesh",
    "be": "Belgium",
    "bf": "Burkina Faso",
    "bg": "Bulgaria",
    "bh": "Bahrain",
    "bi": "Burundi",
    "bj": "Benin",
    "bl": "Saint Barthélemy",
    "bm": "Bermuda",
    "bn": "Brunei",
    "bo": "Bolivia",
    "bq": "Caribbean Netherlands",
    "br": "Brazil",
    "bs": "Bahamas",
    "bt": "Bhutan",
    "bv": "Bouvet Island",
    "bw": "Botswana",
    "by": "Belarus",
    "bz": "Belize",
    "ca": "Canada",
    "cc": "Cocos (Keeling) Islands",
    "cd": "DR Congo",
    "cf": "Central African Republic",
    "cg": "Republic of the Congo",
    "ch": "Switzerland",
    "ci": "Côte d'Ivoire (Ivory Coast)",
    "ck": "Cook Islands",
    "cl": "Chile",
    "cm": "Cameroon",
    "cn": "China",
    "co": "Colombia",
    "cr": "Costa Rica",
    "cu": "Cuba",
    "cv": "Cape Verde",
    "cw": "Curaçao",
    "cx": "Christmas Island",
    "cy": "Cyprus",
    "cz": "Czechia",
    "de": "Germany",
    "dj": "Djibouti",
    "dk": "Denmark",
    "dm": "Dominica",
    "do": "Dominican Republic",
    "dz": "Algeria",
    "ec": "Ecuador",
    "ee": "Estonia",
    "eg": "Egypt",
    "eh": "Western Sahara",
    "er": "Eritrea",
    "es": "Spain",
    "et": "Ethiopia",
    "eu": "European Union",
    "fi": "Finland",
    "fj": "Fiji",
    "fk": "Falkland Islands",
    "fm": "Micronesia",
    "fo": "Faroe Islands",
    "fr": "France",
    "ga": "Gabon",
    "gb": "United Kingdom",
    "gb-eng": "England",
    "gb-nir": "Northern Ireland",
    "gb-sct": "Scotland",
    "gb-wls": "Wales",
    "gd": "Grenada",
    "ge": "Georgia",
    "gf": "French Guiana",
    "gg": "Guernsey",
    "gh": "Ghana",
    "gi": "Gibraltar",
    "gl": "Greenland",
    "gm": "Gambia",
    "gn": "Guinea",
    "gp": "Guadeloupe",
    "gq": "Equatorial Guinea",
    "gr": "Greece",
    "gs": "South Georgia",
    "gt": "Guatemala",
    "gu": "Guam",
    "gw": "Guinea-Bissau",
    "gy": "Guyana",
    "hk": "Hong Kong",
    "hm": "Heard Island and McDonald Islands",
    "hn": "Honduras",
    "hr": "Croatia",
    "ht": "Haiti",
    "hu": "Hungary",
    "id": "Indonesia",
    "ie": "Ireland",
    "il": "Israel",
    "im": "Isle of Man",
    "in": "India",
    "io": "British Indian Ocean Territory",
    "iq": "Iraq",
    "ir": "Iran",
    "is": "Iceland",
    "it": "Italy",
    "je": "Jersey",
    "jm": "Jamaica",
    "jo": "Jordan",
    "jp": "Japan",
    "ke": "Kenya",
    "kg": "Kyrgyzstan",
    "kh": "Cambodia",
    "ki": "Kiribati",
    "km": "Comoros",
    "kn": "Saint Kitts and Nevis",
    "kp": "North Korea",
    "kr": "South Korea",
    "kw": "Kuwait",
    "ky": "Cayman Islands",
    "kz": "Kazakhstan",
    "la": "Laos",
    "lb": "Lebanon",
    "lc": "Saint Lucia",
    "li": "Liechtenstein",
    "lk": "Sri Lanka",
    "lr": "Liberia",
    "ls": "Lesotho",
    "lt": "Lithuania",
    "lu": "Luxembourg",
    "lv": "Latvia",
    "ly": "Libya",
    "ma": "Morocco",
    "mc": "Monaco",
    "md": "Moldova",
    "me": "Montenegro",
    "mf": "Saint Martin",
    "mg": "Madagascar",
    "mh": "Marshall Islands",
    "mk": "North Macedonia",
    "ml": "Mali",
    "mm": "Myanmar",
    "mn": "Mongolia",
    "mo": "Macau",
    "mp": "Northern Mariana Islands",
    "mq": "Martinique",
    "mr": "Mauritania",
    "ms": "Montserrat",
    "mt": "Malta",
    "mu": "Mauritius",
    "mv": "Maldives",
    "mw": "Malawi",
    "mx": "Mexico",
    "my": "Malaysia",
    "mz": "Mozambique",
    "na": "Namibia",
    "nc": "New Caledonia",
    "ne": "Niger",
    "nf": "Norfolk Island",
    "ng": "Nigeria",
    "ni": "Nicaragua",
    "nl": "Netherlands",
    "no": "Norway",
    "np": "Nepal",
    "nr": "Nauru",
    "nu": "Niue",
    "nz": "New Zealand",
    "om": "Oman",
    "pa": "Panama",
    "pe": "Peru",
    "pf": "French Polynesia",
    "pg": "Papua New Guinea",
    "ph": "Philippines",
    "pk": "Pakistan",
    "pl": "Poland",
    "pm": "Saint Pierre and Miquelon",
    "pn": "Pitcairn Islands",
    "pr": "Puerto Rico",
    "ps": "Palestine",
    "pt": "Portugal",
    "pw": "Palau",
    "py": "Paraguay",
    "qa": "Qatar",
    "re": "Réunion",
    "ro": "Romania",
    "rs": "Serbia",
    "ru": "Russia",
    "rw": "Rwanda",
    "sa": "Saudi Arabia",
    "sb": "Solomon Islands",
    "sc": "Seychelles",
    "sd": "Sudan",
    "se": "Sweden",
    "sg": "Singapore",
    "sh": "Saint Helena, Ascension and Tristan da Cunha",
    "si": "Slovenia",
    "sj": "Svalbard and Jan Mayen",
    "sk": "Slovakia",
    "sl": "Sierra Leone",
    "sm": "San Marino",
    "sn": "Senegal",
    "so": "Somalia",
    "sr": "Suriname",
    "ss": "South Sudan",
    "st": "São Tomé and Príncipe",
    "sv": "El Salvador",
    "sx": "Sint Maarten",
    "sy": "Syria",
    "sz": "Eswatini (Swaziland)",
    "tc": "Turks and Caicos Islands",
    "td": "Chad",
    "tf": "French Southern and Antarctic Lands",
    "tg": "Togo",
    "th": "Thailand",
    "tj": "Tajikistan",
    "tk": "Tokelau",
    "tl": "Timor-Leste",
    "tm": "Turkmenistan",
    "tn": "Tunisia",
    "to": "Tonga",
    "tr": "Turkey",
    "tt": "Trinidad and Tobago",
    "tv": "Tuvalu",
    "tw": "Taiwan",
    "tz": "Tanzania",
    "ua": "Ukraine",
    "ug": "Uganda",
    "um": "United States Minor Outlying Islands",
    "un": "United Nations",
    "us": "United States",
    "uy": "Uruguay",
    "uz": "Uzbekistan",
    "va": "Vatican City (Holy See)",
    "vc": "Saint Vincent and the Grenadines",
    "ve": "Venezuela",
    "vg": "British Virgin Islands",
    "vi": "United States Virgin Islands",
    "vn": "Vietnam",
    "vu": "Vanuatu",
    "wf": "Wallis and Futuna",
    "ws": "Samoa",
    "xk": "Kosovo",
    "ye": "Yemen",
    "yt": "Mayotte",
    "za": "South Africa",
    "zm": "Zambia",
    "zw": "Zimbabwe"
}

let lives = 3;
let score = 0;
let highscore = 0;

let threeFlags = [];
let value = '';





/**
 * Choose a random key from the object (flagCodes) - the keys are used in the url to pull the relevant flag from the API. 
 * @param {*} obj 
 */
let randomKey = function (obj) {           
    let keys = Object.keys(obj);
    return keys[keys.length * Math.random() << 0];
};


let displayThreeFlags = function(obj){
    for(let i = 0; i < 3; i++){
        threeFlags.push(randomKey(obj));
        document.getElementById(`flagImg${i}`).src = `https://flagcdn.com/144x108/${threeFlags[i]}.png`
    }
}


let generateCountryToGuess = function(arr, obj){
    let key = arr[arr.length * Math.random() << 0];
    value = obj[key];
    return value;
}

let displayCountryToGuess = function(country){
    document.querySelector('.country').textContent = generateCountryToGuess(threeFlags, flagCodes);
}





//Click events for images
document.getElementById("flagImg0").addEventListener('click', function(){    
    if(flagCodes[threeFlags[0]] === value){
        document.querySelector('#flag0').style.backgroundColor = '#60b374';
        setTimeout(() => {correctGuess();}, 1000);
        setTimeout(() => {newRound();}, 1000);
        
    }  else {
        document.querySelector('#flag0').style.backgroundColor = '#d14545';
        setTimeout(() => {incorrectGuess();}, 1000);
        setTimeout(() => {newRound();}, 1000);
    }
})



document.getElementById("flagImg1").addEventListener('click', function(){
    if(flagCodes[threeFlags[1]] === value){
        document.querySelector('#flag1').style.backgroundColor = '#60b374';
        setTimeout(() => {correctGuess();}, 1000);
        setTimeout(() => {newRound();}, 1000);
        
    } else {
        document.querySelector('#flag1').style.backgroundColor = '#d14545';
        setTimeout(() => {incorrectGuess();}, 1000);
        setTimeout(() => {newRound();}, 1000);
        
    }

})

document.getElementById("flagImg2").addEventListener('click', function(){

    if(flagCodes[threeFlags[2]] === value){
        document.querySelector('#flag2').style.backgroundColor = '#60b374';
        setTimeout(() => {correctGuess();}, 2000);
        setTimeout(() => {newRound();}, 2000);
    }  else {
        document.querySelector('#flag2').style.backgroundColor = '#d14545';
        setTimeout(() => {incorrectGuess();}, 1000);
        setTimeout(() => {newRound();}, 1000);
    }
})




const run = function(){

    document.querySelector('.label-lives').textContent = `❤️ Lives: ${lives}`;
    document.querySelector('.label-score').textContent = `⭐️ Score: ${score}`;
    document.querySelector('.label-highscore').textContent = `🥇 Highscore: ${highscore}`;
    displayThreeFlags(flagCodes);
    generateCountryToGuess(threeFlags, flagCodes);
    displayCountryToGuess();

    
}

//Click event for new game button
document.querySelector('.newGame').addEventListener('click', function(){
    lives = 3;
    score = 0;
    document.querySelector('.label-lives').textContent = `❤️ Lives: ${lives}`;
    document.querySelector('.label-score').textContent = `⭐️ Score: ${score}`;
    document.querySelector('.label-highscore').textContent = `🥇 Highscore: ${highscore}`;
    document.querySelector('h1').textContent = 'Choose the correct flag!';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('#flag0').style.backgroundColor = '#eee';
    document.querySelector('#flag1').style.backgroundColor = '#eee';
    document.querySelector('#flag2').style.backgroundColor = '#eee';
    run();
})


let correctGuess = function(){
    score += 1;
    if(score > highscore){
        highscore = score;
        document.querySelector('.label-score').textContent = `⭐️ Score: ${score}`;
        document.querySelector('.label-highscore').textContent = `🥇 Highscore: ${highscore}`;
    }
}

let incorrectGuess = function(){
    if(lives >= 0) {
        lives -= 1;
        document.querySelector('.label-lives').textContent = `❤️ Lives: ${lives}`;
    } else {
        gameOver();
    }
}


let newRound = function(){

    for(let i = 0; i < 3; i++){
        threeFlags.pop();
    }

    if(lives > 0){
        document.querySelector('#flag0').style.backgroundColor = '#eee';
        document.querySelector('#flag1').style.backgroundColor = '#eee';
        document.querySelector('#flag2').style.backgroundColor = '#eee';
        displayThreeFlags(flagCodes);
        generateCountryToGuess(threeFlags, flagCodes);
        displayCountryToGuess();
    } else {
        gameOver();
    }


}


let gameOver = function(){
    document.querySelector('h1').textContent = 'GAME OVER!';
    document.querySelector('body').style.backgroundColor = '#d14545';
}





//Running the game
run();






