const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
const port = 5000


function sendEmail(name){

    return new Promise((resolve , reject) => {

        let transporter = nodemailer.createTransport({
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
            html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
    <title>Document</title>
    
</head>
<body>
    <section class="header">
        <div class="content">
            <img src="./img/logo.png" alt="image">
            <h2><span>Build your ultimate workforce:</span><br>Your external talent and in-house teams working<br> together in one tool</h2>
        </div>               
    </section class='body'>
    <div class="first_text">
        <p>Hi ${name}, <br><br>

            Joining the JobBliss family isn't just about just getting your external contractors and internal teams organized - it's a ticket to stress-free project management. With our platform, you'll be able to stay on top of all your work and contractors with ease! So say goodbye to chaotic searching for information… and hello to blissful productivity.<br><br>
            
            We'll demonstrate how the JobBliss Dashboard and your private company Talent Directory may help you get organized and started in this email.<br><br>
            
            The dashboard is designed to provide a comprehensive and convenient platform for building project teams, planning tasks, tracking progress, all the way to ultimate delivery.With this intuitive tool at your disposal, independent contractor project management has never been easier.</p><br>
    </div>
    <div class="banner">
       <center><img src="./img/banner.png" alt="banner" class="responsive"></center>
    </div>
    <div class="list">
        <ul>
            <li>Your freelancer and contractor talent availability, ratings and reviews</li>
            <li>An overview of your company activity, both internal and external including: 
                <ul class="bullets">
                    <li>Freelance and Independent contractor profiles</li>
                    <li>Internal managers and staff</li>
                    <li>Talent and skills requests</li>
                    <li>Projects - active and future</li>
                    <li>Groups</li>
                    <li>Favorites</li>
                    <li>Documents</li>
                </ul>
            </li>
            <li>Grow your talent pool through job postings using the JobBliss marketplace</li>
        </ul><br>        
    </div>
    <div class="second_text">
        <p>Here is a quick demo of what you can do on the dashboard.<br><br>
            Get ready to explore the incredible array of talent your company has access to!
            Once you've built your Talent Directory, it's easy for you to stay connected with <br>
            contractors and maximise their skills.
        </p>
    </div>
    <div class="banner2">
        <center><img src="./img/banner2.png" alt="banner" class="responsive"></center>
    </div>
    <div class="list2">
        <p>You can:</p>
        <ul>
            <li>Filter by availability, location, job title, rate, and skills to find the right contractor.</li>
            <li>Post job openings and search for new talent ahead of time</li>
            <li>Leave and view reviews and ratings from previous managers and projects</li>
        </ul>        
    </div>
    <div class="last_text">
        <p>If you have any questions or need help, don't hesitate to hit up our support team. <br>
            We're here to make sure you have a killer experience with JobBliss.</p><br>
            Cheers, <br><br>
            The JobBliss Team <br>
    </div>
    <section>   
</body>
<style>
    body{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}

.header{
    position: relative;
    width: 100%;
    height: 65vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.header:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:#002F7A;
    border-radius: 0 0 50% 50% / 0 0 100% 100%;
    transform: scaleX(1.2);
   

}
.content{
    top: -10%;
}

section .content{
    position: relative;
    z-index: 1;
    margin: 0 auto;
    max-width: 900px;
    text-align: center;
}

section .content h2{
    margin-top: 30px;
    position: relative;
    width: 500px;
    height: 149px;
    padding: 0;
    color: #fff;
    font-family: Raleway;
    font-size: 23px;
    align-items: center;
    line-height: 53px;
}

span{
    color: #32ECD6;
}

.first_text{
    font-family: Raleway;
    font-weight: 400;
    font-size: 18px;
    line-height: 35px;
    padding-left: 10%;
    padding-right: 10%;
}

.banner{    
    padding-bottom: 5%;    
}

.responsive{
    max-width: 100%;
    height: auto;
}

.list{
    font-family: Raleway;
    font-weight: 400;
    font-size: 18px;
    line-height: 35px;
    padding-left: 10%;
    padding-right: 10%;    
}

.second_text{
    font-family: Raleway;
    font-weight: 400;
    font-size: 18px;
    line-height: 35px;
    padding-left: 10%;
    padding-right: 10%;
    
}

.list2{
    font-family: Raleway;
    font-weight: 400;
    font-size: 18px;
    line-height: 35px;
    padding-left: 10%;
    padding-right: 10%;
}

.last_text{
    font-family: Raleway;
    font-weight: 400;
    font-size: 18px;
    line-height: 35px;
    padding-left: 10%;
    padding-right: 10%;

}
.bullets{
    list-style-type: disc;
}
.banner{
padding-left: 10%;
padding-right: 10%;
}

.banner2{
    padding-left: 10%;
    padding-right: 10%;
}
</style>
</html>
`       


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


app.get("/sendEmail", (req,res) => {
    const { name } = req.query;
    sendEmail(name)
    .then(response => res.send(response.message))
    .catch(error => res.status(500).send(error.message))
})


app.listen(port, () => {

   console.log(`nodemailerproject is listening at http://localhost:${port}`) 
}

)