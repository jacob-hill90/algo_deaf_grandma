function deafGrandma() {
    let count = 0
    let prompt = window.prompt("Say hello to MeeMaw!")
    while(count < 2){
        if(prompt === ''){
            prompt = window.prompt("WHAT?!")
        }

        else if(prompt !== prompt.toUpperCase()){
            prompt = window.prompt("SPEAK UP, KID!") 
        }

        else if(prompt === 'GOODBYE!'){
            if(count === 1){
                window.alert("LATER, SKATER!")
                return
            }
            else prompt = window.prompt("LEAVING SO SOON?!")
            count++
            }

        else if(prompt === prompt.toUpperCase()){
            prompt = window.prompt("NO, NOT SINCE 1946!")
        }
    }
}

deafGrandma();