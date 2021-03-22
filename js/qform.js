function querry()
{
    var uName=document.qform.uname.value;
    var eMail=document.qform.email.value;
    var Subject=document.qform.subject.value;
    var Query=document.qform.query.value;

    

    if(uName=="")
    {
        alert("Please Enter a Username !")
    }
    else if(eMail=="")
    {
        alert("Please Enter a E-Mail !")
    }
    else if(Subject=="")
    {
        alert("Please Select a Subjeect !")
    }
    else if(Query=="")
    {
        alert("Please Enter Details!")
    }
}