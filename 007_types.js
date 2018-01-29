// Boolean
var paidAccount = false;
// Number
var age = 33;
var taxRate = 7.5;
// String
var fullName = "Adam Prusse";
// Array
var ages = [33, 28, 22];
// Tuple
var player;
player = [3, "Corerra", .333, 33];
// Enum
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["Approved"] = 0] = "Approved";
    ApprovalStatus[ApprovalStatus["Pending"] = 1] = "Pending";
    ApprovalStatus[ApprovalStatus["Rejected"] = 2] = "Rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
var job = ApprovalStatus.Pending;
// Any
var apiData = [123, 'Adam', false];
// Void
function printOut(msg) {
    console.log(msg);
}
//# sourceMappingURL=007_types.js.map