function subscribe() {
    var oForm = document.forms["signup"];
    var name = oForm.elements["fullname"].value;
    var email = oForm.elements["email"].value;
    
    /*
    //Save the name and email to a file
    //below code should save to a file named signup.csv, but doesnt work need to debug
    let newfile = new ActiveXObject("Scripting.FileSystemObject");
    let editFile = newfile.OpenTextFile("/home/vikramgu/public_html/assignment01/signup.csv", 1, true);
    editFile.WriteLine(name + "," + email);
    editFile.Close();
    */
   
    alert(name + ", you are subscribed to our newsletter with email: " + email);
    
}