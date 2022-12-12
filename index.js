var billAmount=document.querySelector("#bill-amount")
var cashGiven=document.querySelector("#cash-given")
var nextButton=document.querySelector("#next-button")
var checkButton=document.querySelector("#check-button")
var changeTable=document.querySelectorAll(".change-table")
var message=document.querySelector("#error-message")
var hiddenElements=document.querySelector("#hidden-elements")


hiddenElements.style.display="none"
cashGiven.style.display="none"
checkButton.style.display="none"

var notesAvail = [2000, 500, 100, 20, 10, 5, 1 ]




nextButton.addEventListener("click" ,function(){

    if(billAmount.value>0){
    hiddenElements.style.display="grid"
    cashGiven.style.display="flex"
    checkButton.style.display="flex"
   
    }else{
        showMessage("enter valid amount")
    }
})

checkButton.addEventListener("click" , calculateChange)

function calculateChange(){
    hideMessage()

   if(billAmount.value>0 ){

    if(Number(billAmount.value)===Number(cashGiven.value)){

        showMessage("Transaction is settled!")
    }else{

        if(Number(cashGiven.value)>Number(billAmount.value)){
            var amountReturn=cashGiven.value-billAmount.value

            changeToGive(amountReturn)
            
        } else{
            showMessage("Change to be taken!")
        }


    }

   }else{
    showMessage("Enter a valid amount")
   }
}

function changeToGive(amountReturn){
    for (let i=0; i<notesAvail.length; i++){

        var notesToReturn=Math.trunc((amountReturn / notesAvail[i]))
        amountReturn=amountReturn % notesAvail[i]

        changeTable[i].innerText=notesToReturn
    }


}
function showMessage(msg){
    message.style.display="block"
    message.innerText=msg
}
function hideMessage(){

    message.style.display="none"
}