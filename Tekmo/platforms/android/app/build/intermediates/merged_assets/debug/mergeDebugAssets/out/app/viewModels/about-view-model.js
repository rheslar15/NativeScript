var Observable = require("tns-core-modules/data/observable").Observable;

function getMessage() {
   return "Small company that wants to bring you the best in retro gaming!";

}
function getMessage1()
{
    return "Come visit us in Louisville, KY";
}

function createViewModel() {
    var viewModel = new Observable();
   
    viewModel.message = getMessage();

    viewModel.message1 = getMessage1();

    return viewModel;
}

exports.createViewModel = createViewModel;