/*Estudar Fetch API quando chegar em casa*/

// Olhar o parse platafotm e back4app

 /* 
 curl -X GET \ -H "X-Parse-Application-Id: z36YSuW4XFyMWErtfC3FPKTpgURDcbXUaJAZ16vB" 
 -H "X-Parse-REST-API-Key: jG03NVvmofc8xlKahd4JMsnRNeCLnbusgJDpxwiA"
 https://parseapi.back4app.com/classes/Tarefa  
 */

const getTarefas = async () => {
    try{
        const response = await fetch (
            "https://parseapi.back4app.com/classes/Tarefa", 
            {
                method : "GET"
                headers : {
                    "X-Parse-Application-Id: z36YSuW4XFyMWErtfC3FPKTpgURDcbXUaJAZ16vB"
                    "X-Parse-REST-API-Key: jG03NVvmofc8xlKahd4JMsnRNeCLnbusgJDpxwiA"
                }
            }
        )
    }
}


