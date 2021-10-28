var quiz = {
      questions: [
         {
            text: "バンドで一番格好いいと思う楽器は？",
            responses: [
               { text: "ギター", value: 4 },
               { text: "ベース", value: 5 },
               { text: "ドラム", value: 3 },
               { text: "キーボード", value: 1 },
               { text: "声", value: 2 }
            ]
         },
         {
            text: "音楽は？",
            responses: [
               { text: "美しさ", value: 2 },
               { text: "パフォーマンス", value: 5 },
               { text: "たのちい", value: 4 },
               { text: "実力", value: 3 },
               { text: "難しい", value: 1 }
            ]
         },
         {
            text: "この中で一番胸に響く歌詞は？",
            responses: [
               { text: "今，曖昧だらけの世界で君の声をただ探した", value: 5 },
               { text: "声も顔も不器用なとこも全部全部嫌いじゃないの", value: 1 },
               { text: "誰のものでもない「私」があるから笑われても，嫌われても守りぬくよ", value: 4 },
               { text: "ある日突然現れたその眼差しが知らなかったこと教えてくれた", value: 3 },
               { text: "見えないものを見ようとして望遠鏡を覗き込んだ", value: 2 }
            ]
         },
         {
            text: "コナラジオで1位になりたいランキングは？",
            responses: [
               { text: "美男・美女", value: 5 },
               { text: "おばあちゃん・おじいちゃん", value: 3 },
               { text: "お母さん・お父さん", value: 4 },
               { text: "お兄さん・お姉さん", value: 1 },
               { text: "おしゃれ", value: 2 }
            ]
         },
         {
            text: "実は私，",
            responses: [
               { text: "しょうもない", value: 3 },
               { text: "まともだ", value: 4 },
               { text: "ますともだ", value: 5 },
               { text: "しょうはある", value: 2 },
               { text: "大人しい", value: 1 }
            ]
         },
         {
            text:
               "馬場のお店なら",
            responses: [
               { text: "石庫門", value: 5 },
               { text: "だるま", value: 1 },
               { text: "コットンクラブ", value: 4 },
               { text: "はま寿司", value: 2 },
               { text: "サイゼリヤ", value: 3 }
            ]
         },
         {
            text: "やりたいバンドは",
            responses: [
               { text: "サンレイン", value: 5 },
               { text: "スワンプマン", value: 3 },
               { text: "ちゃんず", value: 4 },
               { text: "ジャムストロベリー", value: 2 },
               { text: "PAL", value: 1 }
            ]
         }
      ]
   },
   userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
   el: "#app",
   data: {
      quiz: quiz,
      questionIndex: 0,
      userResponses: userResponseSkelaton,
      isActive: false,
      totalValue: 0
   },
   filters: {
      charIndex: function(i) {
         return String.fromCharCode(97 + i);
      }
   },
   methods: {
      restart: function(){
			 	this.questionIndex=0;
		 		this.userResponses=Array(this.quiz.questions.length).fill(null);
		 },
      selectOption: function(index) {
         Vue.set(this.userResponses, this.questionIndex, index);
         //console.log(this.userResponses);
      },
      next: function() {
         if (this.questionIndex < this.quiz.questions.length)
            this.questionIndex++;
      },

      created: function() {
          this.caculatedValue();
      },
      // Return "true" count in userResponses
      TotalValue: function() {
         var sum = 0;
         for (var i = 0; i < this.questionIndex; i++)
         {
            sum += quiz.questions[i].responses[this.userResponses[i]].value;
         }
         //this.totalValue = sum;
         return sum;
      }
      //     this.totalValue = quiz.questions.reduce((total, item) => {
      //       const itemSum = item.responses.reduce((sum, response) => {
      //           return sum + response.value;
      //       }, 0);

      //       return total + itemSum;
      //   }, 0);
      }
         //return this.userResponses.filter(function(val) { return val }).length;
          
})
    
   

