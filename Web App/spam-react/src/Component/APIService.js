import React from 'react'

export default class APIService{
    static InsertResult(body){
        return fetch(`/result`,{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    }

}
