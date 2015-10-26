var splainfo = require('./splainfo')


var si = splainfo();

si.on('done', function(){
    res = "ハイカラニュースの時間だよ!\n\n";
    if(this.fes_state > -1) {
        state = ["告知", "開催"][this.fes_state];
        res += "フェスが" + state + "されているよ\n";
        res += "期間は" + this.fes.begin + " 〜 " + this.fes.end + "だよ\n";
        res += "お題は " + this.fes.alpha + " 対 " + this.fes.bravo + " だよ\n";
    }

    if(this.fes_state == 1) {
        res += "レギュラーは " + this.regular[0] + " と " + this.regular[1] + " と " + this.regular[2] + " だよ\n\n"
    } else {
        res += "\n";
        objDate = new Date(this.starttime);
        res += objDate.getFullYear() + "/" + (objDate.getMonth()+1) + "/" + ("0" + objDate.getDate()).slice(-2) + " ";
        res += ("0" + objDate.getHours()).slice(-2) +":" + ("0" + objDate.getMinutes()).slice(-2)  + "からは\n";
        res +=  "レギュラーは " + this.regular[0] + " と " + this.regular[1] + "，\n";
        res +=  "ガチマッチは " + this.ranked[0] + " と " + this.ranked[1] + " の " + this.ranked_rule + " だよ\n\n";
    }
    res += "イカよろしくー\n";
    console.log(res);
});


