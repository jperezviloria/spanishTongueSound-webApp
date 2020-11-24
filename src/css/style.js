import styled, {
    keyframes
} from "styled-components";

export const SystemBase = styled.div `

    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
    background-color: #fff8cd;
    //background-image: url("https://www.conmishijos.com/uploads/hojasotono.jpg");
    min-height: 1000px;
    color: #211717;
    

`


//------------------------------HEADER ZONE ----------------------------------


export const HeaderBase = styled.div `

margin: 0;
padding: 0;

@media only screen and (min-width: 310px) {}

@media only screen and (min-width: 480px) {}

@media only screen and (min-width: 768px) {}

@media only screen and (min-width: 1024px) {}

@media only screen and (min-width: 1200px) {}

`;

export const HeaderSuperior = styled.div `

margin: 0px;
padding: 0px;


img{
    width: 100%;
    height: 300px;
   
}


@media only screen and (min-width: 310px) {}

@media only screen and (min-width: 480px) {}

@media only screen and (min-width: 768px) {}

@media only screen and (min-width: 1024px) {}

@media only screen and (min-width: 1200px) {}

`;

export const HeaderInferior = styled.div `

div{
    display: grid;
    background-color:#cf0600;
    height: 50px;
    
    &.headerLinks{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding-top: 20px;
        justify-items: center;

        a{
            align-self: center;
            text-decoration: none;
            color: #322f3d;
            font-size: 12px;
            padding: 3px 15px;
            border-radius: 2px;
            background-color: #f7f2e7;

        }

    }


    &.headerLogo{
        

        img{

            margin: 5px auto;
            width: 100px;
            
        }
        
    }
}

@media only screen and (min-width: 310px) {}

@media only screen and (min-width: 480px) {}

@media only screen and (min-width: 768px) {

    
    div{

    &.headerLinks{
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        padding-top: 20px;
        justify-items: center;

        a{
            align-self: center;
            text-decoration: none;
            color: #322f3d;
            font-size: 16px;
            padding: 5px 20px;
            background-color: #f7f2e7;

        }

    }
    }
}

@media only screen and (min-width: 1024px) {}

@media only screen and (min-width: 1200px) {}

`;



//-----------------------------------PRESENTATIONS ZONE  -------------------


export const PresentationStyle = styled.div `

display: grid;

grid-template-columns: repeat(2,50%);
justify-content: center;


img{
    margin:40px auto;
    width:500px;
}


@media only screen and (min-width: 480px) {
}

@media only screen and (min-width: 768px) {

}

@media only screen and (min-width: 1024px) {}

@media only screen and (min-width: 1200px) {}

`


//-----------------------------------MISCELANEOUD ZONE  -------------------

export const MiscellaneousBase = styled.div `

    width: 80%;
    margin: 0 auto;
    

    div{
        &.details{
            padding: 30px;
            margin: 0px auto;
            width: 60%;
            text-align: justify;
        }

        &.inputInformation{
            border: 2px solid orange;
            border-radius: 4px;
            padding: 10px 30px;
            display: grid;
            grid-template-columns: 1fr;
            width: 65%;
            margin: 0 auto;

            input{
                margin-top: 10px;
                margin-bottom: 15px;
                padding: 10px 5px;
                
               
            }

            textArea{
                padding: 10px 5px;
                resize: none;

            }

            button{
            
                
                padding: 10px 10px;
                width: 50%;
                margin: 10px auto;
            
            }

        }
    }


@media only screen and (min-width: 310px) {}

@media only screen and (min-width: 480px) {

    div{
        &.inputInformation{
            width: 65%;


            input{
                padding: 10px 40px;
               
            }

            textArea{
                padding: 10px 40px;

            }

            button{
            
                
            padding: 10px 10px;
            width: 40%;
            margin: 10px auto;
        
        }
        }
    }
}

@media only screen and (min-width: 768px) {}

@media only screen and (min-width: 1024px) {}

@media only screen and (min-width: 1200px) {}



`



//-----------------------------------Q&A ZONE  -------------------


export const QABase = styled.div `

display: grid;

grid-template-columns: repeat(1,1fr);
justify-content: center;

div{
    
    width: 150px;
    margin: 20px auto;
    text-align: justify;
    background-color: white;
    
    &.QAParticularUnit{
        border: 3px solid orange;
        padding: 0px 10px;
        border-radius: 4px;
    }


    div{
        
        &.QASubtitle{
            
            text-align: center;
            border: 1px solid black;
            width: 60%;
        }
    }
}

@media only screen and (min-width: 480px) {

    grid-template-columns: repeat(2,40%);
}

@media only screen and (min-width: 768px) {

    grid-template-columns: repeat(3,30%);
}

@media only screen and (min-width: 1024px) {}

@media only screen and (min-width: 1200px) {}

`

