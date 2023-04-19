const D_input = document.getElementById('DD') ;
const M_input = document.getElementById('MM') ;
const Y_input = document.getElementById('YY') ;
const Dy_Dest = document.getElementById('Dy') ;
const Mh_Dest = document.getElementById('Mh') ;
const Yr_Dest = document.getElementById('Yr') ;
const Clk = document.getElementById('imges') ;
const D_Must = document.getElementById('Must_1') ;  
const M_Must = document.getElementById('Must_2') ; 
const Y_Must = document.getElementById('Must_3') ; 
const D_Required = document.getElementById('Required_1') ; 
const M_Required = document.getElementById('Required_2') ; 
const Y_Required = document.getElementById('Required_3') ; 
Clk.addEventListener('click',()=>{
        Programme() ;
}) ;
//inputs is one of three inputs and required is one of three text of required
const Checking_empty =(inputs , requireds , Must)=>{
    let value1 = inputs.value;
    
    if (value1.length === 0) {
        requireds.setAttribute('style' , 'visibility : visible ');
        inputs.style.borderColor = "red" ;
        Must.style.visibility = "hidden" ;
        return false ;
    }else {
        requireds.setAttribute('style' , 'visibility : hidden ');
        inputs.style.borderColor = "none" ;
        Must.style.visibility = "hidden" ;
    return true ;
    }
}
const Programme = () => {
 let Bool_D = Days() ;
 let Bool_M = Month() ;
 let Bool_Y = Year() ;
 let y_in = Y_input.value ;
 let M_in = M_input.value ;
 let D_in = D_input.value ;
 let Date_Now = new Date() ;
 if (Bool_D && Bool_M && Bool_Y) {
    if(Number(M_input.value) <= (Date_Now.getMonth()+1)) 
        Yr_Dest.textContent= Date_Now.getFullYear() - Number(y_in) ;
    else 
        Yr_Dest.textContent= (Date_Now.getFullYear()-1) - Number(y_in) ;
    Dy_Dest.textContent = (Math.max(Number(D_in),Date_Now.getDay())-Math.min(Number(D_in),Date_Now.getDay()));
    Mh_Dest.textContent =  (Math.max(Number(M_in),(Date_Now.getMonth()))-Math.min(Number(M_in),(Date_Now.getMonth())));
    D_input.style.borderColor = "green";
    M_input.style.borderColor = "green";
    Y_input.style.borderColor = "green";
 }
}
const Days = () => {
    let Day_input = D_input.value ;
    let bool_checkD = Checking_empty(D_input,D_Required,D_Must) ;
    if(bool_checkD == true){
        if(Number(Day_input) >= 1 && Number(Day_input) <= 31){
            D_Must.style.visibility="hidden" ;
            D_input.style.borderColor = "none" 
            return true ;
        } else {
            D_Must.style.visibility="visible" ;
            D_input.style.borderColor = "red" ;
            return false ;
        }
    }
    else 
    return false ;
}
const Month = () => {
    let Month_input = M_input.value ;
    let input_d = D_input.value ;
    let bool_checkM  = Checking_empty(M_input,M_Required,M_Must) ;
 if(bool_checkM){
    if (Number(Month_input) >= 1 && Number(Month_input)<=12 ){
        if(Number(Month_input) % 2 === 0 && Number(input_d) <= 30) {
            if(Number(Month_input) === 2) {
                if(Number(input_d) <= 29) 
                {
                  D_Must.style.visibility = "hidden" ;
                  D_input.style.borderColor = "none" ;
                  M_Must.style.visibility = "hidden" ;
                  M_input.style.borderColor = "none" ;
                  return true ;  
                }
                else {
                D_Must.style.visibility = "visible" ;
                D_input.style.borderColor = "red" ;
                }
            }else 
            return true ;
        } else if(Number(Month_input) % 2 != 0 && Number(input_d)<=31) {
                  D_Must.style.visibility = "hidden" ;
                  D_input.style.borderColor = "none" ;
                  M_Must.style.visibility = "hidden" ;
                  M_input.style.borderColor = "none" ;
            return true ;
        }else {
            M_Must.style.visibility = "visible" ;
            M_input.style.borderColor = "red" ;
        }
    } else 
    {
        M_Must.style.visibility = "visible" ;
        M_input.style.borderColor = "red" ;
    }
    }
    return false ;
}
const Year = () => {
    let Year_input = Y_input.value; 
    let DateNow = new Date() ;
    let bool_checkY = Checking_empty(Y_input,Y_Required,Y_Must) ;
if(bool_checkY){
    if(Number(Year_input) <= DateNow.getFullYear() && Number(Year_input) >= 1 )
    {
        Y_Must.style.visibility = "hidden" ;
        Y_input.style.borderColor = "none" ;
      return true ;  
    }
    else {
        Y_Must.style.visibility = "visible" ;
        Y_input.style.borderColor = "red" ;
    }
    }
    return false ;
}