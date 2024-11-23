var arr = ["Heads" , "Tails"]
var player1name = '';
var player2name = '';
var player1SelVal = ''
var player2SelVal = ''






function start(){
    player1name = document.getElementById("player1name").value
    player2name = document.getElementById("player2name").value
    if(player1name === '' || player2name === ''){
        Swal.fire("Fill players' names first")
    } else{
        setTimeout(function(){
            Swal.fire(player1name + " will select heads or tails ");
        },500)
        
    }
}


function heads(){
    if(player1name === '' || player2name === ''){
        Swal.fire("Please start the match")
    }
    else{
        player1SelVal = "Heads"
        player2SelVal = "Tails"
    }
    // console.log("User1 Value "+player1SelVal)
    // console.log("User2 Value "+player2SelVal)
}
function tails(){
    if(player1name === '' || player2name === ''){
        Swal.fire("Fill players' names first");
    }
    else{
        player1SelVal = "Tails"
        player2SelVal = "Heads"
    }
    // console.log("User1 Value "+player1SelVal)
    // console.log("User2 Value "+player2SelVal)
}
// console.log(player1name)
// console.log(player2name)




function flipthecoin() {
    if(player1SelVal === '' || player2SelVal === ''){
        Swal.fire({
            title: "Select Heads or Tails?",
            icon: "question"
          });
    } 
    else{
        var randomnum = Math.round(Math.random() * 1)
        document.getElementById("defaultgif").src = "./new flip coin.gif"
        if(randomnum === 0){
            setTimeout(function(){
                document.getElementById("defaultgif").src = "./heads.PNG"
            },1500)
            if(player1SelVal === arr[randomnum]){
                setTimeout(function(){
                    Swal.fire({
                        title: "Congratulations " + player1name,
                        icon: "success"
                      });
                },2000)
            }
            else{
                setTimeout(function(){
                    Swal.fire({
                        title: "Congratulations " + player2name,
                        icon: "success"
                      });
                },2000)
            }
            console.log(randomnum)
        } else {
            setTimeout(function(){
                document.getElementById("defaultgif").src = "./tails.PNG"
            },1500)
            if(player1SelVal === arr[randomnum]){
                setTimeout(function(){
                    Swal.fire({
                        title: "Congratulations " + player1name,
                        icon: "success"
                      });
                },2000)
            }
            else{
                setTimeout(function(){
                    Swal.fire({
                        title: "Congratulations " + player2name,
                        icon: "success"
                      });
                },2000)
            }
            console.log(randomnum)
        }
    }
}
