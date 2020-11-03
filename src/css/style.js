import styled from "styled-components";

export const SystemBase = styled.div `

    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
    

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
    
    &.QAParticularUnit{
        border: 1px solid black;
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
        margin: 20px auto;
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