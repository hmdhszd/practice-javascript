var emploee = {
    name: "hamid hosseinzadeh",
    job: "programmer",
    age: 29,
    report: function() {
        console.log("Fist Name is : " + this.name.split(" ")[0] + " - Last Name is : " + this.name.split(" ")[1] + " - job is : " + this.job + " - age is : " + this.age)
    }
}



emploee.report()