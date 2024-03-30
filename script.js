

function set_Err(element,msg) {
    let parent_El = element.parentElement;

    element.classList.remove("is_valid")
    element.classList.add("is-invalid")

    let in_msg = parent_El.querySelector(".invalid-feedback")
    in_msg.textContent=msg;
}

function set_suc(element) {
    element.classList.remove("is-invalid")
    element.classList.add("is-valid")
}


let name_check=1;
let mail_check=1;
let mob_check=1;
let gender_check=1;
let addr_check=1;
let dist_check=1;
let pin_check=1;
let lang_check=1;
let state_check=1;

let gen_val=0;
let lan_val=" ";
let sta_val=0;
// ------------------------------------------------------------------------


function namevalidate() {

    let name = document.getElementById('name');

    if (name.value=='') {
        set_Err(name,"invalid name");        
    }
    else if(name.value.length > 0) {
        set_suc(name);  
        name_check=2;  
    }
    else{
        set_Err(name,"invalid name");        
    }

}

// -------------------------------------------------------------------------

function maill() {  
    let mail = document.getElementById("mail");

    const isValidEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    if (isValidEmail(mail.value)) {
        console.log("email in format");
        set_suc(mail);
        mail_check=2;
    }
    else if(mail.value == ""){
        set_Err(mail,"Mail is required")
    }
    else if(!isValidEmail(mail.value)){
        set_Err(mail,"Enter a valid Email")
    }
    else{
        set_Err(mail,'invalid mail');
    };
}

// -------------------------------------------------------------------------

function mobilee() {
    let mobile = document.getElementById('mobile');

    if (mobile.value.length == 10) {
        set_suc(mobile);
        mob_check=2;
    }
    else if(mobile.value=='' || isNaN(mobile.value) || mobile.value.length != 10){
        set_Err(mobile,"enter a valid mobile number");
    }
}

// -------------------------------------------------------------------------
 function textarr() {
    let textar = document.getElementById('Address');

    if (textar.value.length > 10) {
        set_suc(textar);
       addr_check=2;
    }
    else{
        set_Err(textar,"fill the address")
    }
 }

 // -------------------------------------------------------------------------

 function pincod() {
    let pincode = document.getElementById("Pincode")

    if (pincode.value.length == 6 && !isNaN(pincode.value)) {
        set_suc(pincode);
        pin_check=2;
    }

    else{
        set_Err(pincode,"enter a valid pincode")
    }
 }

// -------------------------------------------------------------------------

function district() {
    let dist = document.getElementById('dist');

    if (dist.value.length >= 3 && isNaN(dist.value)) {
        set_suc(dist)
        dist_check=2;
    }
    else{
        set_Err(dist,"enter a valid district name")
    }
}

// -------------------------------------------------------------------------
 
    function gender_validate() {

        let gender =document.querySelectorAll('input[name="Gender"]')

        gender.forEach((genderval)=>{

            if (genderval.checked) {
                gender_check=2;
                gen_val = genderval.id;
                console.log(gen_val);
            }

            if (gender_check == 2) {
                document.getElementById('gender_inp').classList.remove('is-invalid')
            }
            else if (gender_check == 1) {
                console.log(genderval);
                document.getElementById('gender_inp').classList.add('is-invalid')

            }
            
        })

        //  console.log();

}

// -------------------------------------------------------------------------
 
function lang_validate() {

    let lang =document.querySelectorAll('input[name="lang"]');

    lang.forEach((langval)=>{

        if (langval.checked) {
            lang_check=2;
            lan_val = langval.id;
            console.log(lan_val); 
        }

        if (lang_check == 2) {
            document.getElementById('lang_inp').classList.remove('is-invalid')
        }
        else if (lang_check == 1) {
            console.log(langval);
            document.getElementById('lang_inp').classList.add('is-invalid')

        }
        
    })


}

// -------------------------------------------------------------------------


let selectt = document.getElementById('selectt')

selectt.addEventListener('input',selectf);

function selectf(e){

    let sel_val = e.target.value;
    console.log(sel_val);

    if (sel_val != '') {
        set_suc(selectt)
        state_check=2;
    }
    else{
        set_Err(selectt,"please select the state")
    }
}


// -------------------------------------------------------------------------
// validate on submit

function validate() {
    if(check_all()){
        // event.preventDefault();

    let na= document.getElementById("name").value;
    let ma= document.getElementById("mail").value;
    let ad= document.getElementById("Address").value;
    let mob= document.getElementById("mobile").value;
    let pin= document.getElementById("Pincode").value;
    let da= document.getElementById("dist").value;
    let sa= document.getElementById("selectt");

    let sap = sa.options[sa.selectedIndex].value;

    document.write(`Name : ${na} <br>`)
    document.write(`Email : ${ma} <br>`)
    document.write(`Mobile no : ${mob} <br>`)
    document.write(`Email : ${gen_val} <br>`)
    document.write(`Address : ${ad} <br>`)
    document.write(`Pincode : ${pin} <br>`)
    document.write(`District : ${da} <br>`)
    document.write(`State : ${sap} <br>`)
    document.write(`Lang : ${lan_val} <br>`)


        return true;
    }

    else{
        return false;
    }


}

function check_all() {
    if (name_check ==2 && mail_check == 2 && mob_check == 2 && gender_check == 2 && addr_check == 2 && pin_check ==2 && dist_check ==2 && state_check ==2 && lang_check ==2) {
        return true;
    }
     if (name_check!=2) {
        namevalidate();
    }
     if(mail_check != 2){
        maill();
    }
    if (mob_check != 2) {
        mobilee();
    }
    if (gender_check != 2) {
        gender_validate();
    }
    if (addr_check != 2) {
        textarr();
    }
    if (dist_check !=2) {
        district()
    }
    if (pin_check != 2) {
        pincod();
    }
    if(state_check != 2){
        set_Err(selectt,"please select the state")
    }
    if (lang_check != 2) {
        lang_validate();
    }

// -------------------------------------------------------------------------


} 