//-----------------------------------PENSUM ZONE  -------------------


export const PensumBase = styled.div `

    h1{
        text-align: center;
        padding-top: 100px;
        
    }

    div{
        &.PensumBox{
            
            
            width: 80%;
            margin: 0 auto;
            border: 3px solid orange;
            border-radius: 4px;

            div{
                &.PensumLearningTask{
                    text-align: center;
                    padding-top: 40px;
                    padding-bottom: 30px;
                }

                &.PensumInformation{
                    display: grid;
                    grid-template-columns: repeat(2, 50%);
                    justify-content: center;

                    div{

                        &.PensumInformationLeft{
                            border-right: 2px solid black;
                        }

                        &.PensumInformationRigth{
                            
                        }

                        div{
                            margin: 20px;
                            text-align: justify;
                        }
                    }
                }

                &.PensumCitation{
                    font-size: 9px;
                    margin-left: 20px;
                }
            }

        }

        }

@media only screen and (min-width: 480px) {}

@media only screen and (min-width: 768px) {}

@media only screen and (min-width: 1024px) {}

@media only screen and (min-width: 1200px) {}

    
`

//-----------------------------------LOGIN ZONE  -------------------

export const LoginBase = styled.div `

        border: 2px solid red;
        display: grid;
        grid-template-columns: repeat(1, 80%);
        width: 30%;
        margin:  auto;
        justify-content: center;
        text-align: center;
        border-radius: 4px;
    
        div{
            &.LoginInput{
                display: grid;
                grid-template-columns: 1fr;

                input{
                    width: 40%;
                    border: 2px solid orange;
                    border-radius: 2px;
                    margin: 15px auto;
                    padding: 10px 10px;
                }
            }

            button{
                margin-bottom: 20px;
                padding: 5px 15px;
                border: 2px solid orange;
                border-radius: 2px;
                    background-color: orange;

                &:hover{
                    background-color: #fadcac;
                }
            }
        }
`


//-----------------------------------ABOUT US ZONE  -------------------

export const AboutUsBase = styled.div `
    text-align: center;
    background-color: #ffdd93;
`

export const AboutUsContent = styled.div `
    display: grid;
    grid-template-columns: repeat(1, 70%);
    justify-content: center;
    
    
    div{
        margin: auto;
    }
    p{
        font-size: 20px;
        margin: auto;
        text-align: justify;
        
    }
    
    img{
        width: 200px;
        margin: 50px auto;
    }

    @media only screen and (min-width: 480px) {}

    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 45%);
        
        p{
        font-size: 18px;
    }
        img{
        width: 300px;
        align-content: center;
    }
    }

    @media only screen and (min-width: 1024px) {
        p{
        font-size: 20px;
    }
        img{
        width: 400px;
    }
    }

    @media only screen and (min-width: 1200px) {}

`


//-----------------------------------PAYMENT BASE ZONE  -------------------

export const PaymentBaseStyle = styled.div `


    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-content:center;
    background-color: #ffefa0;

    @media only screen and (min-width: 480px) {
        grid-template-columns: repeat(3, 30%);

    }

    @media only screen and (min-width: 768px) {
    }

    @media only screen and (min-width: 1024px) {}

    @media only screen and (min-width: 1200px) {}
    
`

//-----------------------------------PAYMENT CARD ZONE  -------------------

