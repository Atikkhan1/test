const nodemailer = require("nodemailer");
export async function GET() {
    let otp = Math.floor(Math.random() * 9000 + 1000)
    const transporter = nodemailer.createTransport({ 
        service:'gmail', 
        host:'smtp.gmail.com',
        port:465,
        secure:false,
        auth: {
          user: "wavecart.shop@gmail.com",
          pass:"zhci lxwn ofil tyba"
        },
        tls: {
          rejectUnauthorized: false
        }
        }
    )
    let a = await transporter.sendMail({
        from: 'wavecart.shop@gmail.com', // sender address
        to: "khanarbajpathan057@gmail.com", // list of receivers
        subject: "wavecart verification code", // Subject line
        text: `thank you for chosing our website and giving your time , this is your verification code`,
        html:`<h1>thank you for chosing our website and giving your time , this is your verification code : <h2>${otp}</h2></h1>`
      })
    //   console.log(a)
return new Response(JSON.stringify(a))
}