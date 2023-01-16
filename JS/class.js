class RailwayForm {
    constructor(givenname, trainno) {
        this.name = givenname;
        this.trainno = trainno;
    }
    submit() {
        alert(this.name + " form submitted" + " for train no: " + this.trainno)
    }
    cancel() {
        alert(this.name + " form is cancelled for train no " + this.trainno)
    }
    // fill(givenname, trainno){
    //     this.name = givenname;
    //     this.trainno = trainno;
    // }
}

let avneezform = new RailwayForm("Avneez", 14123);
// avneezform.fill()

let mohitform = new RailwayForm("Mohit", 23416);
// mohitform.fill();

avneezform.submit();
mohitform.submit();
mohitform.cancel();