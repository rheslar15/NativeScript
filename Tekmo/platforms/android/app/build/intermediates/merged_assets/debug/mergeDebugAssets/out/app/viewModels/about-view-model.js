var Observable = require("tns-core-modules/data/observable").Observable;

function getMessage() {
   return "Small company that wants to bring you the best in retro gaming!";

}
function createViewModel() {
    var viewModel = new Observable();
   
    viewModel.message = getMessage();
    
    return viewModel;
}

exports.createViewModel = createViewModel;