export const PaymentCardStyle = styled.div `

    display: grid;
    justify-content: center;
    text-align: center;
    border: 3px solid orange;
    box-shadow: 5px 2px 20px #bbbfca;
    border-radius: 10px;
    width: 200px;
    height: 300px;
    margin: 10px auto;
    /* background-color: #ffefa0; */
    background-color: #f6f5f5;

    p{
        color: #373a40;
        margin: 0;
        &.level{
            font-size: 26px;
        }
        &.price{
            font-size: 36px;
        }
        &.description{
            font-size: 18px;
        }
    }

    button{
        margin: 0 auto;
        width: 100px;
        height: 50px;
        padding: 10px;
        background: rgb(254,255,0);
        background: linear-gradient(90deg, rgba(254,255,0,0.8631827731092436) 16%, rgba(255,255,255,1) 100%);     
        border-radius: 30px;
    }

    @media only screen and (min-width: 480px) {
        width: 120px;
        height: 200px;
        p{
        &.level{
            font-size: 22px;
        }
        &.price{
            font-size: 30px;
        }
        &.description{
            font-size: 16px;
        }
    }

    button{
        height: 40px;
    }
    }

    @media only screen and (min-width: 768px) {
        width: 200px;
        height: 210px;
        p{
        &.level{
            font-size: 22px;
        }
        &.price{
            font-size: 30px;
        }
        &.description{
            font-size: 16px;
        }
    }

    button{
        height: 40px;
    }
    }

    @media only screen and (min-width: 1024px) {
        width: 250px;
        height: 270px;
        p{
        &.level{
            font-size: 26px;
        }
        &.price{
            font-size: 36px;
        }
        &.description{
            font-size: 20px;
        }
    }

    button{
        height: 40px;
        width: 150px;
    }
    }

    @media only screen and (min-width: 1200px) {}
`


//-----------------------------------ADMIN DASHBOARD ZONE  -------------------

export const AdminDashboardStyle = styled.div `

    background-color: #ffefa0;
    margin-top: 85px;

    div{
        &.MailAndLevels{
            display: grid;
            grid-template-columns: repeat(2, 50%);
            justify-items: center;
            

            div{
                border: 3px solid blue;
                width: 95%;
                height: 600px;

            }
        }
        
        &.UsersConfiguration{
            
            display: grid;
            color: #db6400;
            justify-content: center;
        }
    
    }

    @media only screen and (min-width: 480px) {
    }

    @media only screen and (min-width: 768px) {
    }

    @media only screen and (min-width: 1024px) {}

    @media only screen and (min-width: 1200px) {}
`

//-----------------------------------MAILS BASE ZONE  -------------------

export const EmailsTicketStyle = styled.div `

    display: grid;
    grid-template-columns: repeat(2, 45%);
    justify-content: center;
    overflow-y: auto;
    
    

    form{
        width: 90%;
        margin: 10px auto;
        border: 3px solid black;
        border-radius: 7px;
        text-align: center;
    }

    button{
        width:90px;
        margin: 6px;
    }
    




    @media only screen and (min-width: 480px) {
    }

    @media only screen and (min-width: 768px) {
    }

    @media only screen and (min-width: 1024px) {}

    @media only screen and (min-width: 1200px) {}
    
`
//-----------------------------------STUDENTS BY LEVEL BASE ZONE  -------------------

export const StudentByLevelStyle = styled.div `

    display: grid;
    grid-template-columns: repeat(2, 45%);
    justify-content: center;
    
    

    form{
        width: 90%;
        margin: 10px auto;
        border: 3px solid black;
        border-radius: 7px;
        
        
    }

    div{

        &.divisionStudentByLevel{

            overflow-y: auto;
        }
    }




    @media only screen and (min-width: 480px) {
    }

    @media only screen and (min-width: 768px) {
    }

    @media only screen and (min-width: 1024px) {}

    @media only screen and (min-width: 1200px) {}
    
`

//-----------------------------------NAVBAR CONFIGURATION ZONE  -------------------

export const NavbarConfigurationStyle = styled.div `

    display: grid;
    grid-template-columns: repeat(3, 30%);
    justify-content: center;
    margin-top: 30px;
    text-align: center;
    
    a{
        text-decoration: none;
        padding: 2px 3px;
        background-color: #ffa45b;
        margin: 3px;
        border-radius: 7px;
        color: white;
        
    }
    


    @media only screen and (min-width: 480px) {
    }

    @media only screen and (min-width: 768px) {
    }

    @media only screen and (min-width: 1024px) {}

    @media only screen and (min-width: 1200px) {}
    
`
//-----------------------------------FORM CONFIGURATIONS BASE ZONE  -------------------

export const FormConfigurationStyle = styled.div `

    form{
        width:300px;
        height: 200px;
        
        display: grid;
    }
    p{
        text-align: center;
    }
    input{
        height:50px;
        border-radius: 40px;
        border: 2px solid #ffa62b;
        text-align: center;

    }
    button{
        width: 150px;
        border-radius: 20px;
        margin: 0 auto 20px;
        border: 5px solid #db6400;
        height: 50px;
        
    }

    @media only screen and (min-width: 480px) {
    }

    @media only screen and (min-width: 768px) {
    }

    @media only screen and (min-width: 1024px) {}

    @media only screen and (min-width: 1200px) {}
    
`
