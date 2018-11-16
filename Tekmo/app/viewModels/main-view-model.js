var Observable = require("tns-core-modules/data/observable").Observable;


function getMessage() {
    return "Welcome to the Tekmo App!";
}

function createViewModel() {
    var viewModel = new Observable();
    
     

     viewModel.message = getMessage();

    // viewModel.onTap = function () {
       

       
    // }

    return viewModel;
}

exports.createViewModel = createViewModel;