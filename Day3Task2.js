// Day-3 Task-2
// Create own resume data in json format
console.log("--------------Day3 Task2--------------")


let CandidateResume = {
"firstName": "Mahmmadsufiyan",
"familyName": "Shaik",
"email": "mdsufiyan9205@gmail.com",
"mobileNumber": "8008518446",

"educationalQualification":{

"PostGraduate":{
"Course":"M.Tech",
"Branch": "Power and Energy Systems Engineering",
"Institution":"National Institute of Technology Silchar, Assam",
"YearOfPassing":"2017",
"CGPAorPercentage":"9.14",
},

"UnderGraduate":{
"Course":"B.Tech",
"Branch": "Electrical and Electronics Engineering",
"Institution":"DMS SVH College Of Engineering, Machilipatnam, Andhra Pradesh",
"YearOfPassing":"2014",
"CGPAorPercentage":"72",
},

"Class12":{
"Course":"M.P.C",
"Branch": "M.P.C",
"Institution":"BSSB Junior College, Tadikonda, Andhra Pradesh",
"YearOfPassing":"2010",
"CGPAorPercentage":"87",
},


"Class10":{
"Course":"SSC",
"Branch": "SSC",
"Institution":"St.Marys High School, Pedaparimi, Andhra Pradesh",
"YearOfPassing":"2007",
"CGPAorPercentage":"87",
},

},

"WorkExperience":{
"Duration": "4 Months",
"Field": "Teaching",
},

"ContactAddress":{
"Do.No":"1-49",
"Locality": "New Masjid Road, Mixture Colony",
"Village": "Pedaparimi",
"District": "Guntur",
"State": "Andhra Pradesh",
"PinCode": "522236",
}

}

//console.log(Object.values(CandidateResume["educationalQualification"]["Class12"]))

console.log("-----------------Candidate resume in JSON format-----------------")
console.log(CandidateResume)