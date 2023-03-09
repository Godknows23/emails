const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
const port = 5000


function sendEmail(){

    return new Promise((resolve , reject) => {

        var transporter = nodemailer.createTransport({
              service:'gmail',
              auth:{
                user:'godknowspesanai@gmail.com',
                pass:'dkmbtareekuttcgw'
              }

        })
        const mail_configs = {
            from:'godknowspesanai@gmail.com',
            to: 'godknows@velocityinc.tech',
            subject:'Testing Email',
            text: "Just checking if this email will be sent"

        }
        transporter.sendMail(mail_configs , function(error ,info){
            if(error){
                console.log(error)
                return reject({message: 'An error has occured'})
            }
            return resolve({message: "Email sent sucessfuly"})
        })
    })
}


app.get('/', (req,res) => {
    sendEmail()
    .then(response => res.send(response.message))
    .catch(error => res.status(500).send(error.message))
})


app.listen(port, () => {

   console.log(`nodemailerproject is listening at http://localhost:${port}`) 
}

)